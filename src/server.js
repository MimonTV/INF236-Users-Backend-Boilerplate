import express from 'express';
import cors from 'cors';
import routes from './controllers/routes.js';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


const PORT = 3001;
const app = express();  // Instanciamos el servidor web
app.use(express.json());// Habilitamos el parsing automático de requests en JSON, para su posterior uso
app.use(cors());		// Desactivamos las políticas CORS (para aceptar solicitudes desde cualquier dominio)
routes(app);			// Añadimos las rutas de nuestro backend al servidor web

app.use(bodyParser.json());

const users = [];

app.post('/users/create', async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ id: users.length + 1, email, password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully' });
  });
  
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = users.find((u) => u.email === email);
  
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user.id, email: user.email }, 'secret_key', {
        expiresIn: '1h', // Token expires in 1 hour
      });
      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });
  
  // Middleware to verify JWT token
  const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
  
    if (!token) return res.status(401).json({ message: 'Access denied' });
  
    jwt.verify(token, 'secret_key', (err, user) => {
      if (err) return res.status(403).json({ message: 'Invalid token' });
  
      req.user = user;
      next();
    });
  };
  
  app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Protected route accessed successfully', user: req.user });
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

  app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Protected route accessed successfully', user: req.user });
  });

export default app;
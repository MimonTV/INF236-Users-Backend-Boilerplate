import dotenv from "dotenv";
import database from "./src/database.js";
import loadModels from "./src/models/loader.js";
import server from "./src/server.js";

// Cargar las relaciones de los modelos 
loadModels();

dotenv.config();
server.listen(process.env.PORT, () =>
	console.log(`Backend corriendo en http://localhost:${process.env.PORT}`)
);

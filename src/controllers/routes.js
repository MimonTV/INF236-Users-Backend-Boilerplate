import UserController from './UserController.js';
import RequestController from './ReqController.js';

export default (app) => {
	const userController = new UserController();
	const reqController = new RequestController();

	app.get('/users', userController.getAll);
	app.post('/users', userController.create);
	app.get('/users/:userId', userController.get);
	app.put('/users/:userId', userController.update);
	app.delete('/users/:userId', userController.delete);
	app.post('/login', userController.login); 

	
	app.get('/analista', reqController.getAll)
	app.post('/analista', reqController.create);
	app.get('/analista/:requestId', reqController.get);
	app.put('/analista/:requestId', reqController.update);
	app.delete('/analista/:requestId', reqController.delete);
};
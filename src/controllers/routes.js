import UserController from './UserController.js';

export default (app) => {
	app.get('/users', UserController.getAll);
};
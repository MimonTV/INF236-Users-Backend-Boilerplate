import User from '../models/User.js';

export default class UserController {
	 async getAll(req, res) {
		const users = await User.findAll();
		res.send(users);
	}
};

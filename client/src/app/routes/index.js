import Login from '../../components/Login';
import User from '../../components/User';

// routes to be mapped out within App.js

const Routes = [
	{
		id: 'Login',
		path: '/login',
		component: Login
	},
	{
		id: 'User',
		path: '/user',
		component: User
	}
];

export default Routes;

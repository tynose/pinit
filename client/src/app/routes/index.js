import Home from '../../containers/Home';
import User from '../../containers/User';

// routes to be mapped out within App.js

const Routes = [
	{
		id: 'home',
		path: '/home',
		component: Home
	},
	{
		id: 'User',
		path: '/user',
		component: User
	}
];

export default Routes;

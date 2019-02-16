import Home from '../../containers/Home';
import User from '../../containers/User';

// routes to be mapped out within App.js

const Routes = [
	{
		id: 'home',
		path: '/',
		component: Home
	},
	{
		id: 'user',
		path: '/:id',
		component: User
	}
];

export default Routes;

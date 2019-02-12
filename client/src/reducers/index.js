import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import signUpReducer from './signup.reducer';
import loginReducer from './login.reducer';
import uiReducer from './ui.reducer';
import homePageReducer from './homePage.reducer';

export default combineReducers({
	user: userReducer,
	signUp: signUpReducer,
	login: loginReducer,
	ui: uiReducer,
	homePage: homePageReducer
});

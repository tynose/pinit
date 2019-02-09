import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import signUpReducer from './signup.reducer';
import loginReducer from './login.reducer';

export default combineReducers({
	user: userReducer,
	signUp: signUpReducer,
	login: loginReducer
});

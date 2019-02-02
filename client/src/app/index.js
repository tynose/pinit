import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../components/App';
import { GlobalStyles } from '../utils/styles/globalStyles';
import store from '../store';
import Routes from './routes';
import theme from '../utils/styles/theme';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<ThemeProvider theme={theme}>
				<Fragment>
					<GlobalStyles />
					<App routes={Routes} />
				</Fragment>
			</ThemeProvider>
		</Router>
	</Provider>,
	document.getElementById('root')
);

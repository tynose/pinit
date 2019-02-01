import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../components/App';
import { GlobalStyles } from '../utils/styles/globalStyles';
import Routes from './routes';
import theme from '../utils/styles/theme';

ReactDOM.render(
	<Router>
		<ThemeProvider theme={theme}>
			<Fragment>
				<GlobalStyles />
				<App routes={Routes} />
			</Fragment>
		</ThemeProvider>
	</Router>,
	document.getElementById('root')
);

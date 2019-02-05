import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';

const Container = styled.div`
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
`;

class App extends Component {
	render() {
		const { routes } = this.props;

		return (
			<Container>
				<Switch>
					{routes.map(route => (
						<Route
							key={route.id}
							path={route.path}
							render={() => <route.component data={route.data} />}
						/>
					))}
					{/* <Redirect to={routes[0].path} /> */}
				</Switch>
			</Container>
		);
	}
}

export default App;

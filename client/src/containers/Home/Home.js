import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import SignUp from '../SignUp';
import Login from '../Login';
import Button from '../../components/Button';
import { flexCenter } from '../../utils/styles/mixin';
import { homeToggle } from '../../actions/login.actions';
import LandingPage from '../../containers/LandingPage';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	${flexCenter}
	${props =>
		props.log &&
		css`
			background-image: url('https://source.unsplash.com/random');
			background-size: cover;
			background-repeat: no-repeat;
		`}
`;

class Home extends Component {
	render() {
		const { login, homeToggle, isLoggedIn } = this.props;

		return (
			<>
				{!isLoggedIn ? (
					<Container log>
						<Button onClick={() => homeToggle(login)} home>
							{login ? 'Sign up' : 'Login'}
						</Button>
						{login ? <Login /> : <SignUp />}
					</Container>
				) : (
					<Container>
						<LandingPage />
					</Container>
				)}
			</>
		);
	}
}

Home.propTypes = {
	homeToggle: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	login: state.ui.login,
	isLoggedIn: state.login.isLoggedIn
});

export default connect(
	mapStateToProps,
	{ homeToggle }
)(Home);

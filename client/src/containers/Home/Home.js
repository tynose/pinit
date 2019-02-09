import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import SignUp from '../SignUp';
import Login from '../Login';
import Button from '../../components/Button';
import { flexCenter } from '../../utils/styles/mixin';
import { homeToggle } from '../../actions/login.actions';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	${flexCenter}
	background-image: url('https://source.unsplash.com/random');
	background-size: cover;
	background-repeat: no-repeat;
`;

class Home extends Component {
	render() {
		const { login, homeToggle, isLoggedIn } = this.props;

		console.log(this.props);

		return (
			<Container>
				<Button onClick={() => homeToggle(login)} home>
					{login ? 'Sign up' : 'Login'}
				</Button>
				{login ? <Login /> : <SignUp />}
				{isLoggedIn && <Redirect to='/user' />}
			</Container>
		);
	}
}

Home.propTypes = {};

const mapStateToProps = state => ({
	login: state.login.login,
	isLoggedIn: state.login.isLoggedIn
});

const mapDispatchToProps = dispatch => {
	return {
		homeToggle: toggle => {
			dispatch(homeToggle(toggle));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SignUp from '../../components/SignUp';
import Login from '../../components/Login';
import { flexCenter } from '../../utils/styles/mixin';

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
		return (
			<Container>
				{/* <SignUp /> */}
				<Login />
			</Container>
		);
	}
}

Home.propTypes = {};

export default connect(null)(Home);

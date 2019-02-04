import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
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
				<h1>Home</h1>
				<a href='https://github.com/login/oauth/authorize?client_id=myclientid123&redirect_uri=http://localhost:3000/callback'>
					Login with github
				</a>
			</Container>
		);
	}
}

Home.propTypes = {};

export default connect(null)(Home);

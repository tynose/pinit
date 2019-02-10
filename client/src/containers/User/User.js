import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user.actions';
import NavigationBar from '../NavigationBar';

const Container = styled.div`
	height: 100vh;
	width: 100%;
`;

class User extends Component {
	componentWillMount() {
		// this.props.fetchUser();
	}
	render() {
		const { name, email } = this.props.user;

		return (
			<Container>
				<NavigationBar />
			</Container>
		);
	}
}

User.propTypes = {
	fetchUser: PropTypes.func.isRequired
};

const mapStatetoProps = state => ({
	user: state.user.user
});

export default connect(
	mapStatetoProps,
	{ fetchUser }
)(User);

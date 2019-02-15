import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUser, fetchUserId } from '../../actions/user.actions';
import NavigationBar from '../NavigationBar';
import { withRouter } from 'react-router-dom';
import LinkImage from '../LinkImage';
import { flexCenter } from '../../utils/styles/mixin';

const Container = styled.div`
	height: 100vh;
	width: 100%;
	padding-top: 70px;
	overflow-y: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const Profile = styled.div`
	width: 100%;
	height: 200px;
	flex-direction: column;
	justify-content: space-evenly;
	${flexCenter};
`;

class User extends Component {
	async componentDidMount() {
		await this.props.fetchUser();
		this.props.fetchUserId(this.props.match.params.id);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.profile.id !== this.props.profile.id) {
			this.props.fetchUserId(this.props.match.params.id);
		}
	}

	render() {
		const { profile } = this.props;

		return (
			<Container>
				<NavigationBar />
				<Profile>
					<h1>{profile.name}</h1>
					<p>photos i've linked to</p>
				</Profile>
				{profile.Links &&
					profile.Links.map(image => <LinkImage key={image.id} {...image} />)}
			</Container>
		);
	}
}

User.propTypes = {};

const mapStatetoProps = state => ({
	profile: state.user.profile
});

const mapDispatchToProps = dispatch => {
	return {
		fetchUser: () => {
			dispatch(fetchUser());
		},
		fetchUserId: id => {
			dispatch(fetchUserId(id));
		}
	};
};
export default connect(
	mapStatetoProps,
	mapDispatchToProps
)(withRouter(User));

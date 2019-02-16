import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	fetchUser,
	fetchUserId,
	fetchUserPhotos
} from '../../actions/user.actions';
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
		this.props.fetchUserPhotos(this.props.match.params.id, 10);
	}

	// componentDidUpdate(prevProps) {
	// 	console.log(this.props.photos.length);
	// 	console.log(prevProps.photos.length);

	// 	if (this.props.photos.length !== prevProps.photos.length) {
	// 		this.props.fetchUserPhotos(
	// 			this.props.match.params.id,
	// 			this.props.photos.length - 1
	// 		);
	// 		console.log('different');
	// 	}
	// }

	handleScroll = () => {
		if (
			this.isScroll &&
			this.isScroll.scrollTop + this.isScroll.clientHeight >=
				this.isScroll.scrollHeight
		) {
			this.props.fetchUserPhotos(
				this.props.match.params.id,
				10 + this.props.photos.length
			);
		}
	};

	render() {
		const { profile, photos } = this.props;

		return (
			<Container
				onScroll={this.handleScroll}
				ref={isScroll => {
					this.isScroll = isScroll;
				}}>
				<NavigationBar />
				<Profile>
					<h1>{profile.name}</h1>
					<p>photos i've linked to</p>
				</Profile>
				{photos && photos.map(image => <LinkImage key={image.id} {...image} />)}
			</Container>
		);
	}
}

User.propTypes = {};

const mapStatetoProps = state => ({
	profile: state.user.profile,
	photos: state.user.photos
});

const mapDispatchToProps = dispatch => {
	return {
		fetchUser: () => {
			dispatch(fetchUser());
		},
		fetchUserId: id => {
			dispatch(fetchUserId(id));
		},
		fetchUserPhotos: (id, limit) => {
			dispatch(fetchUserPhotos(id, limit));
		}
	};
};
export default connect(
	mapStatetoProps,
	mapDispatchToProps
)(withRouter(User));

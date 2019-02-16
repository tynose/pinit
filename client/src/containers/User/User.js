import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	fetchUser,
	fetchUserId,
	fetchUserPhotos
} from '../../actions/user.actions';
import NavigationBar from '../../components/NavigationBar';
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

const Wrapper = styled.div`
	width: 100%;
	height: 200px;
	padding: 100px;
	text-align: center;
	flex-direction: column;
	justify-content: space-evenly;
	${flexCenter};
`;

class User extends Component {
	async componentDidMount() {
		await this.props.fetchUser();
		this.props.fetchUserId(this.props.match.params.id);
		this.props.fetchUserPhotos(this.props.match.params.id, 0);
	}

	handleScroll = () => {
		if (
			this.isScroll &&
			this.isScroll.scrollTop + this.isScroll.clientHeight >=
				this.isScroll.scrollHeight - 1
		) {
			this.props.fetchUserPhotos(
				this.props.match.params.id,
				this.props.photos.length + 11
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
				<Wrapper>
					<h1>{profile.name}</h1>
					<p>photos i've linked to</p>
				</Wrapper>
				{photos.length > 0 ? (
					photos.map(image => <LinkImage key={image.id} {...image} />)
				) : (
					<Wrapper>
						<h1>it looks like you have no linked images</h1>
					</Wrapper>
				)}
			</Container>
		);
	}
}

User.propTypes = {
	fetchUser: PropTypes.func.isRequired,
	fetchUserId: PropTypes.func.isRequired,
	fetchUserPhotos: PropTypes.func.isRequired,
	history: PropTypes.object,
	location: PropTypes.object,
	match: PropTypes.object,
	profile: PropTypes.shape({
		email: PropTypes.string,
		name: PropTypes.string,
		id: PropTypes.number
	}),
	photos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			user_id: PropTypes.number,
			photo_id: PropTypes.string,
			href: PropTypes.string,
			url: PropTypes.string
		})
	)
};

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

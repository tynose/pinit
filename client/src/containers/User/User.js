import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/homePage.actions';
import { fetchUser } from '../../actions/user.actions';
import NavigationBar from '../NavigationBar';
import { url } from '../../utils/constants/api';
import LinkImage from '../LinkImage';

const Container = styled.div`
	height: 100vh;
	width: 100%;
	padding-top: 70px;
	overflow-y: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

class User extends Component {
	componentDidMount() {
		this.props.fetchPhotos(url('computers'));
		this.props.fetchUser();
	}

	handleScroll = () => {
		if (
			this.isScroll &&
			this.isScroll.scrollTop + this.isScroll.clientHeight >=
				this.isScroll.scrollHeight
		) {
			this.props.fetchPhotos(this.props.nextPage, this.props.fetching);
		}
	};

	render() {
		const { photos } = this.props;
		console.log(photos);

		return (
			<Container
				onScroll={this.handleScroll}
				ref={isScroll => {
					this.isScroll = isScroll;
				}}>
				<NavigationBar />
				{photos &&
					photos.map(image => (
						<LinkImage
							key={image.id}
							src={`${image.src.medium}`}
							alt={image.photographer}
							photographer={image.photographer}
						/>
					))}
			</Container>
		);
	}
}

User.propTypes = {
	fetchPhotos: PropTypes.func.isRequired
};

const mapStatetoProps = state => ({
	fetching: state.homePage.fetching,
	photos: state.homePage.photos,
	nextPage: state.homePage.nextPage,
	search: state.homePage.search,
	user: state.user.user
});

const mapDispatchToProps = dispatch => {
	return {
		fetchPhotos: (url, fetched) => {
			dispatch(fetchPhotos(url, fetched));
		},
		fetchUser: () => {
			dispatch(fetchUser());
		}
	};
};

export default connect(
	mapStatetoProps,
	mapDispatchToProps
)(User);

import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user.actions';
import { fetchPhotos } from '../../actions/homePage.actions';
import NavigationBar from '../NavigationBar';
import { url } from '../../utils/constants/api';

require('dotenv').config();

const Image = styled.img`
	width: 200px;
	height: 200px;
`;

class User extends Component {
	componentDidMount() {
		this.props.fetchPhotos(url('computers'));
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
		return (
			<div
				style={{
					height: '100vh',
					width: '100%',
					overflowY: 'auto'
				}}
				onScroll={this.handleScroll}
				ref={isScroll => {
					this.isScroll = isScroll;
				}}>
				<NavigationBar />
				{photos &&
					photos.map((image, index) => (
						<Image key={index} src={`${image.src.small}`} alt='pexel' />
					))}
			</div>
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
	search: state.homePage.search
});

const mapDispatchToProps = dispatch => {
	return {
		fetchPhotos: (url, fetched) => {
			dispatch(fetchPhotos(url, fetched));
		}
	};
};

export default connect(
	mapStatetoProps,
	mapDispatchToProps
)(User);

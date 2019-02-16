import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Image from '../../components/Image';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import UrlShort from '../UI/UrlShort.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addLink, deleteLink } from '../../actions/links.actions';
import { deletePhoto } from '../../actions/user.actions';

const Container = styled.figure`
	position: relative;
	background-color: transparent;
	border-radius: 5px;
	margin: 10px;
	height: max-content;
	&:hover {
		background-color: ${props => props.theme.colors.blackOp};
	}
`;

const StyledUrlShort = styled(UrlShort)`
	${Container}:hover & {
		display: flex;
	}
`;

const StyledButton = styled(Button)`
	position: absolute;
	${props =>
		props.pin &&
		css`
			border-radius: 50%;
			top: 10px;
			right: 10px;
		`};
	${props =>
		props.link &&
		css`
			bottom: 10px;
			right: 10px;
		`};
	color: white;
	padding: 6px;
	background-color: ${props => props.theme.colors.pinterest};
	display: none;
	${Container}:hover & {
		display: flex;
	}
`;

const StyledIcon = styled(Icon)`
	width: 20px;
	height: 20px;
`;

class LinkImage extends Component {
	render() {
		const {
			url,
			href,
			user,
			id,
			addLink,
			deleteLink,
			deletePhoto,
			photos,
			className,
			match
		} = this.props;

		const active =
			user.id == match.params.id ? true : '/' === match.url ? true : false;

		const deleteActive = user.id == match.params.id;

		return (
			<Container>
				{active && (
					<StyledButton
						onClick={() =>
							!deleteActive
								? addLink({
										url,
										href,
										photo_id: id,
										user_id: user.id
								  })
								: (deleteLink(id), deletePhoto(id, photos))
						}
						pin>
						<StyledIcon icon={!deleteActive ? 'pin' : 'close'} />
					</StyledButton>
				)}
				<StyledUrlShort className={className} url={url} />
				<a href={url}>
					<StyledButton link>{`${url.substring(12, 22)}...`}</StyledButton>
				</a>
				<Image src={href} />
			</Container>
		);
	}
}

LinkImage.propTypes = {
	addLink: PropTypes.func.isRequired,
	deleteLink: PropTypes.func.isRequired,
	deletePhoto: PropTypes.func.isRequired,
	history: PropTypes.object,
	href: PropTypes.string,
	id: PropTypes.number,
	location: PropTypes.object,
	match: PropTypes.object,
	photographer: PropTypes.string,
	photographer_url: PropTypes.string,
	photos: PropTypes.array,
	url: PropTypes.string,
	user: PropTypes.object
};

const mapStateToProps = state => ({
	user: state.user.user,
	photos: state.user.photos
});

const mapDispatchToProps = dispatch => {
	return {
		addLink: data => {
			dispatch(addLink(data));
		},
		deleteLink: id => {
			dispatch(deleteLink(id));
		},
		deletePhoto: (id, photos) => {
			dispatch(deletePhoto(id, photos));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(LinkImage));

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
import { fetchUserId } from '../../actions/user.actions';

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
			fetchUserId,
			addLink,
			deleteLink,
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
								: (deleteLink(id), fetchUserId(match.params.id))
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
	addLink: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	user: state.user.user
});

const mapDispatchToProps = dispatch => {
	return {
		addLink: data => {
			dispatch(addLink(data));
		},
		deleteLink: id => {
			dispatch(deleteLink(id));
		},
		fetchUserId: id => {
			dispatch(fetchUserId(id));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(LinkImage));

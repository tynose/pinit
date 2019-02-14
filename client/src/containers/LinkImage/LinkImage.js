import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Image from '../../components/Image';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import UrlShort from '../UI/UrlShort.js';
import { connect } from 'react-redux';
import { addLink } from '../../actions/links.actions';

const Container = styled.figure`
	position: relative;
	background-color: transparent;
	border-radius: 5px;
	margin: 10px;
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
			width: 100px;
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
		const { url, user, src, id, addLink, className } = this.props;

		return (
			<Container>
				<StyledButton
					onClick={() =>
						addLink({ url, href: src.medium, photo_id: id, user_id: user.id })
					}
					pin>
					<StyledIcon icon={'pin'} />
					Save
				</StyledButton>
				<StyledUrlShort className={className} url={url} />
				<a href={url}>
					<StyledButton link>{`${url.substring(12, 22)}...`}</StyledButton>
				</a>
				<Image src={src.medium} />
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
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LinkImage);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../components/Icon';
import styled from 'styled-components';
import Button from '../../../components/Button';

const Container = styled.div`
	align-items: center;
	position: absolute;
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	bottom: -75px;
	width: 200px;
	background-color: white;
	padding: 10px;
	border: 0.5px solid rgb(239, 239, 239);
	z-index: 2;
	height: 70px;
	justify-content: space-around;
	&::before {
		content: '';
		margin: auto;
		position: absolute;
		left: 18px;
		bottom: 89%;
		width: 15px;
		height: 15px;
		background: #fff;
		border-top: 1px solid ${props => props.theme.colors.lightGray};
		border-right: 1px solid ${props => props.theme.colors.lightGray};
		transform: rotate(-45deg);
	}
`;

const StyledButton = styled(Button)`
	position: absolute;
	color: white;
	padding: 6px;
	border-radius: 50%;
	bottom: 10px;
	left: 10px;
	background-color: ${props => props.theme.colors.pinterest};
	display: ${props => props.click};
`;

const StyledIcon = styled(Icon)`
	width: 20px;
	height: 20px;
`;

export default class UrlShort extends Component {
	state = {
		urlActive: false,
		shortUrl: ''
	};

	urlToggle = () => {
		this.setState(prevState => ({
			urlActive: !prevState.urlActive
		}));
	};

	getUrl = url => {
		fetch('/url/add', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(url)
		})
			.then(resp => resp.json())
			.then(shortUrl => {
				this.setState({
					shortUrl
				});
			})
			.catch(err => {
				throw new Error(err);
			});
	};

	render() {
		const { urlActive, shortUrl } = this.state;
		const { className, url } = this.props;

		return (
			<>
				<StyledButton
					click={urlActive ? 'flex' : 'none'}
					className={className}
					onClick={() => {
						this.urlToggle();
						this.getUrl({ href: url });
					}}
					short>
					<StyledIcon icon={'share'} />
				</StyledButton>
				{urlActive && (
					<Container>
						<span>Share this link:</span>
						{shortUrl}
					</Container>
				)}
			</>
		);
	}
}

UrlShort.propTypes = {
	className: PropTypes.string,
	url: PropTypes.string
};

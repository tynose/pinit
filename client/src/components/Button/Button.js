import React from 'react';
import styled, { css } from 'styled-components';
import { flexCenter } from '../../utils/styles/mixin';

const StyledButton = styled.button`
	transform: all 1s ease;
	${flexCenter}
	${props =>
		props.isForm &&
		css`
			width: 100%;
			background-color: ${props => props.theme.colors.pinterest};
			color: white;
			padding: 0px 18px;
			height: 36px;
			margin: 10px 0;
		`};
	${props =>
		props.home &&
		css`
			position: absolute;
			top: 30px;
			right: 50px;
			width: 120px;
			padding: 10px;
		`}
	${props =>
		props.search &&
		css`
			position: absolute;
			background-color: transparent;
			margin: 0 10px;
		`}
		${props =>
			props.nav &&
			css`
				border-radius: 50%;
				padding: 10px;
				&:hover {
					background-color: ${props => props.theme.colors.lightGray};
				}
			`}
	&:hover {
		opacity: 0.8;
	}
`;

const Button = ({ children, ...others }) => (
	<StyledButton aria-label='toggle' aria-pressed='mixed' {...others}>
		{children}
	</StyledButton>
);

export default Button;

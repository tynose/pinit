import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
	height: 36px;
	border-radius: 4px;
	padding: 0px 18px;
	font-size: 1.1rem;
	margin: 10px 0;
	vertical-align: middle;
	text-align: center;
	transform: opacity 1s ease;
	${props =>
		props.form &&
		css`
			width: 100%;
			background-color: ${props => props.theme.colors.pinterest};
			color: white;
		`};
	${props =>
		props.home &&
		css`
			position: absolute;
			top: 30px;
			right: 50px;
		`}
	&:hover {
		opacity: 0.9;
	}
`;

const Button = ({ children, ...others }) => (
	<StyledButton aria-label='toggle' aria-pressed='mixed' {...others}>
		{children}
	</StyledButton>
);

export default Button;

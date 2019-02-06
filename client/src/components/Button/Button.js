import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
	transform: opacity 1s ease;
	${props =>
		props.isForm &&
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

import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	width: 100%;
	height: 36px;
	border-radius: 4px;
	padding: 0px 18px;
	font-size: 1.1rem;
	margin: 10px 0;
	vertical-align: middle;
	text-align: center;
	color: white;
	background-color: ${props => props.theme.colors.pinterest};
	transform: opacity 1s ease;
	&:hover {
		opacity: 0.9;
	}
`;

const FormButton = ({ children, ...others }) => (
	<Button aria-label='toggle' aria-pressed='mixed' {...others}>
		{children}
	</Button>
);

export default FormButton;

import React from 'react';
// import { Link } from 'react-router-dom';
import Icon from '../Icon';
import styled from 'styled-components';

const StyledButton = styled.a`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 100%;
	padding: 5px;
	color: white;
	background-color: ${props => props.theme.colors[props.icon]};
`;

const StyledIcon = styled(Icon)`
	width: 24px;
	height: 24px;
	margin: 0 5px;
`;

const Auth = styled.div`
	margin: 0 auto 0 34px;
`;

const OauthButton = ({ icon, className }) => (
	<StyledButton href='/auth/github' icon={icon} className={className} form>
		<StyledIcon icon={icon} />
		<Auth>{`Continue with ${`${icon[0].toUpperCase()}${icon.slice(1)}`}`}</Auth>
	</StyledButton>
);

export default OauthButton;

import React from 'react';
import Icon from '../Icon';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { isLoggedIn } from '../../actions/login.actions';

const StyledButton = styled.a`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 100%;
	padding: 5px;
	margin: 10px 0;
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

const OauthButton = ({ icon, className, isLoggedIn }) => (
	<StyledButton
		href={`/auth/${icon}`}
		icon={icon}
		className={className}
		onClick={() => {
			localStorage.clear();
			localStorage.setItem('log', true);
		}}>
		<StyledIcon icon={icon} />
		<Auth>{`Continue with ${`${icon[0].toUpperCase()}${icon.slice(1)}`}`}</Auth>
	</StyledButton>
);

const mapDispatchToProps = dispatch => {
	return {
		isLoggedIn: () => {
			dispatch(isLoggedIn());
		}
	};
};

export default connect(mapDispatchToProps)(OauthButton);

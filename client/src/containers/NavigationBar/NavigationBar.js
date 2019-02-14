import React from 'react';
import Icon from '../../components/Icon';
import styled from 'styled-components';
import SearchBar from '../../components/Forms/SearchBar';
import DropDown from '../UI/DropDown';

const Container = styled.nav`
	width: 100%;
	padding: 10px 16px;
	background-color: white;
	position: fixed;
	top: 0;
	z-index: 10;
	display: flex;
	align-items: center;
	border-bottom: 0.5px solid ${props => props.theme.colors.lightGray};
`;

const StyledLink = styled.a`
	display: block;
	padding: 10px;
	border-radius: 50%;
	&:hover {
		background-color: ${props => props.theme.colors.lightGray};
	}
`;

const StyledIcon = styled(Icon)`
	width: 28px;
	height: 28px;
	margin: 0;
`;

const NavigationBar = () => (
	<Container>
		<StyledLink href={'/'}>
			<StyledIcon icon={'pinterest'} />
		</StyledLink>
		<SearchBar />
		<DropDown />
	</Container>
);

export default NavigationBar;

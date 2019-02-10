import React from 'react';
import Icon from '../../components/Icon';
import styled from 'styled-components';
import { connect } from 'react-redux';
import SearchBar from '../../components/Forms/SearchBar';

const Container = styled.nav`
	width: 100%;
	padding: 10px 16px;
	position: fixed;
	display: flex;
	align-items: center;
	border-bottom: 0.5px solid ${props => props.theme.colors.lightGray};
`;

const StyledIcon = styled(Icon)`
	width: 28px;
	height: 28px;
	margin: 0;
	padding: 0;
`;

const NavigationBar = () => (
	<Container>
		<StyledIcon icon={'pinterest'} />
		<SearchBar />
	</Container>
);

export default connect(null)(NavigationBar);

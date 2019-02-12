import React from 'react';
import Icon from '../../components/Icon';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import SearchBar from '../../components/Forms/SearchBar';
import { dropDownToggle } from '../../actions/ui.actions';
import { fetchPhotos } from '../../actions/homePage.actions';
import DropDown from '../../components/DropDown';

const Container = styled.nav`
	width: 100%;
	padding: 10px 16px;
	background-color: white;
	position: fixed;
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

const NavigationBar = ({ dropDownActive, dropDownToggle }) => (
	<Container>
		<StyledLink href={'/home'}>
			<StyledIcon icon={'pinterest'} />
		</StyledLink>
		<SearchBar />
		<DropDown dropDownActive={dropDownActive} dropDownToggle={dropDownToggle} />
	</Container>
);

const mapStateToProps = state => ({
	dropDownActive: state.ui.dropDownActive
});

const mapDispatchToProps = dispatch => {
	return {
		dropDownToggle: toggle => {
			dispatch(dropDownToggle(toggle));
		},
		fetchPhotos: (url, fetched) => {
			dispatch(fetchPhotos(url, fetched));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NavigationBar);

import React from 'react';
import Icon from '../../../components/Icon';
import styled from 'styled-components';
import Button from '../../../components/Button';
import { connect } from 'react-redux';
import { dropDownToggle } from '../../../actions/ui.actions';

const ListItem = styled.li`
	z-index: 1;
	position: relative;
	border-radius: 5px;
	&:hover {
		background-color: ${props => props.theme.colors.lightGray};
	}
`;

const StyledLink = styled.a`
	display: block;
	padding: 10px;
	border-radius: 50%;
	width: 100%;
	&:hover {
		background-color: ${props => props.theme.colors.lightGray};
	}
`;

const StyledIcon = styled(Icon)`
	width: 28px;
	height: 28px;
	margin: 0;
`;

const Menu = styled.ul`
	position: absolute;
	border-radius: 5px;
	top: 71px;
	right: 9px;
	width: 200px;
	background-color: white;
	border: 0.5px solid ${props => props.theme.colors.lightGray};
	&::before {
		content: '';
		margin: auto;
		position: absolute;
		left: 137px;
		right: 0px;
		bottom: 94%;
		width: 15px;
		height: 15px;
		background: #fff;
		border-top: 1px solid ${props => props.theme.colors.lightGray};
		border-right: 1px solid ${props => props.theme.colors.lightGray};
		transform: rotate(-45deg);
	}
`;

const DropDown = ({ children, dropDownToggle, dropDownActive, id }) => (
	<ul>
		<Button onClick={() => dropDownToggle(dropDownActive)} nav>
			<StyledIcon icon={'dropdown'} />
		</Button>
		{dropDownActive && (
			<Menu>
				<ListItem>
					<StyledLink href={`/${id}`} drop>
						View Profile
					</StyledLink>
				</ListItem>
				<ListItem>
					<StyledLink className={'navLink'} href='/' drop>
						Home
					</StyledLink>
				</ListItem>
				<ListItem>
					<StyledLink
						className={'navLink'}
						href={'/auth/logout'}
						onClick={() => localStorage.removeItem('token')}
						drop>
						Logout
					</StyledLink>
				</ListItem>
				{children}
			</Menu>
		)}
	</ul>
);

const mapStateToProps = state => ({
	id: state.user.user.id,
	dropDownActive: state.ui.dropDownActive
});

const mapDispatchToProps = dispatch => {
	return {
		dropDownToggle: dropDownActive => {
			dispatch(dropDownToggle(dropDownActive));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DropDown);

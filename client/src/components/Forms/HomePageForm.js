import React from 'react';
import { Form } from 'formik';
import styled from 'styled-components';
import Icon from '../Icon';
import OauthButton from '../OauthButton';
import Button from '../Button';

const StyledForm = styled(Form)`
	background-color: #ffffff;
	width: calc(300px + 130px);
	padding: 35px 65px;
	border-radius: 3px;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const StyledIcon = styled(Icon)`
	width: 35px;
	height: 35px;
	margin-bottom: 5px;
`;

const Container = styled.div`
	text-align: center;
	margin-bottom: 20px;
`;

const Title = styled.h3`
	font-weight: bold;
	margin-bottom: 15px;
`;

const HomePageForm = ({ children, label, isSubmitting }) => (
	<StyledForm>
		<StyledIcon icon={'pinterest'} />
		<Container>
			<Title>{`${label} to see more`}</Title>
			<h4>Access Pinterest's best ideas with a free account</h4>
		</Container>
		{children}
		<Button disabled={isSubmitting} form>
			{label === 'Login' ? 'Login' : 'Continue'}
		</Button>
		<p>or</p>
		<OauthButton icon={'github'} />
	</StyledForm>
);

export default HomePageForm;

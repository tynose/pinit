import React from 'react';
import { withFormik, Form, Field } from 'formik';
import Icon from '../../components/Icon';
import styled from 'styled-components';
import Button from '../../components/Button';
import { connect } from 'react-redux';

const StyledForm = styled(Form)`
	width: 100%;
`;

const InputWrapper = styled.div`
	display: flex;
	align-items: center;
	height: 40px;
	background-color: ${props => props.theme.colors.lightGray};
	margin: 0 16px;
`;

const StyledIcon = styled(Icon)`
	width: 28px;
	height: 28px;
	margin: 0;
	padding: 0;
`;

const StyledField = styled(Field)`
	background-color: transparent;
	border: 0;
	border-radius: 4px;
	box-shadow: none;
	box-sizing: border-box;
	color: #333;
	font-size: 16px;
	font-weight: 600;
	height: 100%;
	line-height: 20px;
	padding: 0 40px 0 52px;
	width: 100%;
`;

const SearchBar = () => (
	<StyledForm>
		<InputWrapper>
			<Button type='submit' aria-label='search' nav>
				<StyledIcon icon={'search'} />
			</Button>
			<StyledField type='search' name='search' placeholder='Search' />
		</InputWrapper>
	</StyledForm>
);

const FormikSearchBar = withFormik({
	mapPropsToValues({ search }) {
		return {
			search: search || ''
		};
	},
	handleSubmit(values, { resetForm, setSubmitting }) {
		console.log(values);

		resetForm();
		setSubmitting(false);
	}
})(SearchBar);

export default connect(null)(FormikSearchBar);

import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import HomePageForm from '../../components/Forms/HomePageForm';
import * as Yup from 'yup';
import inputs from './inputs';
import Input from '../../components/Inputs/Input';
import InputError from '../../components/Inputs/InputError';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { signUpUser } from '../../actions/signup.actions';

const Container = styled.div`
	position: relative;
	width: 100%;
`;

const SignUp = ({ errors, touched, isSubmitting }) => (
	<HomePageForm label={'Sign Up'} isSubmitting={isSubmitting}>
		{inputs &&
			inputs.map(({ type, name, placeholder, id }) => (
				<Container key={id}>
					<Input type={type} name={name} placeholder={placeholder} />
					{touched[name] && errors[name] && (
						<InputError>{errors[name]}</InputError>
					)}
				</Container>
			))}
	</HomePageForm>
);

const FormikSignUp = withFormik({
	mapPropsToValues({ email, name, password }) {
		return {
			email: email || '',
			name: name || '',
			password: password || ''
		};
	},
	validationSchema: Yup.object().shape({
		email: Yup.string()
			.email()
			.required(),
		password: Yup.string()
			.min(5)
			.required(),
		name: Yup.string().required()
	}),
	handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
		props.signUpUser(values, resetForm, setErrors);
		setSubmitting(false);
	}
})(SignUp);

FormikSignUp.propTypes = {
	signUpUser: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
	return {
		signUpUser: (values, resetForm, setErrors) => {
			dispatch(signUpUser(values, resetForm, setErrors));
		}
	};
};

export default connect(mapDispatchToProps)(FormikSignUp);

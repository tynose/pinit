import React from 'react';
import { withFormik } from 'formik';
import HomePageForm from '../../components/Forms/HomePageForm';
import * as Yup from 'yup';
import inputs from './inputs';
import Input from '../../components/Inputs/Input';
import InputError from '../../components/Inputs/InputError';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/login.actions';

const Container = styled.div`
	position: relative;
	width: 100%;
`;

const Login = ({ errors, touched, isSubmitting }) => (
	<HomePageForm label={'Login'} isSubmitting={isSubmitting}>
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

const FormikLogin = withFormik({
	mapPropsToValues({ email, password }) {
		return {
			email: email || '',
			password: password || ''
		};
	},
	validationSchema: Yup.object().shape({
		email: Yup.string()
			.email()
			.required(),
		password: Yup.string()
			.min(5)
			.required()
	}),
	handleSubmit(values, { props, resetForm, setSubmitting }) {
		localStorage.clear();
		props.loginUser(values);
		resetForm();
		setSubmitting(false);
	}
})(Login);

const mapDispatchToProps = dispatch => {
	return {
		loginUser: values => {
			dispatch(loginUser(values));
		}
	};
};

export default connect(
	mapDispatchToProps,
	{ loginUser }
)(FormikLogin);

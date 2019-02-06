import React from 'react';
import { withFormik } from 'formik';
import HomePageForm from '../Forms/HomePageForm';
import * as Yup from 'yup';
import inputs from './inputs';
import Input from '../Inputs/Input';
import InputError from '../Inputs/InputError';
import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	width: 100%;
`;

const Login = ({ errors, touched }) => (
	<HomePageForm label={'Login'}>
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
	handleSubmit(values, { resetForm, setErrors, setSubmitting }) {}
})(Login);

export default FormikLogin;

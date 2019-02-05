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
	handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
		setTimeout(() => {
			if (values.email === 'tyler@test.io') {
				setErrors({ email: 'A user with that email already exists' });
			} else {
				resetForm();
			}
			setSubmitting(false);
		}, 2000);
		console.log(values);
	}
})(SignUp);

export default FormikSignUp;

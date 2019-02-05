import { Field } from 'formik';
import styled from 'styled-components';

const Input = styled(Field)`
	width: 100%;
	min-height: 40px;
	padding: 8px 14px;
	margin-bottom: 35px;
	font-size: 1rem;
	border: 1px solid ${props => props.theme.colors.gray};
	border-radius: 4px;
	&::placeholder {
		color: ${props => props.theme.colors.gray};
	}
	&:focus-within {
		color: black;
	}
`;

export default Input;

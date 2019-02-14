import React from 'react';
import styled, { keyframes } from 'styled-components';
import Loader from '../Loader';

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
}
`;

const Img = styled.img`
	width: 250px;
	height: 250px;
	border-radius: 5px;
	display: flex;
	position: relative;
	z-index: -1;
	object-fit: cover;
	object-position: center;
	animation: ${fadeIn} 1.5s ease-in;
`;

const Image = ({ src, alt, className, ...others }) => (
	<Img className={className} src={src} alt={alt} {...others} />
);

export default Loader(Image);

import React, { Component } from 'react';
import styled from 'styled-components';
import LoaderSpinner from './LoaderSpinner';

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const loader = WrappedComponent => {
	class LoadingScreen extends Component {
		state = {
			isLoading: true
		};

		componentDidMount = () => {
			this.loaded();
		};

		loaded = () => {
			const { src } = this.props;
			if (src.length) {
				// const img = document.createElement('img');
				// img.src = src;

				this.setState({ isLoading: false });
			}
		};

		render() {
			const { isLoading } = this.state;

			return isLoading ? (
				<Container className={this.props.className}>
					<LoaderSpinner />
				</Container>
			) : (
				<WrappedComponent {...this.props} />
			);
		}
	}
	return LoadingScreen;
};

export default loader;

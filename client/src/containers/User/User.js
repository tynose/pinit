import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user.actions';

class User extends Component {
	componentWillMount() {
		this.props.fetchUser();
	}
	render() {
		const { name, email } = this.props.user;

		return (
			<div>
				<h1>{name}</h1>
				<h1>{email}</h1>
			</div>
		);
	}
}

User.propTypes = {
	fetchUser: PropTypes.func.isRequired
};

const mapStatetoProps = state => ({
	user: state.user.user
});

export default connect(
	mapStatetoProps,
	{ fetchUser }
)(User);

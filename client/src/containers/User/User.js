import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class User extends Component {
	render() {
		return (
			<div>
				<h1>User</h1>
			</div>
		);
	}
}

User.propTypes = {};

export default connect(null)(User);

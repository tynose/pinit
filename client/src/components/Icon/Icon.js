import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Svg from '../Svg';

class Icon extends PureComponent {
	constructor(props) {
		super(props);
		this.state = { importedIcon: '' };
	}

	async componentDidMount() {
		await this.setIconValue();
	}

	async componentDidUpdate(prevProps) {
		if (this.props.icon !== prevProps.icon) {
			await this.setIconValue();
		}
	}

	async setIconValue() {
		const { icon } = this.props;
		const importedIcon = await import(`./lib/${icon}.svg`);

		this.setState({ importedIcon: importedIcon.default });
	}

	render() {
		const { className } = this.props;
		const { importedIcon } = this.state;

		return <Svg className={className} src={importedIcon} />;
	}
}

Icon.propTypes = {
	icon: PropTypes.string,
	className: PropTypes.string
};

export default Icon;

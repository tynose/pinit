import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.span`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

class Svg extends Component {
  parseSource(src) {
    return { __html: src };
  }

  render() {
    const { src, ...others } = this.props;

    return (
      <Wrapper dangerouslySetInnerHTML={this.parseSource(src)} {...others} />
    );
  }
}

Svg.propTypes = {
  src: PropTypes.string.isRequired
};

export default Svg;

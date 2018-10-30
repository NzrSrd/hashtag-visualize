import React from 'react';
import PropTypes from 'prop-types';

import { Circle } from 'react-konva';

class VisCircle extends React.Component {
  componentDidUpdate() {
    const { freq } = this.props;

    this.rect.to({
      width: freq / Math.floor(Math.random() * 100) + 40,
    });
  }

  render() {
    const { color, y } = this.props;
    return (
      <Circle
        ref={(r) => {
          this.rect = r;
        }}
        height={10}
        shadowBlur={10}
        shadowColor={color}
        shadowEnabled
        shadowOffset={20}
        stroke={color}
        strokeWidth={2}
        width={100}
        x={400}
        y={y}
      />
    );
  }
}

VisCircle.propTypes = {
  color: PropTypes.string,
  freq: PropTypes.number,
  y: PropTypes.number,
};

VisCircle.defaultProps = {
  color: '',
  freq: 0,
  y: 0,
};
export default VisCircle;

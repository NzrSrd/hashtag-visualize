import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Stage, Layer } from 'react-konva';
import VisCircle from './VisCircle';

const Container = styled.div`
  height: 100vh;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

class Visualizer extends React.Component {
  render() {
    const { freq, filterdHashtags, lastHashtagColor } = this.props;
    return (
      <Container
        ref={(c) => {
          this.container = c;
        }}
      >
        <Stage height={window.innerHeight - 100} style={{ border: `1px solid ${lastHashtagColor}` }} width={1200}>
          <Layer style={{ border: '1px solid red' }}>
            {filterdHashtags.map((h, index) => (
              <VisCircle key={h.id} color={h.color} freq={freq} lastHashtagColor={lastHashtagColor} y={index * 30} />
            ))}
          </Layer>
        </Stage>
      </Container>
    );
  }
}

Visualizer.propTypes = {
  filterdHashtags: PropTypes.array,
  freq: PropTypes.number,
  lastHashtagColor: PropTypes.string,
};

Visualizer.defaultProps = {
  filterdHashtags: [],
  freq: 0,
  lastHashtagColor: 'white',
};

export default Visualizer;

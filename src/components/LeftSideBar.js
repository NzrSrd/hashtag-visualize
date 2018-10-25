import React from 'react';
import PropTypes from 'prop-types';

import rc from 'randomcolor';

const LeftSideBar = ({ hashtags }) => {
  const color = rc();
  return (
    <div>
      <h1 style={{ borderBottom: `1px solid ${color}` }}>HASHTAGS:</h1>
      {hashtags.map(h => (
        <h3 key={h.id}>
          #
          {h.text}
        </h3>
      ))}
    </div>
  );
};

LeftSideBar.propTypes = {
  hashtags: PropTypes.array,
};

LeftSideBar.defaultProps = {
  hashtags: [],
};

export default LeftSideBar;

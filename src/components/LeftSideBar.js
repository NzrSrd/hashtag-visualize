import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SideCol = styled.div`
  width: 100%;
  border: 1px solid white;
  height: 100vh;
  overflow-y: auto;
  max-height: 100vh;
`;

const HashtagsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-top: 1px solid white;
`;

const LeftSideBar = ({ hashtags }) => (
  <SideCol>
    <h1>
      HASHTAGS:
      {hashtags.length}
    </h1>
    <HashtagsWrapper>
      {hashtags.map(h => (
        <h3 key={h.id}>
          #
          {h.text}
        </h3>
      ))}
    </HashtagsWrapper>
  </SideCol>
);

LeftSideBar.propTypes = {
  hashtags: PropTypes.array,
};

LeftSideBar.defaultProps = {
  hashtags: [],
};

export default LeftSideBar;

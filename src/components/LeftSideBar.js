import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-spring';
import styled from 'styled-components';

const Header = styled.h1`
  margin: 0px;
  padding-left: 20px;
  margin-bottom: 10px;
`;

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
  padding: 20px;
  border-top: 1px solid white;
`;

const LeftSideBar = ({ hashtags, lastHashtagColor }) => (
  <SideCol>
    <Header>
      Hashtags:
      {lastHashtagColor && <span style={{ color: lastHashtagColor }}>{hashtags.length}</span>}
    </Header>
    <HashtagsWrapper>
      <Transition
        enter={{ transform: 'translate3d(0,0px,0)' }}
        from={{ transform: 'translate3d(0,-40px,0)' }}
        items={hashtags}
        keys={h => h.id}
        leave={{ transform: 'translate3d(0,-40px,0)' }}
      >
        {({ id, text, color }) => props => (
          <h2 key={id} style={{ ...props, color }}>
            #
            {text}
          </h2>
        )}
      </Transition>
    </HashtagsWrapper>
  </SideCol>
);

LeftSideBar.propTypes = {
  hashtags: PropTypes.array,
  lastHashtagColor: PropTypes.string,
};

LeftSideBar.defaultProps = {
  hashtags: [],
  lastHashtagColor: null,
};

export default LeftSideBar;

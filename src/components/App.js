import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react';

import { Container, Row, Col } from 'react-grid-system';

import LeftSideBar from './LeftSideBar';
import Visualizer from './Visualizer';

@inject('store')
@observer
class App extends Component {
  render() {
    const {
      store: { freqBasedOnTweetLength, filterdHashtags, lastHashtagColor },
    } = this.props;
    return (
      <Container fluid style={{ minHeight: '100vh' }}>
        <Row gutter={0}>
          <Col md={3}>
            <LeftSideBar hashtags={filterdHashtags} lastHashtagColor={lastHashtagColor} />
          </Col>
          <Col md={9}>
            <Visualizer
              filterdHashtags={filterdHashtags}
              freq={freqBasedOnTweetLength}
              lastHashtagColor={lastHashtagColor}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
App.wrappedComponent.propTypes = {
  store: MobxPropTypes.observableObject.isRequired,
};
export default hot(module)(App);

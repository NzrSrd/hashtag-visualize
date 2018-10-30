import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react';

import { Container, Row, Col } from 'react-grid-system';

import LeftSideBar from './LeftSideBar';

@inject('store')
@observer
class App extends Component {
  render() {
    const {
      store: { tweetText, frequency, freqBasedOnTweetLength, filterdHashtags },
    } = this.props;
    return (
      <Container fluid style={{ minHeight: '100vh' }}>
        <Row>
          <Col md={3}>
            <LeftSideBar hashtags={filterdHashtags} />
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

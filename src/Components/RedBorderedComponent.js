import React, { Component } from 'react';

import withRedWrapper from '../withRedWrapper/withRedWrapper';
import BasicComponent from './BasicComponent';
import AnotherComponent from './AnotherComponent';

class RedBorderedComponent extends Component {
  render() {
    // return <BasicComponent />
    return <AnotherComponent />
  }
}

export default withRedWrapper(RedBorderedComponent);
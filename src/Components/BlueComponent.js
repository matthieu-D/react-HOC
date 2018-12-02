import React, { Component } from 'react';

import withRedWrapper from '../withRedWrapper/withRedWrapper';
import BasicComponent from './BasicComponent';

class BlueComponent extends Component {
  render() {
    return <BasicComponent />
  }
}

export default withRedWrapper(BlueComponent);
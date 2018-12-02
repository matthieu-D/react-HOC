import React, { Component } from 'react';
import withNames from '../withNames/withNames';

class NamesLineComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <span> {
      this.props.names.map(name => {
        return <span key={name}>{name}, </span>
        }
      )
    } </span>
  }
}

export default withNames(NamesLineComponent);

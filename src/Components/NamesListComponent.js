import React, { Component } from 'react';
import withNames from '../withNames/withNames';

class NamesListComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ul> {
      this.props.names.map(name => {
        return <li key={name}>{name}</li>
        }
      )
    } </ul>
  }
}

export default withNames(NamesListComponent);

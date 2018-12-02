import React from 'react';

export default function withNames(OriginalComponent) {
  class HOC extends React.Component {
    render() {
      const names = ['Tim', 'Tam', 'Tom'];
      return <OriginalComponent {...this.props} names={names}/>
    }
  }
  return HOC;
}
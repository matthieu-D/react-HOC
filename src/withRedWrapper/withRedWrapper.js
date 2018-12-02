import React from 'react';

export default function withRedWrapper(OriginalComponent) {
  class HOC extends React.Component {
    render() {
      return <div style={{border: "5px red solid"}}>
        <OriginalComponent />
      I got wrapped with a red border</div>;
    }
  }
  return HOC;
}
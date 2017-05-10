
import React, { Component, PropTypes } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import { createSelector } from 'reselect';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount(){

  }
  componentWillUnmount(){
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default AppComponent;

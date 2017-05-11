
import React, { Component, PropTypes } from 'react';
import { inject, observer } from "mobx-react";
import { createSelector } from 'reselect';
import util from '../../common/util';
import styles from '../../styles/less/home.less';
import stores from '../../stores/index';

// @inject("homestate")
@observer
class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    debugger
  }
  search() {
    // const { dispatch } = this.props;
    // dispatch({type: GET_DATA_REQUESTED})
  }
  componentDidMount() {
    debugger
  }
  render() {
    return (
     <div>
        <h1 className={styles.title}>Home</h1>
        <div className={styles['button--ml-15']} onClick={this.search}>click search</div>
        {this.props.children}
      </div>
    );
  }
}

export default AppComponent;

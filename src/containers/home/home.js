
import React, { Component, PropTypes } from 'react';
import { createSelector } from 'reselect';
import util from '../../common/util';
import styles from '../../styles/less/home.less';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }
  search() {
    // const { dispatch } = this.props;
    // dispatch({type: GET_DATA_REQUESTED})
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

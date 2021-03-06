import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import styles from './styles/header-bar.module.css';


export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        return (
            <div className={styles.headerBar}>
                <h1>Hi, {this.props.username}</h1>
                <button onClick={() => this.logOut()}>Log out</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    username: state.auth.currentUser.username
  };
};

export default connect(mapStateToProps)(HeaderBar);

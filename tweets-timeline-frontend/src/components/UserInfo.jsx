import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './UserInfo.css'
import { Jumbotron } from 'reactstrap';

export default class UserInfo extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  render () {
      const user = this.props.user;
      const twitterUrl = 'https://twitter.com'
      
    return (
      <Jumbotron className={styles.jumbotronContainer}>
      {
        user.name != undefined ? (
          <a href={`${twitterUrl}/${user.screenName}`}>
            <div>
              <h2>{user.name}</h2>
              <h5>{user.description}</h5>
              <p>{user.followersCount} followers</p>
              <p><a href={user.twitterUrl}>{user.twitterUrl}</a></p>
              <img src={user.profileImageUrl} />
            </div>
          </a>
          
        ) : (
          <h4>Please, enter correct Twitter username and click 'Enter'</h4>
        )
      }
      </Jumbotron>
    );
  }

}
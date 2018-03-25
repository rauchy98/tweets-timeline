import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TweetList from './TweetList';
import UserInfo from './UserInfo';
import styles from './Tweets.css' 
import { AddTweetsInput } from '../components'

export default class Tweets extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    addTweets: PropTypes.func.isRequired
  }

  render () {
    const { user, addTweets } = this.props;
    const tweets = user.tweets;
    return (
        <div className={styles.tweetsContainer}>
            <AddTweetsInput addTweets={addTweets}/>
            <UserInfo className={styles.userInfoStyle} user={user} />
            { tweets && tweets.length > 0 && <TweetList tweets={tweets}/> }
            <small>React Tweets Timeline 2018</small>
        </div>
    );
  }

}
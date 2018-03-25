import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import styles from './TweetList.css';
import TweetListItem from './TweetListItem';
import { Jumbotron } from 'reactstrap';

export default class TweetList extends Component {
  static propTypes = {
    tweets: PropTypes.array.isRequired
  }

  render () {

    return (
      <Jumbotron className={styles.jumbotronContainer}>
        {
            map(this.props.tweets, (tweet) => {
            return (<TweetListItem
              text={tweet.text}
              date={tweet.date}
              image={tweet.mediaUrl}
              url={tweet.url}
              />);
            })

        }
      </Jumbotron>
    );
  }

}
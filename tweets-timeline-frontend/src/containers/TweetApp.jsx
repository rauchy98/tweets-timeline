import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Tweets } from '../components';
import * as TweetsActions from '../actions/TweetsActions';

@connect(state => ({
  user: state.tweetlist.user || {}
}))

export default class TweetApp extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render () {
    const { user, dispatch } = this.props;
    const actions = bindActionCreators(TweetsActions, dispatch);

    return (
      <div>
        <Tweets user={user} addTweets={actions.addTweets} />
      </div>
    );
  }
}
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import addTweetsFromBackend from '../services/service'
import styles from './AddTweetsInput.css'
import { Input } from 'reactstrap';

export default class AddTweetsInput extends Component {
  static propTypes = {
    addTweets: PropTypes.func.isRequired
  }

  render () {
    return (
      <div className={styles.inputContainer}>
        <Input
          type="text"
          autoFocus="true"
          placeholder="Type Twitter Username"
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleSubmit.bind(this)} />
      </div>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
    };
  }

  handleChange (e) {
    this.setState({ name: e.target.value });
  }

  async handleSubmit (e) {
    try {
      const userName = e.target.value.trim();
      if (e.which === 13) {
        const user = await addTweetsFromBackend(userName);
        this.props.addTweets(user);
        this.setState({ userName: '' });
      }
    } catch (err) { return }
  }

}
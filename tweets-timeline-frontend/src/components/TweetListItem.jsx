import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './TweetListItem.css'

import { Card, CardImg, CardBody, CardText,
  CardTitle, CardSubtitle, } from 'reactstrap';

export default class TweetListItem extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }

  render () {
    const { text, date, image, url } = this.props;
    return (
      <div className={styles.cardContainer}>
      <Card className={styles.card}>
        <a href={url}>
          {image != undefined && <CardImg top width="100%" src={image} alt="Photo" /> }
          <CardBody>
            <CardTitle>{text}</CardTitle>
            <CardText>
            <small className="text-muted">{date}</small>
            </CardText>
          </CardBody>
        </a>
      </Card>
      </div>
    );
  }

}
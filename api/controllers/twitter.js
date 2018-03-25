'use strict'

const Twitter = require('twitter'),
      config = require('../config');

const client = new Twitter({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token_key: config.access_token_key,
    access_token_secret: config.access_token_secret
  });

exports.search = async (req, res) => {

  try {

    const params = {screen_name: req.params.screenName};

    const twitterUser = await client.get('users/show', params);

    if (twitterUser) {
      const user = {};

      user.name = twitterUser.name;
      user.screenName = twitterUser.screen_name;
      user.description = twitterUser.description;
      user.profileBannerUrl = twitterUser.profile_banner_url;
      user.followersCount = twitterUser.followers_count;
      user.profileImageUrl = twitterUser.profile_image_url;
      user.twitterUrl = twitterUser.url;

      const tweets = await client.get('statuses/user_timeline', params);

      if (tweets.length > 0) {
        user.tweets = [];
          for (let i = 0; i < tweets.length; i++) {
            const text = tweets[i].text.substring(0, tweets[i].text.indexOf('http'));
            const date = tweets[i].created_at.substring(0, 19);
            user.tweets[i] = {
              text: text,
              date: date
            };

            if(tweets[i].entities.urls[0]) {
              user.tweets[i].url =tweets[i].entities.urls[0].url;
            }

            if (tweets[i].entities.media) {
              user.tweets[i].mediaUrl = tweets[i].entities.media[0].media_url
            }

          }
        }

      res.json(user);
    }
    else {
      res.json('User don`t have any tweets');
    }

  } catch (err) { res.status(404); res.json(err); }

}
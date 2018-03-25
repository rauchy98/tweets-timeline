import * as types from '../constants/ActionTypes'

export function addTweets (user) {
    return {
        type: types.ADD_TWEETS,
        user
    };
};
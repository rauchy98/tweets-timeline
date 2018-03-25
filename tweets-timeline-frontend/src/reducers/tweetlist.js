import * as types from '../constants/ActionTypes';

const initialState = {
  user: {
    tweets: [
      ]
  }
}

export default function tweets(state = initialState, action) {

    switch(action.type) {

        case types.ADD_TWEETS:
          const user = action.user;

          return { 
            ...state,
            user,
          }


          default:
            return state;
    }
}
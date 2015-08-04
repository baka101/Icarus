module.exports = {

  //AJAX actions
  RECEIVE_SEARCH_REQUESTS: 'RECEIVE_SEARCH_REQUESTS',
  RECEIVE_PROFILE_INFO: 'RECEIVE_PROFILE_INFO',
  ADD_REQUEST: 'ADD_REQUEST',
  RECEIVE_REQUESTS: 'RECEIVE_REQUESTS',
  RECEIVE_REQUEST: 'RECEIVE_REQUEST',
  ADD_PHOTO: 'ADD_PHOTO',
  RECEIVE_PHOTOS : 'RECEIVE_PHOTOS',
  RECEIVE_TAGS : 'RECEIVE_TAGS',
  RECEIVE_COMMENTS: 'RECEIVE_COMMENTS',
  LIKE_PHOTO: 'LIKE_PHOTO',

  //socket actions
  UPDATE_FEED: 'UPDATE_FEED',
  UPDATE_REQUEST: 'UPDATE_REQUEST',
  UPDATE_COMMENT: 'UPDATE_COMMENT',
  UPDATE_AVATAR: 'UPDATE_AVATAR',

  //auth actions
  LOGGED_IN: 'LOGGED_IN',
  NOT_LOGGED_IN: 'NOT_LOGGED_IN',

  // user actions
  TOGGLE_MODAL_PHOTO: 'TOGGLE_MODAL_PHOTO', 
  TOGGLE_COMMENT: 'TOGGLE_COMMENT',

  // actions isolated to request page
  TOGGLE_COMMENT_REQUEST: 'TOGGLE_COMMENT_REQUEST',
  TOGGLE_REQUEST_PHOTO: 'TOGGLE_REQUEST_PHOTO',

  // reset modal and comments display to unopened
  TOGGLE_RESET: 'TOGGLE_RESET'
};

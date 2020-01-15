import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  //Items array stores the data that we are going to get from the fetch posts call made to the server.
  items: [],
  //this is the object where we are storing the data that we are getting for the new post.
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      //destructures the state object and shows all the items and their payload of info inside them.
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      //returns the state and the new post payload.
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}

import { FETCH_POSTS, NEW_POST } from "./types";

/*we no longer need the fetchposts to be in the componentDidMount in the react app, because this would
be done by redux.*/
//Thunk lets us call the dispatch function directly.
//Also we no longer need to use this.SetState as we are now going to use dispatch.
//Here we are dispatching the FETCH_POSTS to the reducer.
export const fetchPosts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>
      //no longer using this.SetState.
      dispatch({
        type: FETCH_POSTS,
        //whatever data is coming in with the type FETCH_POSTS is going to be stored inside the payload.
        payload: posts
      })
    );
};

//Now we don't need to post the data from the postform component instead we are going to create this action.
//This action is going to dispatch the new post with a type and payload.
export const createPost = postData => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    //we have to specify the method, the header and the body.
    method: "POST", //because it is a post request.
    headers: {
      "content-type": "application/json"
    }, // this specifies that the content that is returned is of the type: application/json
    body: JSON.stringify(postData) //converts the JS object or value into a JSON string.
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};

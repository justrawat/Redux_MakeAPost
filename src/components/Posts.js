import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//this connects your components to your redux store that was provided by the provider component.
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
  //now fetchposts is coming to it as a prop.
  componentWillMount() {
    this.props.fetchPosts();
  }

  //When it recieves a new property from a state then it runs and it takes a parameter of nextProps.
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    /*now we are mapping through using this.props.posts.map, instead of this.state.posts.map as the state
    is coming through props using mapStateToProps*/
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

/*mapping the state to props as the state does not exist in this component and now everywhere the state
is going to be passed as props*/
const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);

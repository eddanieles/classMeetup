import React, { Component } from 'react';
import CommentForm from './CommentForm'
import Comment from './Comment'

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }

  addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body
    }
    this.setState({ comments: this.state.comments.concat([comment]) })
  }
getComments() {
  return this.state.comments.map((comment) => {
    return (<comment author={comment.author} body={comment.body} key={comment.id}/>)
  })
}

  render() {
    return (
      <div className="comment-box">
        <CommentForm addComment={this.addComment.bind(this)}/>
        <h3>Comments</h3>
        <h4></h4>
          <div className="commentList">
            {this.comments}
          </div>
      </div>
    )
  }



}

export default CommentBox;

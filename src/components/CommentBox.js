import React, { Component } from 'react';
import CommentForm from './CommentForm'
import Comment from './Comment'
import base from '../config/base';


class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }

  addComment(author, body) {
    console.log("BUTTON")
    const comment = {
      id: this.state.comments.length + 1,
      author: localStorage.user,
      body

    }
    this.setState({ comments: this.state.comments.concat([comment]) })
  }
  getComments() {
    console.log("am I here?")
    return this.state.comments.map((comment) => {
      return (<Comment author={comment.author} body={comment.body} key={comment.id}/>)

    })
  }
  componentDidMount(){
    this.rebaseRef = base.syncState('comments', {
      context: this,
      state: 'comments',
      asArray: true
    })
  }
  render() {
    const meetupComments = this.getComments()
    return (
      <div className="comment-box">
        <CommentForm addComment={this.addComment.bind(this)}/>
        <h3>Comments</h3>

          <ul className="commentList">
            {meetupComments}
          </ul>
      </div>
    )
  }



}

export default CommentBox;

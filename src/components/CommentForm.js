import React, { Component } from 'react';
import './Comment.css'

class CommentForm extends Component {

  handleSubmit(event) {
    console.log("I'm submitting")
    event.preventDefault()
    let author = this.author
    let body = this.body
    this.props.addComment(author.value, body.value)
  }

  render() {
    return(
      <form className="CommentForm" onSubmit={this.handleSubmit.bind(this)}>
        <input value={localStorage.user}/>
        <input type="text" className="form-control" placeholder="Comment:" ref={(input) => this.body = input}/>
        <button type="submit" className="btn btn-primary">Comment</button>
      </form>
    )
  }
}

export default CommentForm;

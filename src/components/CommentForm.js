import React, { Component } from 'react';


class CommentForm extends Component {

  handleSubmit(event) {
    event.preventDefault()
    let author = this.author
    let body = this.body
    this.props.addComment(author.value, body.value)
  }

  render() {
    return(
      <form className="CommentForm" onSubmit={this.handleSubmit.bind(this)}>
        <input placeholder="name:" ref={(input) => this.author = input}/>
        <textarea placeholder="Comment:" ref={(textarea) => this.body = textarea}></textarea>
        <button type="Submit">Add Comment</button>
      </form>
    )
  }
}

export default CommentForm;

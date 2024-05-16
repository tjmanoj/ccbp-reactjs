import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {name: '', comment: '', commentsList: []}

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeCommment = event => {
    this.setState({comment: event.target.value})
  }

  onchangeLike = commentId => {
    const {commentsList} = this.state
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === commentId) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  onDelete = itemId => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(each => each.id !== itemId),
    }))
  }

  onUpdateComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const colornum = Math.round(Math.random() * 6)

    const commentItem = {
      id: uuidv4(),
      Name: name,
      Comment: comment,
      color: initialContainerBackgroundClassNames[colornum],
      isLiked: false,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, commentItem],
      name: '',
      comment: '',
    }))
  }

  render() {
    const {name, comment, commentsList} = this.state
    const commentCount = commentsList.length
    return (
      <div className="comments-app">
        <h1>Comments</h1>
        <div className="comment-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="comments-image"
            alt="comments"
          />
          <form onSubmit={this.onUpdateComment} className="forms">
            <p>Say something about 4.0 Technologies</p>
            <input
              type="text"
              placeholder="Your Name"
              className="nameInput"
              value={name}
              onChange={this.onChangeName}
              required
            />
            <br />
            <textarea
              rows="5"
              placeholder="Your Comment"
              className="commentInput"
              value={comment}
              onChange={this.onChangeCommment}
              required
            />
            <br />
            <button type="submit" className="add-comment">
              Add Comment
            </button>
          </form>
        </div>

        <ul>
          <hr />
          <p>
            <span className="counts">{commentCount}</span>Comments
          </p>
          {commentsList.map(eachComment => (
            <CommentItem
              details={eachComment}
              ChangeLike={this.onchangeLike}
              onDelete={this.onDelete}
              key={eachComment.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments

import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {details, ChangeLike, onDelete} = props
  const {Name, Comment, color, isLiked, id} = details

  const like = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const changeLike = () => {
    ChangeLike(id)
  }

  const onDeleteComment = () => {
    onDelete(id)
  }

  return (
    <li className="comment-item">
      <div className="logo-and-name">
        <p className={`profile-name-logo ${color}`}>{Name[0]}</p>
        <div>
          <p className="heading">
            {Name}
            <span className="less-time">{formatDistanceToNow(new Date())}</span>
          </p>
          <p>{Comment}</p>
        </div>
      </div>
      <div className="like-delete-buttons">
        <button className="like-button" onClick={changeLike}>
          <img src={like} className="like-icon" alt="like" />
          Like
        </button>
        <button
          className="delete-button"
          onClick={onDeleteComment}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="delete-icon"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem

import './index.css'

const TodoItem = props => {
  const {details, ondelete} = props
  const {title, id} = details

  const Delete = () => {
    ondelete(id)
  }

  return (
    <li className="cardItem">
      <p className="para">{title}</p>
      <button type="button" onClick={Delete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem

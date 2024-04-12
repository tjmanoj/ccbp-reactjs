import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todo: initialTodosList}

  onDelete = uniqueNo => {
    const {todo} = this.state
    const newList = todo.filter(each => each.id !== uniqueNo)
    this.setState({todo: newList})
  }

  render() {
    const {todo} = this.state
    return (
      <div className="todo-app">
        <div className="todo-card">
          <h1 className="heading">Simple Todos</h1>
          <ul>
            {todo.map(each => (
              <TodoItem details={each} key={each.id} ondelete={this.onDelete} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos

import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {card, key} = this.props
    const {name, imgUrl} = card
    return (
      <li className="cardItem">
        <img src={imgUrl} className="image" alt={name} />
        <p className="para">{name}</p>
      </li>
    )
  }
}

export default DestinationItem

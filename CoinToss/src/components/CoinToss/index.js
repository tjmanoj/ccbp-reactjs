import {Component} from 'react'
import './index.css'

const images = [
  'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  'https://assets.ccbp.in/frontend/react-js/tails-img.png',
]

class CoinToss extends Component {
  state = {currentCoin: 0, total: 0, heads: 0, tails: 0}

  flipCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        currentCoin: tossResult,
        total: prevState.total + 1,
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        currentCoin: tossResult,
        total: prevState.total + 1,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {currentCoin, total, heads, tails} = this.state
    return (
      <div className="coin-game">
        <div className="toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={images[currentCoin]} className="image" alt="toss result" />
          <button type="button" onClick={this.flipCoin}>
            Toss Coin
          </button>
          <div>
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

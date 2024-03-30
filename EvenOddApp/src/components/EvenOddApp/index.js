import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {randomValue: 0, ansText: 'Even'}

  onIncrement = () => {
    const newVal = Math.floor(Math.random(1, 10) * 100)
    let ans = ''
    if (newVal % 2 === 0) {
      ans = 'Even'
    } else ans = 'Odd'
    this.setState(() => ({randomValue: newVal, ansText: ans}))
  }

  render() {
    const {randomValue, ansText} = this.state

    return (
      <div className="main-bg">
        <div className="count-container">
          <h1>Count {randomValue}</h1>
          <p>Count is {ansText}</p>
          <button type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="footer-text">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

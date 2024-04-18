import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  letter = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state

    return (
      <div className="main-bg">
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image"
            alt="letters calculator"
          />
        </div>
        <div className="count-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="counting">
            <label htmlFor="phrase">Enter the phrase</label> <br />
            <input
              id="phrase"
              type="text"
              className="input-box"
              placeholder="Calculator"
              onChange={this.letter}
            />
          </div>
          <p className="result">No.of letters: {count}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator

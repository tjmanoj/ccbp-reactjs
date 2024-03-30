import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {first: false, second: false}

  showHideFirst = () => {
    const {first} = this.state
    console.log(first)
    this.setState(prevState => ({first: !prevState.first}))
  }

  showHideSecond = () => {
    const {second} = this.state
    console.log(second)
    this.setState(prevState => ({second: !prevState.second}))
  }

  render() {
    const {first, second} = this.state

    return (
      <div className="main-bg">
        <div className="main-containers">
          <h1 className="heading">Show/Hide</h1>
          <div className="outer-container">
            <div className="name name1">
              <button type="button" onClick={this.showHideFirst}>
                Show/Hide Firstname
              </button>
              {first ? (
                <div className="card">
                  <p>Joe</p>
                </div>
              ) : null}
            </div>
            <div className="name">
              <button type="button" onClick={this.showHideSecond}>
                Show/Hide Lastname
              </button>
              {second ? (
                <div className="card">
                  <p>Jonas</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide

import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDark: true}

  getText = () => {
    const {isDark} = this.state
    return isDark ? 'Light Mode' : 'Dark Mode'
  }

  ChangeMode = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  getcolor = () => {
    const {isDark} = this.state
    return isDark ? 'white-color' : 'dark-color'
  }

  getbg = () => {
    const {isDark} = this.state
    return isDark ? 'dark-bg' : 'white-bg'
  }

  render() {
    const text = this.getText()
    const color = this.getcolor()
    const bg = this.getbg()
    return (
      <div className="main-container">
        <div className={`main-bg ${bg} ${color}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button onClick={this.ChangeMode}>{text}</button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode

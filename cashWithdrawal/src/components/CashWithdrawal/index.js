import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {cash: 2000}

  onChangeAmount = rupee => {
    this.setState(prevState => ({cash: prevState.cash - rupee}))
  }

  render() {
    const {denominationsList} = this.props
    const {cash} = this.state
    return (
      <div className="cash-machine">
        <div className="card">
          <div className="profile">
            <div className="circle">
              <h1>S</h1>
            </div>
            <p>Sarah Williams</p>
          </div>
          <div className="balance">
            <p className="para">Your balance</p>
            <div className="amount-card">
              <p className="cash">{cash}</p>
              <p className="para">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="para withdraw">CHOOSE SUM (IN RUPEES)</p>
          <ul>
            {denominationsList.map(each => (
              <DenominationItem
                amt={each}
                key={each.id}
                change={this.onChangeAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

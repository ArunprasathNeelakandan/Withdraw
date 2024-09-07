import { Component } from "react";
import "./index.css";


class CashWithdrawal extends Component {
  state = {money:2000,enough:true}

  update = (event) => {
    const {money} = this.state
    if (money >= event.target.textContent) {
      this.setState({money:money-event.target.textContent,enough:true})
    }
    else {
      this.setState({enough:false})
    }
  }
  render() {
    const {money,enough} = this.state
    return (
      <div className="container">
        <div className="cart">
          <div className="profile">
            <div className="dp">S</div>
            <div>Sarah Williams</div>
          </div>
          <div className="balance-container">
            <p>your Balance</p>
            <div>
            <p>{money}</p>
            <p>in Rubees</p>
            </div>
          </div>
          <p>Withdraw</p>
          <p>CHOOSE SUM (in Rubees) </p>
          <div className="btn-container">
            <button className="btn" onClick={this.update}>50</button>
            <button className="btn" onClick={this.update}>100</button>
            <button className="btn" onClick={this.update}>200</button>
            <button className="btn" onClick={this.update}>500</button>
          </div>
          {!enough && <p className="alert">* You don't have enough money</p>}
        </div>
      </div>
    );
  }
}

export default CashWithdrawal;

// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    count1: 0,
    count2: 0,
  }

  onClickEatMango = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  onClickEatBanana = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count1, count2} = this.state

    return (
      <div className="container">
        <div className="fruit-container">
          <h1 className="main-head">
            Bob ate <span>{count1}</span> mangoes <span>{count2}</span> bananas
          </h1>
          <div className="img-container">
            <div className="button-image">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button
                className="button"
                type="button"
                onClick={this.onClickEatMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="button-image">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                className="button"
                type="button"
                onClick={this.onClickEatBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

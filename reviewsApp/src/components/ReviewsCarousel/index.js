import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReview: 0}

  changeToLeft = () => {
    const {activeReview} = this.state
    if (activeReview <= 3 && activeReview > 0) {
      this.setState(prevState => ({activeReview: prevState.activeReview - 1}))
    }
  }

  changeToRight = () => {
    const {activeReview} = this.state
    if (activeReview < 3 && activeReview >= 0) {
      this.setState(prevState => ({activeReview: prevState.activeReview + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReview} = this.state
    const {username, imgUrl, companyName} = reviewsList[activeReview]

    return (
      <div className="review-container">
        <h1 className="heading">Reviews</h1>
        <div>
          <img src={imgUrl} alt={username} />
          <p className="name">{username}</p>
          <div className="scroll-container">
            <button
              type="button"
              onClick={this.changeToLeft}
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <button
              type="button"
              onClick={this.changeToRight}
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
          <div className="description">
            <p>{companyName}</p>
            <p className="para">{reviewsList[activeReview].description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel

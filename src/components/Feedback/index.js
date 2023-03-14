// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isOn: true}

  onClickThankYou = () => {
    this.setState({isOn: false})
  }

  render() {
    const {isOn} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="appContainer">
        {isOn ? (
          <div className="cardContainer">
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="listContainer">
              {emojis.map(eachEmoji => (
                <li className="emojiContainer" key={eachEmoji.id}>
                  <img
                    onClick={this.onClickThankYou}
                    className="emoji"
                    src={eachEmoji.imageUrl}
                    alt={eachEmoji.name}
                  />
                  <p className="emojiName">{eachEmoji.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="cardContainer">
            <div className="thankYouContainer">
              <img src={loveEmojiUrl} alt="love emoji" className="loveEmoji" />
              <h1 className="thankYouHeading">Thank you</h1>
              <p className="description">
                We will use your feedback to improve our customer support
                performance
              </p>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback

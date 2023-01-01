import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isSubscribed: true,
  }

  onClickButton = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    const buttonText = isSubscribed ? 'Subscribe' : 'Subscribed'

    return (
      <div className="container">
        <Welcome />
        <button type="button" className="btn" onClick={this.onClickButton}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default App

import './index.css'

const Welcome = props => {
  const {msg, greeting} = props

  return (
    <div>
      <h1 className="message">{greeting}</h1>
      <p className="para">{msg}</p>
    </div>
  )
}
Welcome.defaultProps = {
  greeting: 'Welcome',
  msg: 'Thank you! Happy Learning',
}

export default Welcome

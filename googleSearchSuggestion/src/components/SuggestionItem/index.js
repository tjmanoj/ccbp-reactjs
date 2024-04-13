import './index.css'

const SuggestionItem = props => {
  const {details, paste} = props
  const {id, suggestion} = details

  const Pastecontent = () => {
    paste(suggestion)
  }

  return (
    <li className="arrow">
      <p>{suggestion}</p>
      <img
        className="search"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={Pastecontent}
      />
    </li>
  )
}

export default SuggestionItem

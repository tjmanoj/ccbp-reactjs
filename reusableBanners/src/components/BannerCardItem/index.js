import './index.css'

const Card = props => {
  const {cardDetails} = props
  const {className, headerText, description} = cardDetails
  console.log(cardDetails)
  return (
    <li className={`container ${className}`}>
      <h1 className="heading">{headerText}</h1>
      <p>{description}</p>
      <button className="custom-button">Show More</button>
    </li>
  )
}
export default Card

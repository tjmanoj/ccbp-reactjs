import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`list-container card ${className}`}>
      <h1 className="heading">{title}</h1>
      <p className="para">{description}</p>
      <img src={imgUrl} className="image" alt={title} />
    </li>
  )
}

export default CardItem

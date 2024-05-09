import './index.css'

const AppItem = props => {
  const {details} = props
  const {imageUrl, appName} = details

  return (
    <li className="item-container">
      <img src={imageUrl} className="app-logo" alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem

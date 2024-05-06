import './index.css'

const ThumbnailItem = props => {
  const {details, changeImg, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = details
  const blurImg = isActive ? '' : 'gray-blur'
  const onChangeImg = () => {
    changeImg(id)
  }

  return (
    <li>
      <button type="button" onClick={onChangeImg}>
        <img
          src={thumbnailUrl}
          className={`thumbnail-resize ${blurImg}`}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem

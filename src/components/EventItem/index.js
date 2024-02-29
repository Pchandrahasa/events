// Write your code here
import './index.css'

const EventItem = props => {
  const {eventsList, currentStatus, isActive} = props
  const {name, imageUrl, location, id} = eventsList

  const onClickImage = () => {
    currentStatus(id)
  }
  const imgClass = isActive && 'image1'

  return (
    <li>
      <button type="button" className={`img-button ${imgClass}`}>
        <img
          src={imageUrl}
          alt={name}
          className="image"
          onClick={onClickImage}
        />
      </button>
      <h1>{name}</h1>
      <p>{location}</p>
    </li>
  )
}
export default EventItem

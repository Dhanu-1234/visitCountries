import './index.css'

const VisitedCountry = props => {
  const {countryDetails, onRemoveCountry} = props
  const {id, name, imageUrl} = countryDetails

  const onClicked = () => {
    onRemoveCountry(id)
  }

  return (
    <li className="visited-country-item">
      <img src={imageUrl} alt="thumbnail" className="country-img-styles" />
      <div className="country-name-container">
        <p className="country-name">{name}</p>
        <button type="button" className="remove-btn" onClick={onClicked}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountry

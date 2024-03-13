import './index.css'

const CountryItem = props => {
  const {countryDetails, onVisitCountry} = props
  const {id, name, isVisited} = countryDetails

  const onClicked = () => {
    onVisitCountry(id)
  }

  return (
    <>
      <li className="list-item">
        <p className="name">{name}</p>
        {isVisited === true ? (
          <p className="status">Visited</p>
        ) : (
          <button type="button" className="visit-btn" onClick={onClicked}>
            Visit
          </button>
        )}
      </li>
      <hr className="line" />
    </>
  )
}

export default CountryItem

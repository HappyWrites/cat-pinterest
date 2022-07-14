function Favorites({ favorites, onPressLike }) {
  return (
    <>
      <li className="card" id={favorites.id} style={{ backgroundImage: favorites.url }}>
        <button onClick={onPressLike} className="card__like card__like_active" type="button"></button>
      </li>
    </>
  )
}

export default Favorites;

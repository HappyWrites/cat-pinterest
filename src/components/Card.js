function Card({ id, url, onPressLike }) {

  return (
    <>
      <li className="card" id={id} style={{ backgroundImage: `url(${url})` }}>
        <button onClick={onPressLike} className="card__like" type="button"></button>
      </li>      
    </>
  )
}

export default Card;

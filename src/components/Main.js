import React from "react";
import { Route } from "react-router-dom";
import Card from "./Card";
import Favorites from "./Favorites";
import NoFavorites from "./NoFavorites";
import Scroll from "./Scroll";

function Main({ cards }) {
  const [favoritesCats, setFavoritesCards] = React.useState([]);

  function pressLike(e) {
    e.target.classList.toggle('card__like_active');

    if (e.target.classList.contains('card__like_active')) {
      saveFavoriteCat(e.target.parentElement.id, e.target.parentElement.style.backgroundImage)
    } else {
      removeCatFromFavorites(e.target.parentElement.id)
    }
  }

  function saveFavoriteCat(catId, catLink) {
    setFavoritesCards([...favoritesCats, { id: catId, url: catLink }])
  }

  function removeCatFromFavorites(catId) {
    setFavoritesCards(favoritesCats.filter((item) => item.id !== catId))
  }

  return (
    <main className="content">
      <section className="cards">
        <ul className="cards__items">
          <Route exact path="/cat-pinterest">
            {cards.map((item) => (<Card key={item.id} id={item.id} {...item} card={item} onPressLike={pressLike} />))}
            <Scroll />
          </Route>
          <Route path="/cat-pinterest/favorites">
            {favoritesCats.length === 0 ? (
              <NoFavorites />
            ) : (
              favoritesCats.map((item) => (<Favorites key={item.id} favorites={item} onPressLike={pressLike} />)))}
          </Route>
        </ul>
      </section>
    </main>
  )
}

export default Main;
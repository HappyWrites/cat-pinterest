import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__navigation">
        <NavLink exact to="/cat-pinterest" className="header__link" activeClassName="header__link_active">Все котики</NavLink>
        <NavLink exact to="/cat-pinterest/favorites" className="header__link" activeClassName="header__link_active" >Любимые котики</NavLink>
      </div>
    </header>
  )
}

export default Header;
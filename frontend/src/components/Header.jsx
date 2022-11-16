import logo from "../images/logo.svg";
import { Switch, Route, Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="лого" />
      <nav className="header-nav">
        <ul className="header-nav__list">
          <Switch>
            <Route path="/sign-in">
              <li className="header-nav__item">
                <Link to="/sign-up" className="header-nav__link">
                  Регистрация
                </Link>
              </li>
            </Route>
            <Route path="/sign-up">
              <li className="header-nav__item">
                <Link to="/sign-in" className="header-nav__link">
                  Войти
                </Link>
              </li>
            </Route>
            <Route exact path="/">
              <li className="header-nav__item">{props.email}</li>
              <li className="header-nav__item">
                <Link
                  to="/sign-in"
                  className="header-nav__link"
                  onClick={props.onSignOut}
                >
                  Выйти
                </Link>
              </li>
            </Route>
          </Switch>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

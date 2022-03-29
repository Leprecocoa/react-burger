import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";
import header from "./header.module.css";

function Header() {
  return (
    <header className={`${header.header} p-4`}>
      <nav className={header.nav}>
        <NavLink
          exact
          to="/"
          className={`${header.navLink} pr-5 pt-4 pb-4 mr-2`}
          activeClassName={header.active_link}
        >
          <BurgerIcon type="primary" />
          <span className={`text text_type_main-default ml-2`}>
            Конструктор
          </span>
        </NavLink>
        <NavLink
          to="/feed"
          className={`${header.navLink} pl-5 pr-5 pt-4 pb-4`}
          activeClassName={header.active_link}
        >
          <ListIcon type="primary" />
          <span className={`text text_type_main-default ml-2`}>
            Лента заказов
          </span>
        </NavLink>
      </nav>
      <Logo />
      <div className={header.auth}>
        <NavLink
          exact
          to="/profile"
          className={`${header.navLink} pl-5 pr-5 pt-4 pb-4`}
          activeClassName={header.active_link}
        >
          <ProfileIcon type="primary" />
          <span className={`text text_type_main-default ml-2`}>
            Личный кабинет
          </span>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;

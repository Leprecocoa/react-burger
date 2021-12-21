import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import header from "./header.module.css";

function Header() {
  return (
    <header className={`${header.header} p-4`}>
      <nav className={header.nav}>
        <button className={`${header.navLink} pr-5 pt-4 pb-4 mr-2`}>
          <BurgerIcon type="primary" />
          <span className={`text text_type_main-default ml-2`}>
            Конструктор
          </span>
        </button>
        <button className={`${header.navLink} pl-5 pr-5 pt-4 pb-4`}>
          <ListIcon type="secondary" />
          <span
            className={`text text_type_main-default ml-2 ${header.navLinkInactive}`}
          >
            Лента заказов
          </span>
        </button>
      </nav>
      <Logo />
      <div className={header.auth}>
        <button className={`${header.navLink} pl-5 pr-5 pt-4 pb-4`}>
          <ProfileIcon type="secondary" />
          <span
            className={`text text_type_main-default ml-2 ${header.navLinkInactive}`}
          >
            Личный кабинет
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;

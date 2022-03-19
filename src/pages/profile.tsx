import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/header/header";
import styles from "./profile.module.css";

export const Profile = () => {
  const [nameValue, setNameValue] = useState("");
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <>
      <Header />
      <div className={`${styles.main} pt-20`}>
        <nav className={`${styles.nav} mr-15`}>
          <NavLink
            to="/profile"
            activeClassName={styles.active_link}
            className={`${styles.navlink} text text_type_main-medium text_color_inactive mb-6`}
          >
            Профиль
          </NavLink>
          <NavLink
            to="/"
            className={`${styles.navlink} text text_type_main-medium text_color_inactive mb-6`}
          >
            История заказов
          </NavLink>
          <NavLink
            to="/"
            className={`${styles.navlink} text text_type_main-medium text_color_inactive mb-6`}
          >
            Выход
          </NavLink>
          <p
            className={`${styles.nav_text} text text_type_main-default text_color_inactive`}
          >
            В этом разделе вы можете изменить свои персональные данные
          </p>
        </nav>
        <form>
          <div className="mb-6">
            <Input
              type={"text"}
              placeholder={"Имя"}
              onChange={(e) => setNameValue(e.target.value)}
              icon={"EditIcon"}
              value={nameValue}
              name={"name"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <div className="mb-6">
            <Input
              type={"text"}
              placeholder={"Логин"}
              onChange={(e) => setPasswordValue(e.target.value)}
              icon={"EditIcon"}
              value={loginValue}
              name={"login"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <div>
            <Input
              type={"password"}
              placeholder={"Пароль"}
              onChange={(e) => setLoginValue(e.target.value)}
              icon={"EditIcon"}
              value={passwordValue}
              name={"login"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
        </form>
      </div>
    </>
  );
};

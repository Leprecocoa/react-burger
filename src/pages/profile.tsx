import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, useHistory } from "react-router-dom";
import Header from "../components/header/header";
import { logoutUser } from "../services/actions";
import { useAppDispatch, useAppSelector } from "../utils/types";
import styles from "./profile.module.css";

export const Profile = () => {
  const { name, email, password } = useAppSelector((state) => {
    return {
      name: state.user.name,
      email: state.user.email,
      password: state.user.password,
    };
  });

  const dispatch = useAppDispatch();
  const history = useHistory();

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
          <button
            className={`${styles.logout} text text_type_main-medium text_color_inactive mb-6`}
            onClick={() =>
              dispatch(
                logoutUser(localStorage.getItem("refreshToken"), history)
              )
            }
          >
            Выход
          </button>
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
              onChange={(e) => {}}
              icon={"EditIcon"}
              value={name}
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
              onChange={(e) => {}}
              icon={"EditIcon"}
              value={email}
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
              onChange={(e) => {}}
              icon={"EditIcon"}
              value={password}
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

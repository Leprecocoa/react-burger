import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import {
  setUserInfo,
  logoutUser,
} from "../services/actions/user-actions";
import { useUserInfo } from "../services/hooks/use-user-info";
import { useAppDispatch, useAppSelector } from "../utils/types";
import styles from "./profile.module.css";

export const Profile = () => {
  useUserInfo();
  const { name, email, password } = useAppSelector((state) => {
    return {
      name: state.user.name,
      email: state.user.email,
      password: state.user.password,
    };
  });
  const [formvalue, setFormvalue] = useState({
    username: name,
    useremail: email,
    userpassword: password,
  });

  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    setFormvalue((prevstate) => ({
      ...prevstate,
      username: name || "",
      useremail: email || "",
    }));
  }, [email, name]);

  const handleChange = useCallback((evt) => {
    setFormvalue((prevstate) => ({
      ...prevstate,
      [evt.target.name]: evt.target.value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (evt) => {
      evt.preventDefault();
      dispatch(
        setUserInfo(
          formvalue.username,
          formvalue.useremail,
          formvalue.userpassword,
          history
        )
      );
    },
    [dispatch, formvalue, history]
  );

  const handleCancel = () => {
    setFormvalue({
      username: name,
      useremail: email,
      userpassword: password,
    });
  };

  const isFormChanged =
    formvalue.username !== name ||
    formvalue.useremail !== email ||
    formvalue.userpassword !== password;

  return (
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
          to="/profile/orders"
          className={`${styles.navlink} text text_type_main-medium text_color_inactive mb-6`}
        >
          История заказов
        </NavLink>
        <button
          className={`${styles.logout} text text_type_main-medium text_color_inactive mb-6`}
          onClick={() => {
            dispatch(logoutUser(history));
          }}
        >
          Выход
        </button>
        <p
          className={`${styles.nav_text} text text_type_main-default text_color_inactive`}
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className="mb-6">
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={(evt) => {
              handleChange(evt);
            }}
            icon={"EditIcon"}
            value={formvalue.username}
            name={"username"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        <div className="mb-6">
          <Input
            type={"text"}
            placeholder={"Логин"}
            onChange={(evt) => {
              handleChange(evt);
            }}
            icon={"EditIcon"}
            value={formvalue.useremail}
            name={"useremail"}
            error={false}
            errorText="Ошибка"
            size={"default"}
          />
        </div>
        <div>
          <Input
            type={"password"}
            placeholder={"Пароль"}
            onChange={(evt) => {
              handleChange(evt);
            }}
            icon={"EditIcon"}
            value={formvalue.userpassword}
            name={"userpassword"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        {isFormChanged && (
          <div className="mt-6">
            <Button type="primary" size="small">
              Сохранить
            </Button>
            <Button
              type="secondary"
              size="small"
              onClick={() => {
                handleCancel();
              }}
            >
              Отмена
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

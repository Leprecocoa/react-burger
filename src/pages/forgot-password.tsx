import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../components/header/header";
import { forgotPassword, FORGOT_PASSWORD_SET_EMAIL } from "../services/actions";
import { useAppDispatch, useAppSelector } from "../utils/types";
import styles from "./pages.module.css";

export const ForgotPassword = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const { email } = useAppSelector((state) => {
    return { email: state.resetPassword.email };
  });

  const handleChange = useCallback(
    (evt) => {
      const { name, value } = evt.target;
      dispatch({ type: FORGOT_PASSWORD_SET_EMAIL, payload: { [name]: value } });
    },
    [dispatch]
  );

  const handleSubmit = useCallback(
    (evt) => {
      evt.preventDefault();
      dispatch(forgotPassword(email, history));
    },
    [dispatch, email, history]
  );

  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={`${styles.form__block} pt-20`}>
          <h1 className="text text_type_main-medium mb-6">
            Восстановление пароля
          </h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className="mb-6">
              <Input
                type={"email"}
                placeholder={"Укажите e-mail"}
                onChange={(evt) => {
                  handleChange(evt);
                }}
                value={email}
                name={"email"}
                error={false}
                errorText={"Ошибка"}
                size={"default"}
              />
            </div>
            <Button type="primary" size="medium">
              Восстановить
            </Button>
          </form>
          <div>
            <p className="text text_type_main-default text_color_inactive mt-20">
              Вспомнили пароль?{" "}
              <Link to="/login" className={styles.link}>
                Войти
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

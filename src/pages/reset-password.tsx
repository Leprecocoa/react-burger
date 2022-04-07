import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { resetPassword } from "../services/actions/reset-password-actions";
import { useAppDispatch, useAppSelector } from "../utils/types";
import styles from "./pages.module.css";

export const ResetPassword = () => {
  const [resetPasswordValues, setResetPasswordValues] = useState<{
    [key: string]: string;
  }>({
    password: "",
    resetToken: "",
  });

  const { email } = useAppSelector((state) => {
    return { email: state.resetPassword.email };
  });

  const dispatch = useAppDispatch();
  const history = useHistory();

  const handleChange = useCallback((evt) => {
    const { name, value } = evt.target;
    setResetPasswordValues({ [name]: value });
  }, []);

  const handleSubmit = useCallback(
    (evt) => {
      evt.preventDefault();
      dispatch(
        resetPassword(
          resetPasswordValues.password,
          resetPasswordValues.resetToken,
          history
        )
      );
    },
    [dispatch, history, resetPasswordValues]
  );

  useEffect(() => {
    if (!email) {
      history.push("/forgot-password");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.main}>
      <div className={`${styles.form__block} pt-20`}>
        <h1 className="text text_type_main-medium mb-6">
          Восстановление пароля
        </h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className="mb-6">
            <PasswordInput
              onChange={(evt) => handleChange(evt)}
              value={resetPasswordValues.password}
              name={"password"}
            />
          </div>
          <div className="mb-6">
            <Input
              type={"text"}
              placeholder={"Введите код из письма"}
              onChange={(evt) => handleChange(evt)}
              value={resetPasswordValues.resetToken}
              name={"code"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <Button type="primary" size="medium">
            Сохранить
          </Button>
        </form>
        <p className="text text_type_main-default text_color_inactive mt-20">
          Вспомнили пароль?{" "}
          <Link to="/login" className={styles.link}>
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
};

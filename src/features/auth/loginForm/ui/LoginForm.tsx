import {yupResolver} from "@hookform/resolvers/yup";
import cl from "classnames";
import {FormProvider, useForm} from "react-hook-form";
import {Button,} from "rsuite";

import styles from "./loginForm.module.scss";
import {LoginInputs} from "./loginInputs/LoginInputs.tsx";
import {loginSchema} from "../config/authForm.schema.ts";
import {AuthForm} from "../model/authForm.types.ts";


export const LoginForm = () => {

  // Используйте useForm с yupResolver для подключения схемы валидации
  const methods = useForm<AuthForm>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: AuthForm) => {
    console.log(data); // Отправка данных формы
  };

  return (
    <FormProvider {...methods}>
      <div className={cl(styles.wrapper)}>
        <div className={cl(styles.form)}>
          <img className={styles.image} src="/roomir-logo.png" alt="logo"/>
          <h4 className={styles.title}>Войдите в систему</h4>
          <LoginInputs/>
          <Button
            onClick={methods.handleSubmit(onSubmit)}
            className={styles.submitButton}
          >
            Войти
          </Button>
        </div>
      </div>
    </FormProvider>
  );
};

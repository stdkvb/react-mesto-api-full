import React from "react";
import { Link, withRouter } from "react-router-dom";
import Authrization from "./Authorization";

function Register(props) {
  return (
    <Authrization
      title="Регистрация"
      buttonText="Зарегистрироваться"
      onSubmit={props.onRegister}
    >
      <Link to="/sign-in" className="authorization-form__login-button">
        Уже зарегистрированы? Войти
      </Link>
    </Authrization>
  );
}

export default withRouter(Register);

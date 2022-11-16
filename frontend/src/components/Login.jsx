import React from "react";
import Authorization from "./Authorization";

function Login(props) {
  return (
    <Authorization title="Вход" buttonText="Войти" onSubmit={props.onLogin} />
  );
}

export default Login;

import React from "react";

function Authorization(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({ email, password });
  };

  return (
    <form className="authorization-form" onSubmit={handleSubmit}>
      <h3 className="authorization-form__title">{props.title}</h3>
      <input
        className="authorization-form__input"
        type="text"
        placeholder="Email"
        onChange={handleChangeEmail}
      />
      <input
        className="authorization-form__input"
        type="password"
        placeholder="Пароль"
        onChange={handleChangePassword}
      />
      <button className="authorization-form__submit-button" type="submit">
        {props.buttonText}
      </button>
      {props.children}
    </form>
  );
}

export default Authorization;

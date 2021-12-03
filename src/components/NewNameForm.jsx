import React, { useState } from "react";

import "./NewNameForm.css";

const NewNameForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameInputHandler = (event) => {
    setUsername(event.target.value);
  };
  const ageInputHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newUserInfo = {
      userName: username,
      age: age,
      id: Math.random().toString(),
    };
    props.onAddUserInfo(newUserInfo);
    setUsername("");
    setAge("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-wrapper">
        <div className="smaller-wrapper">
          <div className="username-wrapper">
            <label className="username">Username</label>
            <input
              className="username-input"
              type="text"
              value={username}
              onChange={usernameInputHandler}
            />
          </div>
          <div className="age-wrapper">
            <label className="age">Age (Years)</label>
            <input
              className="age-input"
              type="number"
              min="2"
              max="118"
              value={age}
              onChange={ageInputHandler}
            />
          </div>
          <button class="button" type="submit">
            Add User
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewNameForm;

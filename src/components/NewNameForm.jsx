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
      <div>
        <label>Username</label>
        <input type="text" value={username} onChange={usernameInputHandler} />
      </div>
      <div>
        <label>Age (years)</label>
        <input
          type="number"
          min="1"
          max="118"
          value={age}
          onChange={ageInputHandler}
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default NewNameForm;

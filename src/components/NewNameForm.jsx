import React, { useState } from "react";

import "./NewNameForm.css";

const NewNameForm = (props) => {
  const [enteredUsername, setUserName] = useState("");
  const [enteredAge, setAge] = useState("");

  const usernameInputHandler = (event) => {
    setUserName(event.target.value);
  };
  const ageInputHandler = (event) => {
    setAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    
    const newUserInfo = {
        userName: enteredUsername,
        age: enteredAge,
    };
    props.onSaveUserInfo(newUserInfo);
    setUserName("");
    setAge("");

  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={enteredUsername}
          onChange={usernameInputHandler}
        ></input>
      </div>
      <div>
        <label>Age (years)</label>
        <input
          type="number"
          min="1"
          max="118"
          value={enteredAge}
          onChange={ageInputHandler}
        ></input>
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default NewNameForm;

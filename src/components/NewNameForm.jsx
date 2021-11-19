import React from "react";

import "./NewNameForm.css";



const NewNameForm = () => {
const submitHandler = (event) => {
    event.preventDefault();
};
    
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Username</label>
        <input></input>
      </div>
      <div>
        <label type ="number" min="1">Age (years)</label>
        <input></input>
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default NewNameForm;

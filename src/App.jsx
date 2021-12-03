import React, { useState } from "react";
import NewNameForm from "./components/NewNameForm";
import UserList from "./components/UserList";
import "./App.css";

function App() {
  const [userInfoList, setUserInfoList] = useState([]);
  const addUserInfoHandler = (userData) => {
    setUserInfoList((prevUserInfo) => {
      return [userData, ...prevUserInfo];
    });
  };

  return (
    <div className="App-Wrapper">
      <NewNameForm onAddUserInfo={addUserInfoHandler}></NewNameForm>
      {userInfoList.length !== 0 && <UserList items={userInfoList}></UserList>}
    </div>
  );
}

export default App;

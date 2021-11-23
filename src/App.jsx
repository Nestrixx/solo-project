import React, { useState } from "react";
import NewNameForm from "./components/NewNameForm";
import UserList from "./components/UserList";

function App() {
  const [userInfoList, setUserInfoList] = useState([]);
  const addUserInfoHandler = (userData) => {
    setUserInfoList((prevUserInfo) => {
      return [userData, ...prevUserInfo];
    });
  };

  return (
    <div>
      <NewNameForm onAddUserInfo={addUserInfoHandler}></NewNameForm>
      <UserList items={userInfoList}></UserList>
    </div>
  );
}

export default App;

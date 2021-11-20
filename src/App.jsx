import React, {useState} from "react";
import UserInfo from "./components/UserInfo";

function App() {
    const [userInfo, setUserInfo] = useState('');
const addUserInfoHandler = (userData) => {
    setUserInfo(
        (prevUserInfo) => {
            return [userData, ...prevUserInfo];
        },
    );
};
    
  return (
    <div>
        <UserInfo onAddUserInfo={addUserInfoHandler}></UserInfo>
    </div>
  );
}

export default App;

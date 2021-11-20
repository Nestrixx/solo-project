import React from "react";
import NewNameForm from "./NewNameForm";

import "./UserInfo.css"

const UserInfo = () => {
const SaveUserInfoHandler = (enteredUserInfo) => {
    const newUserInto = {
        ...enteredUserInfo,
        id: Math.random().toString(),
    };
};

    return(
        <NewNameForm onSaveUserInfo={SaveUserInfoHandler}></NewNameForm>
    );
};

export default UserInfo;
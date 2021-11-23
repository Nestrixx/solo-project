import React from "react";
import UserListItem from "./UserListItem";

const UserList = (props) => {
  return (
    <ul>
      {props.items.map((userInfo) => (
        <UserListItem
          userName={userInfo.userName}
          age={userInfo.age}
          key={userInfo.id}
        />
      ))}
    </ul>
  );
};

export default UserList;

import React from "react";
import UserListItem from "./UserListItem";
import "./UserList.css";

const UserList = (props) => {
  return (
    <div>
      <ul className="listWrapper">
        {props.items.map((userInfo) => (
          <UserListItem
            userName={userInfo.userName}
            age={userInfo.age}
            key={userInfo.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default UserList;

import React from "react";
const UserListItem = (props) => {
  return (
    <li>
      <div>
        <h2>{props.userName}</h2>
        <div>{props.age}</div>
      </div>
    </li>
  );
};

export default UserListItem;

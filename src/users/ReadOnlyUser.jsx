import React from "react";

export const ReadOnlyUser = ({ user, index }) => {
  return (
    <>
      <th>{index + 1}</th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
    </>
  );
};

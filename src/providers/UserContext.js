import React, { createContext, useState } from "react";

const defaultValues = {
  users: [],
  user: {},
  setUsers: () => {},
  setUser: () => {},
};

export const UserContext = createContext(defaultValues);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ name: "", username: "", email: "" });

  return (
    <UserContext.Provider
      value={{
        users,
        user,
        setUsers,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

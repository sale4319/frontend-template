import React, { createContext, useState } from "react";

const defaultValues = {
  users: [],
  setUsers: () => {},
};

export const UserContext = createContext(defaultValues);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

import React, { createContext, useState } from "react";

const defaultValues = {
  users: [],
  user: {},
  isLoading: Boolean,
  setUsers: () => {},
  setUser: () => {},
  setIsLoading: () => {},
};

export const UserContext = createContext(defaultValues);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ name: "", username: "", email: "" });
  const [isLoading, setIsLoading] = useState(Boolean);

  return (
    <UserContext.Provider
      value={{
        users,
        user,
        isLoading,
        setUsers,
        setUser,
        setIsLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

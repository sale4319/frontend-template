import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../providers/UserContext";
import { getUsers, getUser } from "./apiUserFunctions";

export const useGetUsers = () => {
  const { setUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers(setUsers);
  }, []);
};

export const useGetUser = () => {
  const { id } = useParams();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    getUser(id, setUser);
  }, []);
};

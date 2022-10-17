import axios from "axios";
import { useContext, useEffect } from "react";
import { UserContext } from "../providers/UserContext";

export const useGetUsers = () => {
  const { setUsers } = useContext(UserContext);

  const fetchUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
};

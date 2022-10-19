import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../providers/UserContext";

export const useGetUsers = () => {
  const { setUsers } = useContext(UserContext);

  const fetchUsers = () => {
    fetch("http://localhost:8080/users", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setUsers(json);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);
};

export const useGetUser = () => {
  const { id } = useParams();
  const { setUser } = useContext(UserContext);

  const fetchUser = () => {
    fetch(`http://localhost:8080/user/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setUser(json);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);
};

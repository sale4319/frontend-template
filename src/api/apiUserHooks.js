import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../providers/UserContext";

export const useGetUsers = () => {
  const { setUsers } = useContext(UserContext);

  const fetchUsers = () => {
    fetch("https://backend-service-rest.herokuapp.com/users", {
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
    fetch(`https://backend-service-rest.herokuapp.com/user/${id}`, {
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

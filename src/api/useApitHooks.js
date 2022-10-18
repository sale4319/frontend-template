import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
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

export const useGetUser = () => {
  const { id } = useParams();
  const { setUser } = useContext(UserContext);

  const fetchUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);
};

// export const useEditUser = () => {
//   const { id } = useParams();
//   const { user } = useContext(UserContext);

//   const fetchUser = async () => {
//     const result = await axios.get(`http://localhost:8080/user/${id}`);
//     setUser(result.data);
//   };

//   useEffect(() => {
//     fetchUser();
//   }, []);
// };

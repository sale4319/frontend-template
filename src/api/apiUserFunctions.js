import {
  getUsersDev,
  getUserDev,
  getUserProd,
  getUsersProd,
  dev,
} from "./apiEndpoints/Users";

const refreshPage = () => window.location.reload();

export const getUsers = (setUsers, setIsLoading) => {
  setIsLoading(true);
  fetch(dev ? getUsersDev : getUsersProd, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      setUsers(json);
      setIsLoading(false);
    });
};

export const getUser = (id, setUser) => {
  fetch(dev ? `${getUserDev}/${id}` : `${getUserProd}/${id}`, {
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

export const addUser = async (data = {}) => {
  const response = await fetch(dev ? getUserDev : getUserProd, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const editUser = async (id, data = {}) => {
  const response = await fetch(
    dev ? `${getUserDev}/${id}` : `${getUserProd}/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  refreshPage();
  return response.json();
};

export const deleteUser = async (id) => {
  await fetch(dev ? `${getUserDev}/${id}` : `${getUserProd}/${id}`, {
    method: "DELETE",
  });
  refreshPage();
};

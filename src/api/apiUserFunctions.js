const refreshPage = () => window.location.reload();

export const addUser = async (data = {}) => {
  const response = await fetch(
    "https://backend-service-rest.herokuapp.com/user",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  refreshPage();
  return response.json();
};

export const editUser = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  refreshPage();
  return response.json();
};

export const deleteUser = async (id) => {
  await fetch(`https://backend-service-rest.herokuapp.com/user/${id}`, {
    method: "DELETE",
  });
  refreshPage();
};

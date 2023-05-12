import { createContext, useEffect, useState } from "react";
const HOST_SERVER = import.meta.env.VITE_HOST_SERVER;
const userInitialState = {
  id: "",
  username: "",
  email: "",
  password: "",
  rol: "",
  avatar: "",
};
export const UserContext = createContext(userInitialState); // {Provider , Consumer}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(userInitialState);
  const [token, setToken] = useState(null);

  const getUser = async (token) => {
    try {
      const { ok, data } = await fetch(`${HOST_SERVER}/users`, {
        method: "POST",
        headers: {
          Authorization: token,
        },
      }).then((res) => res.json());
      ok ? setUser(data) : setUser(userInitialState);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const tokenStorage = localStorage.getItem("token");
    if (tokenStorage) {
      setToken(tokenStorage);
      getUser(tokenStorage);
    }
  }, []);

  const logout = () => {
    setUser(userInitialState);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout, token, setToken }}>
      {/* REPRESENTACIÓN DE VARIABLES GLOBALES */}
      {children}
    </UserContext.Provider>
  );
};

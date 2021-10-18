import { createContext, useContext, useEffect, useState } from "react";

import DatabaseService from "./database";

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    return DatabaseService.login(username, password).then((response) => {
      if (response.data.error) {
        return response;
      } else {
        const token = response.data.token;
        const username = response.data.username;
        const inventory = response.data.inventory;

        localStorage.setItem("user", JSON.stringify(response.data));

        setUser({
          username: username,
          token: token,
          inventory: inventory.runes,
        });
        return response;
      }
    });
  };

  const signOut = () => {
    setUser(null);
    localStorage.clear();
  };

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      setUser({
        username: loggedInUser.username,
        token: loggedInUser.token,
        inventory: loggedInUser.inventory,
      });
    }
  }, []);

  return {
    user,
    login,
    signOut,
  };
}

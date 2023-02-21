import { useState, createContext } from "react";
import { deleteDataFromAsyncStorage } from "../util/auth/localStorageAuth";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const handleLogout = () => {
    deleteDataFromAsyncStorage("user");
    setUser((prev) => (prev = null));
  };
  return (
    <UserContext.Provider value={{ user, setUser, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

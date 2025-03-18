import { createContext, useContext, useState } from "react";
import { createUser } from "../services/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || []
  );

  const addUser = async (form) => {
    const data = await createUser(form);
    if (data) {
      setUser((prevUsers) => [...prevUsers, data]);
    }
    let newUser = [...user, data];
    localStorage.setItem("user", JSON.stringify(newUser));
  };
  const deleteUser = (id) => {
    const data = user.filter((use) => use.id != id);
    if (data) {
      setUser(data);
    }

  
    localStorage.setItem("user", JSON.stringify(data));
  };

  return (
    <UserContext.Provider value={{ user, addUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Kontekst istifadəsi üçün hook
export const useUser = () => useContext(UserContext);

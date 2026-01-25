import React, { createContext, useState } from "react";
const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "Obed", email: "obed@example.com" });
  const value = { user, setUser };

  return React.createElement(UserContext.Provider, { value: value }, children);
}
export default UserContext;

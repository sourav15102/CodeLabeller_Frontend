import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const toShare = { isAuthenticated, setAuthenticated };
  return (
    <AuthContext.Provider value={toShare}>{children}</AuthContext.Provider>
  );
}

import { useContext } from "react";
import jwtDecode from "jwt-decode";
import authContext from "./context";
import authStorage from "./storage";
export default useAuth = () => {
  const { user, setUser } = useContext(authContext);
  const login = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
  };
  const logout = () => {
    setUser(null);
    authStorage.removeToken();
  };
  return { login, logout, user };
};

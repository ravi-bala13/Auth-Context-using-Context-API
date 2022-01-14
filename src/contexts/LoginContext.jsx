import { createContext, useContext, useState } from "react";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");
  //   console.log("token:", token);

  const handleLogin = () => {
    setIsAuth(isAuth ? false : true);
  };

  const settingToken = (data) => {
    setToken(data);
  };

  return (
    <LoginContext.Provider value={{ isAuth, token, handleLogin, settingToken }}>
      {children}
    </LoginContext.Provider>
  );
};

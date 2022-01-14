import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";

export const Navebar = () => {
  const { isAuth, handleLogin } = useContext(LoginContext);

  return (
    <div>
      <div className="navbar">
        <button>home</button>
        <button className="navbar-login" onClick={isAuth ? handleLogin : null}>
          {isAuth ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

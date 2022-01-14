import { useContext } from "react";

import { LoginContext } from "../contexts/LoginContext";
import Cart from "./Cart";
import LoginInput from "./LoginInput";

function Body() {
  const { isAuth, token } = useContext(LoginContext);
  return isAuth ? (
    <div>
      <Cart />
      user token : {token.token}
    </div>
  ) : (
    <div>
      {" "}
      <LoginInput />{" "}
    </div>
  );
}

export default Body;

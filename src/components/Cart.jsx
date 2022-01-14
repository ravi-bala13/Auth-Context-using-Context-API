import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { LoginContext } from "../contexts/LoginContext";

function Cart() {
  const { cart, handleCartUpdate } = useContext(CartContext);

  return (
    <div>
      No of Cart items : {cart}
      <br />
      <button
        onClick={() => {
          handleCartUpdate(1);
        }}
      >
        Add
      </button>{" "}
    </div>
  );
}

export default Cart;

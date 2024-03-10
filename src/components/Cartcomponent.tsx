import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastPosition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../pages/Cart.css";

interface CartItem {
  id: string;
  img: string;
  title: string;
  price: string;
  selectedSize: string;
  amt: number;
}

interface CartProps {
  cartItems: CartItem[];
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, amt: number) => void;
}

const Cartcomponent = ({
  cartItems,
  removeFromCart,
  updateQuantity,
}: CartProps) => {
  const plus = (id: string) => {
    updateQuantity(id, 1);
  };

  const minus = (id: string) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.amt > 1) {
      updateQuantity(id, -1); // Decrement quantity by 1 if greater than 1
    } else {
      toast.warning("Minimum Order", {
        position: "bottom-left" as ToastPosition,
        style: { background: "#fff", color: "#e01a00" },
        icon: false,
        progressStyle: { background: "#e01a00", color: "#fff" },
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <ul className="cart-list">
        {cartItems.map((item) => (
          <li key={item.id}>
            <div className="cart-img">
              <img src={item.img} alt="image" />
            </div>
            <div className="cart-detail">
              <h4 className="c-name">{item.title}</h4>
              <span>Size: {item.selectedSize}</span>
              <div className="cart-quantity">
                <button
                  className="cart-button minus"
                  onClick={() => minus(item.id)}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <div>{item.amt}</div>
                <button
                  className="cart-button plus"
                  onClick={() => plus(item.id)}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
            <div className="cart-price">Rs. {item.price}</div>
            <button
              className="cart-button remove"
              onClick={() => removeFromCart(item.id)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cartcomponent;

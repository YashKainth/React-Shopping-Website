import { useState } from "react";
import CategoryMen from "../components/CategoryMen";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import "./Men.css";
import "../components/Products.css";
import "./Cart.css";
import productsData from "../products/Men.json";
import { toast, ToastPosition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cartcomponent from "../components/Cartcomponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Billcomponent from "../components/Billcomponent";
import "../components/Bill.css";

interface Product {
  id: string;
  img: string;
  title: string;
  price: string;
  category: string;
  size: string[];
}

interface CartItem {
  id: string;
  img: string;
  title: string;
  price: string;
  selectedSize: string;
  amt: number;
}

const Men = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [Bill, setBill] = useState(false);

  const handleToggleCart = () => {
    setCartOpen(true);
  };

  const handleBuy = () => {
    setBill(false);
    setCartItems([]);

    toast.success("Purchase Successful :)", {
      position: "bottom-center" as ToastPosition,
      style: { background: "#292929  ", color: "#fff" },
      icon: false,
      progressStyle: { background: "#ef8f10", color: "#fff" },
      autoClose: 3000,
    });
  };

  const handleBuyAlt = () => {
    setBill(false);
  };

  const addToCart = (product: Product) => {
    const newItem: CartItem = {
      id: product.id,
      img: product.img,
      title: product.title,
      price: product.price,
      selectedSize: "S",
      amt: 1,
    };

    setCartItems([...cartItems, newItem]);

    handleToggleCart();

    toast.success("Added to cart", {
      position: "top-left" as ToastPosition,
      style: { background: "#fff  ", color: "#ef8f10" },
      icon: false,
      progressStyle: { background: "#ef8f10", color: "#fff" },
      autoClose: 2000,
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== id)
    );
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory((prevSelected) => {
      if (prevSelected === category) {
        return null;
      } else {
        return category;
      }
    });
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize((prevSelected) => {
      if (prevSelected === size) {
        return null;
      } else {
        return size;
      }
    });
  };

  const closesidecart = () => {
    setCartOpen(false);
  };

  const updateQuantity = (id: string, amt: number) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === id ? { ...item, amt: item.amt + amt } : item
      )
    );
  };

  const checkout = () => {
    setBill(true);
    setCartOpen(false);
  };

  return (
    <>
      <div className={`billbox poppins ${Bill ? "" : "none"}`}>
        <Billcomponent cartItems={cartItems} />
        <div className="buy-button">
          <button className="final-buy" onClick={handleBuy}>
            Buy
          </button>
        </div>
        <button className="icon-close buy-close" onClick={handleBuyAlt}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <div className={`side-cart poppins ${cartOpen ? "open" : ""}`}>
        <button className="icon-close" onClick={closesidecart}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <h3 className="heading">Shopping Cart</h3>
        <Cartcomponent
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
        <div className="buy-button checkout">
          <button onClick={checkout}>Checkout</button>
        </div>
      </div>
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="men-container">
        <div>
          <CategoryMen
            selectedCategory={selectedCategory}
            handleCategoryChange={handleCategoryChange}
            handleSizeChange={handleSizeChange}
            selectedSize={selectedSize}
          />
        </div>
        <div className="products">
          <div className="product-display">
            {productsData.map(
              (product: Product) =>
                (selectedCategory === null ||
                  product.category === selectedCategory) &&
                (selectedSize === null ||
                  product.size.includes(selectedSize)) && (
                  <Products
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                  />
                )
            )}
          </div>
        </div>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
};

export default Men;

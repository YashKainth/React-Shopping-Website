import "./Products.css";
import "react-toastify/dist/ReactToastify.css";

interface Product {
  id: string;
  img: string;
  title: string;
  price: string;
  category: string;
  size: string[];
}

interface ProductProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const Products = ({ product, addToCart }: ProductProps) => {
  return (
    <>
      <div className="product-card poppins">
        <div className="product-img">
          <img src={product.img} alt={product.title} />
        </div>
        <div className="product-details">
          <h3 className="product-title">{product.title}</h3>
          <h5 className="product-price">Rs. {product.price}/-</h5>
        </div>
        <div className="buy-button">
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default Products;

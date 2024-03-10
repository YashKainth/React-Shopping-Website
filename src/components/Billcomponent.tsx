import { useEffect, useState } from "react";

interface CartItem {
  id: string;
  img: string;
  title: string;
  price: string;
  selectedSize: string;
  amt: number;
}

interface BillProps {
  cartItems: CartItem[];
}

const Billcomponent = ({ cartItems }: BillProps) => {
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(100);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const subTotalAmount = cartItems.reduce(
      (acc, item) => acc + parseInt(item.price) * item.amt,
      0
    );
    setSubtotal(subTotalAmount);

    if (subTotalAmount >= 899) {
      setShipping(0);
    } else {
      setShipping(100);
    }

    const taxAmount = parseFloat((subTotalAmount * 0.05).toFixed(2));
    setTax(taxAmount);

    const totalAmount = subTotalAmount + shipping + taxAmount;
    setTotal(totalAmount);
  }, [cartItems, shipping]);

  return (
    <>
      <h3 className="bill-heading">Bill Summary</h3>
      <div className="bill-details">
        <div className="subtotal det">
          <h5>Subtotal</h5>
          <span>Rs {subtotal}</span>
        </div>
        <div className="shipping det">
          <h5>Shipping Charges</h5>
          <span>Rs {shipping}</span>
        </div>
        <div className="tax det">
          <h5>Tax</h5>
          <span>Rs {tax}</span>
        </div>
      </div>
      <div className="total-bill det">
        <h4>Total</h4>
        <span>Rs {total}</span>
      </div>
    </>
  );
};

export default Billcomponent;

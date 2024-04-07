import { useMemo, useState } from "react";
import useCartStore from "../store/useCartStore";

function CartPage() {
  const { cartFootwears, incrementItemQty, decrementItemQty } = useCartStore();
  // const [total, setTotal] = useState(0);

  const handleIncrement = (id) => {
    incrementItemQty(id);
  };

  const handleDecrement = (id) => {
    decrementItemQty(id);
  };

  const totalAmount = useMemo(() => {
    return cartFootwears.reduce(
      (total, product) => total + product.price * product.qty,
      0
    );
  }, [cartFootwears]);

  // setTotal(totalAmount);

  return (
    <section className="container h-full">
      <h1 className="text-3xl font-bold my-8">Shopping Cart</h1>
      {cartFootwears.length === 0 ? (
        <h3 className="text-2xl text-gray-500">Your cart is empty.</h3>
      ) : (
        <div className="">
          <div className="flex justify-start items-center gap-4 my-4">
            {cartFootwears.map((item) => (
              <div key={item.id} className="bg-gray-100 p-4 rounded">
                <h2 className="text-xl font-bold my-2">{item.name}</h2>
                <p className="text-gray-700 text-center my-2">{item.price}</p>
                <div className="flex justify-center items-center gap-2">
                  <button
                    className="px-2 font-semibold border rounded"
                    onClick={() => handleIncrement(item.id)}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                  <p className="text-gray-500">Quantity: {item.qty}</p>
                  <button
                    className="px-2 font-semibold border rounded"
                    onClick={() => handleDecrement(item.id)}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-semibold">Total</h2>
            <p>{totalAmount}</p>
            <button className="px-4 py-2 border rounded-sm cursor-pointer bg-slate-50 hover:bg-slate-200">
              Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default CartPage;

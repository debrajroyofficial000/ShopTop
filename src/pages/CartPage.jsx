import { useMemo } from "react";
import useCartStore from "../store/useCartStore";
import useModal from "../store/useModal";
import { Link } from "react-router-dom";

function CartPage() {
  const {
    cartFootwears,
    incrementItemQty,
    decrementItemQty,
    removeCartFootwears,
  } = useCartStore();
  const { cartToggle, toggleModal } = useModal();

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

  const handleCheckout = () => {
    removeCartFootwears();
    toggleModal();
  };

  return (
    <section className="container h-full relative">
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
            <button
              className="px-4 py-2 border rounded-sm cursor-pointer bg-slate-50 hover:bg-slate-200"
              onClick={toggleModal}
            >
              Checkout
            </button>
          </div>
        </div>
      )}

      {cartToggle && (
        <div className="h-full w-full top-0 left-0 absolute flex justify-center items-center bg-gradient-to-b from-gray-100 to-gray-30 shadow">
          <div className="w-[300px] h-[300px] flex justify-center items-center flex-col bg-white rounded-sm gap-4">
            <h3>Your items are on the way</h3>
            <p>Now continue shopping</p>
            <Link
              to={"/products"}
              onClick={handleCheckout}
              className="px-4 py-2 border rounded bg-slate-50 hover:bg-slate-200 text-2xl"
            >
              <i className="fa-solid fa-check"></i>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

export default CartPage;

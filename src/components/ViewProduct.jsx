import { Link } from "react-router-dom";
import useProductStore from "../store/useProductStore";
// import { useEffect } from "react";

function ViewProduct({ product }) {
  const { addViewedProduct } = useProductStore();
  const handleAddStorage = () => {
    addViewedProduct(product);
  };

  return (
    <div className="border rounded p-4 md:rows-span-1 flex flex-col">
      <div className="grow">
        <h2>{product.name}</h2>
        <h3>{product.price}</h3>
      </div>
      <Link
        to={`/products/${product.id}`}
        onClick={handleAddStorage}
        className="px-4 py-2 cursor-pointer bg-beige block text-center"
      >
        View
      </Link>
    </div>
  );
}

export default ViewProduct;

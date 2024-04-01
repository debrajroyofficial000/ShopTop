import { useEffect } from "react";
import useCartStore from "../store/CartStore";

function ProductsPage() {
  const { footwears, getFootwears } = useCartStore();
  useEffect(() => {
    getFootwears("http://localhost:3000/footwears");
  }, []);
  console.log(footwears);
  return (
    <div>
      {footwears?.map((footwear) => (
        <div key={footwear.id}>{footwear.name}</div>
      ))}
    </div>
  );
}

export default ProductsPage;

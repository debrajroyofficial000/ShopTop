import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";
import useCartStore from "../store/CartStore";
function ProductLists() {
  const [page, setPage] = useState(1);
  const { getFootwears, isLoading, isError, filteredFootwears } =
    useCartStore();

  useEffect(() => {
    setTimeout(() => {
      getFootwears("http://localhost:3000/footwears");
    }, 1000);
  }, []);

  if (isLoading) return <h1>Loading ....</h1>;
  if (isError) return <h1>Something went wrong</h1>;

  return (
    <div className="col-span-full md:col-span-4 flex flex-col border">
      <div className="grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {filteredFootwears.slice(page * 10 - 10, page * 10).map((footwear) => (
          <ProductCard key={footwear.id} product={footwear} />
        ))}
      </div>
      <Pagination footwears={filteredFootwears} page={page} setPage={setPage} />
    </div>
  );
}

export default ProductLists;

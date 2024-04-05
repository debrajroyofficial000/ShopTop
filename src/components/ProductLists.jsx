import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import ViewProduct from "./ViewProduct";
import useProductStore from "../store/useProductStore";
import Shimmer from "./Shimmer";
function ProductLists() {
  const [page, setPage] = useState(1);
  const { getFootwears, isLoading, isError, filteredFootwears } =
    useProductStore();

  useEffect(() => {
    setTimeout(() => {
      getFootwears("http://localhost:3000/footwears");
    }, 1000);
  }, []);

  if (isLoading)
    return (
      <div className="col-span-full md:col-span-4 flex flex-col">
        <div className="grow grid grid-cols-1 grid-rows-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
        </div>
      </div>
    );
  if (isError) return <h1>Something went wrong</h1>;

  return (
    <div className="col-span-full md:col-span-4 flex flex-col">
      <div className="grow grid grid-cols-1 grid-rows-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {filteredFootwears.slice(page * 10 - 10, page * 10).map((footwear) => (
          <ViewProduct key={footwear.id} product={footwear} />
        ))}
      </div>
      <Pagination footwears={filteredFootwears} page={page} setPage={setPage} />
    </div>
  );
}

export default ProductLists;

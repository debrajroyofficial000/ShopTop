import { useState } from "react";
import Pagination from "./Pagination";
import ViewProduct from "./ViewProduct";
import useProductStore from "../store/useProductStore";
function ProductLists() {
  const [page, setPage] = useState(1);
  const { filteredFootwears } = useProductStore();

  return (
    <div className="col-span-full md:col-span-4 flex flex-col">
      {filteredFootwears.length === 0 && <h3>No products found</h3>}
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

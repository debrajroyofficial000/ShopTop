import { useEffect, useState } from "react";
import useCartStore from "../store/CartStore";

function ProductsPage() {
  const { footwears, getFootwears } = useCartStore();
  const [page, setPage] = useState(1);
  useEffect(() => {
    getFootwears("http://localhost:3000/footwears");
  }, []);
  console.log(footwears);

  function selectPage(id) {
    setPage(id);
  }

  return (
    <section>
      <div>
        {footwears.length > 0 &&
          footwears
            .slice(page * 10 - 10, page * 10)
            .map((footwear) => <div key={footwear.id}>{footwear.name}</div>)}
      </div>
      <div className="flex justify-center items-center">
        {[...Array(footwears.length / 10)].map((_, i) => (
          <button
            key={i}
            className={`${
              page === i + 1 && "bg-slate-400"
            } py-2 px-4 text-md border rounded mx-1`}
            onClick={() => selectPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}

export default ProductsPage;

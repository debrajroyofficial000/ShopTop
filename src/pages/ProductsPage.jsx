import { useEffect } from "react";
import SearchBox from "../components/SearchBox";
import FilterBox from "../components/FilterBox";
import ProductLists from "../components/ProductLists";
import useProductStore from "../store/useProductStore";
import Shimmer from "../components/Shimmer";

function ProductsPage() {
  const { isLoading, isError, getFootwears } = useProductStore();

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
  if (isError) return <h1>Check your internet connection...</h1>;

  return (
    <section className="container h-full flex flex-col p-2 ">
      <SearchBox />
      <div className="grid grid-cols-5 gap-4 grow">
        <FilterBox />
        <ProductLists />
      </div>
    </section>
  );
}

export default ProductsPage;

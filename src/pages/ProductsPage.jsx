import SearchBox from "../components/SearchBox";
import FilterBox from "../components/FilterBox";
import ProductLists from "../components/ProductLists";

function ProductsPage() {
  return (
    <section className="container h-full flex flex-col border p-2 ">
      <SearchBox />
      <div className="grid grid-cols-5 gap-4 grow">
        <FilterBox />
        <ProductLists />
      </div>
    </section>
  );
}

export default ProductsPage;

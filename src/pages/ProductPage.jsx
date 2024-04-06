import { useParams } from "react-router-dom";
import useProductStore from "../store/useProductStore";
import ViewProduct from "../components/ViewProduct";
import { useMemo } from "react";
import ProductFAQ from "../components/ProductFAQ";
function ProductPage() {
  const { id } = useParams();
  const { viewedProduct, filteredFootwears } = useProductStore();
  const similarProducts = useMemo(() => {
    return filteredFootwears.filter(
      (footwear) =>
        footwear.color === viewedProduct.color &&
        footwear.id !== viewedProduct.id
    );
  }, [viewedProduct, filteredFootwears]);

  const { url, name, brand, color, description, rating, price, faqs } =
    viewedProduct;

  return (
    <section className="container rounded overflow-hidden shadow-lg p-4">
      <div>
        <img className="w-full" src={url} alt={name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{description}</p>
          <p className="text-gray-700 text-base">Brand: {brand}</p>
          <p className="text-gray-700 text-base">Color: {color}</p>
          <p className="text-gray-700 text-base">Price: ${price}</p>
          <div className="flex items-center mt-4">
            <p className="text-gray-700">
              {rating}
              <span className="ml-2">
                <i className="fa-solid fa-star" />
              </span>
            </p>
          </div>
        </div>
        <button className="px-4 py-2 cursor-pointer border rounded bg-beige hover:bg-dark_beige">
          Add to cart
        </button>
      </div>
      <section className="mt-4">
        <h3 className="mb-2 text-2xl font-semibold">FAQs</h3>
        <ProductFAQ FAQs={faqs} />
      </section>
      <section className="mt-4">
        <h3 className="mb-2 text-2xl font-semibold">Similar Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {similarProducts.map((similarProd) => (
            <div key={similarProd.id} className="col-span-1">
              <ViewProduct product={similarProd} />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default ProductPage;

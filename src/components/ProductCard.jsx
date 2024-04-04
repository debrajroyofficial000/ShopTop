function ProductCard({ product }) {
  return (
    <div className="border flex flex-col">
      <div className="grow">
        <h2>{product.name}</h2>
        <h3>{product.price}</h3>
      </div>
      <button className="px-4 py-2 cursor-pointer">Add to Cart</button>
    </div>
  );
}

export default ProductCard;

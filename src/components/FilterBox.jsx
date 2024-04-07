import { useState } from "react";
import useProductStore from "../store/useProductStore";

function FilterBox() {
  const [maxPrice, setMaxPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [color, setColor] = useState("");

  const { addMaxPriceFilter, addRatingFilter, addColorFilter, resetFilter } =
    useProductStore();
  const handleApplyFilter = () => {
    if (maxPrice > 0) addMaxPriceFilter(maxPrice);
    if (parseInt(rating) > 0) addRatingFilter(parseInt(rating));
    if (color) addColorFilter(color);
  };

  const handleResetFilter = () => {
    setColor("");
    setRating(0);
    setMaxPrice(0);
    resetFilter();
  };

  return (
    <div className="col-span-full md:col-span-1">
      <h2 className="text-2xl font-semibold">Filters</h2>
      <div>
        <div className="my-4">
          <label className="block text-md font-semibold mb-2">Price</label>
          <div className="my-4 flex gap-2 justify-center items-center">
            <input
              type="number"
              className="appearance-none block w-full px-4 py-2 leading-tight bg-sea border rounded focus:outline-none focus:bg-white focus:border-gray-500"
              value={maxPrice}
              placeholder="MAX: 500.0"
              max={500}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="my-4">
          <label className="block text-md font-semibold mb-2">Rating</label>
          <div className="flex justify-start gap-2">
            <p>{rating}</p>
            <input
              type="range"
              id="rating"
              min="0"
              max="5"
              step="1"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="grow"
            />
            <p>Max : 5</p>
          </div>
        </div>

        <div className="my-4">
          <label className="block text-md font-semibold mb-2">Color</label>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="appearance-none block w-full px-4 py-2 leading-tight bg-sea border rounded focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
      </div>
      <button
        className="px-4 py-2 font-semibold border rounded-sm bg-beige hover:bg-dark_beige"
        onClick={handleApplyFilter}
      >
        Apply
      </button>
      <button
        className="px-4 py-2 font-semibold border rounded-sm bg-beige hover:bg-dark_beige"
        onClick={handleResetFilter}
      >
        Reset
      </button>
    </div>
  );
}

export default FilterBox;

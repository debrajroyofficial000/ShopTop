import { useState } from "react";

function FilterBox() {
  const [filters, setFilters] = useState({
    price: { min: 0, max: 0 },
    rating: 1,
    color: "",
  });

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
              value={filters.price.min}
              placeholder="MIN: 0.0"
              min={0.0}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, min: e.target.value }))
              }
            />
            <input
              type="number"
              className="appearance-none block w-full px-4 py-2 leading-tight bg-sea border rounded focus:outline-none focus:bg-white focus:border-gray-500"
              value={filters.price.max}
              placeholder="MAX: 500.0"
              max={500}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, max: e.target.value }))
              }
            />
          </div>
        </div>

        <div className="my-4">
          <label className="block text-md font-semibold mb-2">Rating</label>
          <div>
            <input
              type="radio"
              name="rating"
              value="1"
              checked={filters.rating === "1"}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, rating: e.target.value }))
              }
            />
            <label>
              1 <i className="fa-solid fa-star" />
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="rating"
              value="2"
              checked={filters.rating === "2"}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, rating: e.target.value }))
              }
            />
            <label>
              2 <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="rating"
              value="3"
              checked={filters.rating === "3"}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, rating: e.target.value }))
              }
            />
            <label>
              3 <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="rating"
              value="4"
              checked={filters.rating === "4"}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, rating: e.target.value }))
              }
            />
            <label>
              4 <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </label>
          </div>
        </div>

        <div className="my-4">
          <label className="block text-md font-semibold mb-2">Color</label>
          <input
            type="text"
            value={filters.color}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                color: e.target.value,
              }))
            }
            className="appearance-none block w-full px-4 py-2 leading-tight bg-sea border rounded focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
      </div>
      <button className="px-4 py-2 font-semibold border rounded-sm bg-beige hover:bg-dark_beige">
        Apply
      </button>
    </div>
  );
}

export default FilterBox;

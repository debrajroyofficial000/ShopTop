import { useState } from "react";
import FilterInput from "./FilterInput";

function FilterBox() {
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [color, setColor] = useState("");
  return (
    <div className="col-span-full md:col-span-1">
      <h2 className="text-2xl font-semibold">Filters</h2>
      <div className=" border">
        <FilterInput
          labelTag="Price"
          type="number"
          inputValue={price}
          setterValue={(e) => setPrice(e.target.value)}
        />
        <FilterInput
          labelTag="Rating"
          type="number"
          inputValue={rating}
          setterValue={(e) => setRating(e.target.value)}
        />
        <FilterInput
          labelTag="Color"
          type="text"
          inputValue={color}
          setterValue={(e) => setColor(e.target.value)}
        />
      </div>
    </div>
  );
}

export default FilterBox;

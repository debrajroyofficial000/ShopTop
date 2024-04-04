import React from "react";

function FilterInput({ labelTag, type, inputValue, setterValue }) {
  return (
    <div className="my-4">
      <label className="mr-2 block text-md font-semibold mb-2 ">
        {labelTag}
      </label>
      <input
        type={type}
        className="appearance-none block w-full px-4 py-2 leading-tight bg-beige border border-beige rounded focus:outline-none focus:bg-white focus:border-gray-500"
        value={inputValue}
        onChange={setterValue}
      />
    </div>
  );
}

export default FilterInput;

import { useEffect, useState } from "react";
import useProductStore from "../store/useProductStore";

export default function SearchBox() {
  const [searched, setSearched] = useState("");
  const { footwears, getFilteredFootwears } = useProductStore();

  useEffect(() => {
    getFilteredFootwears(searched);
  }, [footwears, searched]);

  return (
    <div className="mb-4 col-span-full flex justify-center items-center gap-4">
      <span className="">
        <i className="fa-solid fa-magnifying-glass" />
      </span>
      <input
        type="text"
        value={searched}
        onChange={(e) => setSearched(e.target.value)}
        className="py-2 px-4 border rounded outline-none"
      />
    </div>
  );
}

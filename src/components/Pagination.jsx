function Pagination({ footwears, page, setPage }) {
  const totalPages = Math.ceil(footwears.length / 10);
  return (
    <div className="flex justify-center items-center">
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          className={`${
            page === i + 1 && "bg-slate-400"
          } py-2 px-4 text-md border rounded mx-1`}
          onClick={() => setPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;

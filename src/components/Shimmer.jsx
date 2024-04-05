const Shimmer = () => {
  return (
    <div className="border rounded p-4 md:rows-span-1 flex flex-col">
      <div className="grow flex flex-col">
        <div className="bg-gray-300 grow" />
        <h2 className="px-4 py-2 bg-gray-300 my-1" />
        <h3 className="px-4 py-2 bg-gray-300 my-1" />
      </div>
      <button className="px-4 py-2 cursor-pointer bg-beige block text-center" />
    </div>
  );
};

export default Shimmer;

import TrendingFootwear from "../components/TrendingFootwear";
import h1 from "../assets/h1.jpg";
import h2 from "../assets/h2.jpg";
import h3 from "../assets/h3.jpg";
import h5 from "../assets/h5.jpg";
function HomePage() {
  return (
    <div>
      <header className="bg-headerImage h-[300px] bg-center bg-no-repeat bg-cover flex justify-center items-center">
        <h1 className="text-2xl md:text-5xl lg:text-7xl font-extrabold text-white text-center ">
          Shop With Us <br />
          with our top brands
        </h1>
      </header>
      <section className="">
        <h2 className="text-xl lg:text-4xl font-semibold my-4">
          By Trending footwear
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <TrendingFootwear url={h1} text={"buy trending shoes"} />
          <TrendingFootwear url={h2} text={"20% off on your first buy"} />
          <TrendingFootwear url={h3} text={"collect seasonal collections"} />
          <TrendingFootwear url={h5} text={"your favorite brand"} />
        </div>
      </section>
    </div>
  );
}

export default HomePage;

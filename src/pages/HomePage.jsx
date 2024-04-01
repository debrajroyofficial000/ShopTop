// import TrendingFootwear from "../components/TrendingFootwear";
import { Suspense, lazy } from "react";
const TrendingFootwear = lazy(() => import("../components/TrendingFootwear"));
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
        <div className="md:flex-row flex justify-center items-center gap-8 flex-col">
          <Suspense fallback={<h3>Loading ....</h3>}>
            <TrendingFootwear url={h1} text={"buy trending shoes"} />
          </Suspense>
          <Suspense fallback={<h3>Loading ....</h3>}>
            <TrendingFootwear url={h2} text={"20% off on your first buy"} />
          </Suspense>
          <Suspense fallback={<h3>Loading ....</h3>}>
            <TrendingFootwear url={h3} text={"collect seasonal collections"} />
          </Suspense>
          <Suspense fallback={<h3>Loading ....</h3>}>
            <TrendingFootwear url={h5} text={"your favorite brand"} />
          </Suspense>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

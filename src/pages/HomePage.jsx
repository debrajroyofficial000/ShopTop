import HomepageCard from "../components/HomepageCard";
import cardImages from "../ImportCard";
const cardData = [
  "Buy trending shoes",
  "20% off on your first buy",
  "Collect seasonal collections",
  "Your favorite brand",
];
function HomePage() {
  const allCards = cardImages.map((url, index) => ({
    url,
    text: cardData[index],
  }));
  return (
    <div>
      <header className="bg-headerImage h-[300px] bg-center bg-no-repeat bg-cover flex justify-center items-center">
        <h1 className="text-2xl md:text-5xl lg:text-7xl font-extrabold text-white text-center ">
          Shop With Us <br />
          with our top brands
        </h1>
      </header>
      <section className="">
        <h2 className="text-xl lg:text-3xl font-semibold my-4">
          Discover Our Latest Footwear Selection
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {allCards.map((card, index) => (
            <HomepageCard key={index} {...card} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;

import CarCard from "@/components/CarCard";
import Customfilter from "@/components/Customfilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const allCars = await fetchCars();
  console.log(allCars);
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  //checking if the data is empty
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x max-width" id="discover">
        <div className="home__text-container">
          <h1 text-4xl font-extrabold>
            Car Catalougue
          </h1>
          <p>Expolre the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <Customfilter title="fuel" />

            <Customfilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text=black text-xl font-bold">Oops, no result</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}

import CarCard from "@/components/CarCard";
import Customfilter from "@/components/Customfilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { fetchCars } from "@/utils";
import { HomeProps } from "@/types";
import Image from "next/image";
import { fuels, yearsOfProduction } from "@/constants";
import { ShowMore } from "@/components/ShowMore";

export default async function Home({ searchParams }: HomeProps) {
  //this is where we are fetching cars
  //to fetch each car automatically, we need to fetch the params that were pushed thanks to the searh bar
  //server-sde rendering
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
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
            <Customfilter title="fuel" options={fuels} />

            <Customfilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            {/* We want to show more cars on the click of a button, Showmore component accepts props,  */}
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
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

import CarList from "@/components/CarSearchItem";
import Cars from "@/components/Cars";
import Landing from "@/components/Landing";
import ShowMore from "@/components/ShowMore";
import { fetchCars } from "@/lib/utils";

export default async function Home({ searchParams }: any) {
  const carlist = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    model: searchParams.model || "Corolla",
    year: searchParams.year || "",
    limit: searchParams.limit || 6,
    fuel: searchParams.fuel || "",
  });

  const isCarListEmpty =
    !Array.isArray(carlist) || carlist.length < 1 || !carlist;

  const carSet = Array.from(new Set(carlist));

  return (
    <main className="flex flex-col  w-full gap-8">
      <Landing />
      <CarList />
      {isCarListEmpty ? (
        <div className="text-2xl text-center py-8  flex justify-center">
          <p className=" p-4 rounded-large text-zinc-400 text-4xl">
            No cars to show !
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full bg-slate-6">
            {carSet?.map((cars, id) => (
              <Cars key={id} cars={cars} />
            ))}
          </div>
          <div className="flex items-center w-full justify-center">
            <ShowMore
              pageNumber={(searchParams.limit || 6) / 6}
              isNext={(searchParams.limit || 6) > carlist.length}
            />
          </div>
        </>
      )}
    </main>
  );
}

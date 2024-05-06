import Image from "next/image";
import InputBar from "@/components/InputBar";
import Filter from "@/components/Filter";

async function getCountiresData() {
  const data = await fetch("http://localhost:3000/api/countries");

  if (!data.ok) {
    throw new Error("failed to fetch data");
  }

  return data.json();
}

export default async function Home() {
  const data = await getCountiresData();
  return (
    <main>
      <div className="my-5 flex w-[80%] mx-auto justify-between">
        <InputBar />
        <Filter />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-1 w-[80%] gap-10 p-4 mx-auto ">
        {data?.countries?.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[rgba(43,57,69,1)] w-[100%] flex flex-col"
            >
              <div className="w-auto lg:h-[10rem] md:h-[12rem] overflow-hidden">
                <Image
                  alt={item.name}
                  width={500}
                  height={350}
                  src={item.flags.png}
                />
              </div>

              <p className="my-2 mt-5 px-2 font-bold text-lg mx-4">
                {item.name}
              </p>
              <p className="my-2 px-2  mx-4">Population: {item.population}</p>
              <p className="my-2 px-2  mx-4"> Region: {item.region}</p>
              <p className="my-2 px-2  mx-4 mb-5">Capital: {item.capital}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}

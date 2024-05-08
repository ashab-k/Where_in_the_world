import Image from "next/image";
import Link from "next/link";

export async function getCountryByName(name) {
  const response = await fetch(`http://localhost:3000/api/countries/${name}`);

  if (!response.ok) {
    throw new Error("failed to fetch data");
  }
  return response.json();
}

export default async function Page({ params }) {
  const data = await getCountryByName(params.country);
  return (
    <div className="my-[8vh] flex flex-col mx-[10%]">
      <div className="w-[80%]">
        {" "}
        <Link href="/" className="bg-[rgba(43,57,69,1)]  py-2 px-6  text-lg  ">
          Back
        </Link>
      </div>
      <div className="my-[7vh] py-5 flex  flex-col lg:flex-row md:flex-col sm:flex-col">
        <div>
          {" "}
          <Image
            src={data.country.flags.png}
            alt={data.country.name}
            width={800}
            height={300}
          />
        </div>

        <div className="flex flex-col w-[100%] ">
          {" "}
          <h2 className="font-extrabold text-[24px] mx-[10%] my-5 ">
            {data.country.name}
          </h2>
          <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col mx-[10%]  ">
            <ul className="w-[60%] mr-5">
              <li className="my-1 text-lg whitespace-nowrap">
                Native Name : {data.country.nativeName}
              </li>
              <li className="my-1 text-lg whitespace-nowrap">
                Population : {data.country.population}
              </li>
              <li className="my-1 text-lg">Region : {data.country.region}</li>
              <li className="my-1 text-lg">
                Sub Region : {data.country.subregion}
              </li>
              <li className="my-1 text-lg">Capital : {data.country.capital}</li>
            </ul>
            <ul className="">
              <li className="my-1 text-lg">
                Top Level Domain : {data.country.topLevelDomain}
              </li>
              <li className="my-1 text-lg">
                Currency : {data.country.currencies[0].name}
              </li>
              <li className="flex flex-row my-1 text-lg ">
                {" "}
                <p>
                  Languages :{" "}
                  {data.country.languages.map((item, index) => (
                    <span key={index}>
                      {item.name}
                      {index < data.country.languages.length - 1 && ", "}
                    </span>
                  ))}{" "}
                </p>
              </li>
            </ul>
          </div>
          <div className="mx-[10%] my-10">
            <p className="text-lg flex flex-row flex-wrap">
              {data.country.borders ? (
                <>
                  Borders :{" "}
                  {data.country.borders?.map((item, index) => (
                    <span
                      className=" bg-[rgba(43,57,69,1)] px-3 mx-2 py-1 text-sm mb-2 "
                      key={index}
                    >
                      {item}
                    </span>
                  ))}
                </>
              ) : (
                <></>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

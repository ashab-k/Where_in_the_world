import Image from "next/image";
import { resolve } from "styled-jsx/css";

async function getCountiresData() {
  const data = await fetch("http://localhost:3000/api/countries");

  if (!data.ok) {
    throw new Error("failed to fetch data");
  }

  return data.json();
}

export async function getCountryByName(name) {
  const response = await fetch(`http://localhost:3000/api/countries/${name}`);

  if (!response.ok) {
    throw new Error("failed to fetch data");
  }
  return response.json();
}

export default async function Page({ params }) {
  const data = await getCountryByName(params.country);
  return <div>{data.country.name}</div>;
}

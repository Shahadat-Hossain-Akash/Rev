import { manufacturerModels } from "@/constants/index";
import axios from "axios";
import toast from "react-hot-toast";

interface searchProps {
  manufacturer: string;
  model: string;
  year: number;
  limit: number;
  fuel: string;
}

export async function fetchCars({
  manufacturer,
  model,
  year,
  limit,
  fuel,
}: searchProps) {
  const headers = {
    "X-RapidAPI-Key": "1af65d08b2msh5943305d9e16cbcp16b2c2jsnab91b6916446",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  try {
    const res = await axios.get(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}&make=${manufacturer}&year=${year}&fuel_type=${fuel}&limit=${limit}`,
      { headers: headers }
    );
    const results = await res.data;

    return results;
  } catch (error) {
    toast.error(`${error}`);
  }
}

export function calculateCarRent(year: number, cityMileage: number) {
  const currentYear = new Date().getFullYear();
  const baseRent = 100; // Base rent price

  // Calculate depreciation based on the car's age
  const ageFactor = currentYear - year;
  const depreciation = ageFactor * 50;

  // Adjust rent based on city mileage
  let rent = baseRent - (cityMileage - 10) * 2;

  // Apply depreciation
  rent = rent - depreciation;

  // Ensure the rent doesn't go below a certain threshold
  if (rent < 50) {
    rent = 50;
  }

  return rent;
}

export function generateCarImage(cars: any, angle?: string, zoom?: string) {
  const url = new URL(
    "https://cdn.imagin.studio/getImage?customer=copyright-imaginstudio"
  );

  const { make, model, year } = cars;

  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model);
  url.searchParams.append("zoomType", zoom ? zoom : "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
  //url.searchParams.append("paintId", "pspc0323");
  //url.searchParams.append("modelVariant", "dx");

  return `${url}`;
}

export function getModelsByName(name: any) {
  const manufacturer = manufacturerModels.find(
    (manufacturer) => manufacturer.name === name
  );
  return manufacturer ? manufacturer.models : [];
}

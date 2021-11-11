import { Info } from "../Interface/interface";
export const fetchQuake = async () => {
  try {
    const response = await fetch(
      "https://cuaca-gempa-rest-api.vercel.app/quake"
    );
    const data: Info = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

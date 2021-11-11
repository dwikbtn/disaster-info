export const fetchQuake = async () => {
  try {
    const response = await fetch(
      "https://cuaca-gempa-rest-api.vercel.app/quake"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

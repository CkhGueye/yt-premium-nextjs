const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const customFetch = async (url) => {
  const data = await fetch(`${BASE_URL}/${url}&maxResults=48`, options);
  return data.json();
};

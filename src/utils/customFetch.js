const BASE_URL = "https://www.googleapis.com/youtube/v3";

const options = {
  maxResults: "48",
  key: process.env.API_KEY,
};

const params = new URLSearchParams(options);

export const customFetch = async (url) => {
  const data = await fetch(`${BASE_URL}/${url}&${params}`);
  return data.json();
};

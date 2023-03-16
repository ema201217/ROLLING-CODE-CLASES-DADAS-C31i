import axios from "axios";

const api_key = "S2hl5NsUHAODVNhfYdRK2go8lq7TNcUI";
const api_url_base = "https://api.giphy.com/v1/gifs/search";
  /* query params "q" y "api_key" */

  // const getGiphy = async () => {

  //   const response = await fetch(
  //     `${api_url_base}?api_key=${api_key}&q=fantasma&limit=12`);
  //   const data = await response.json();
  //   console.log(data);
  // };

  // getGiphy();

export const getGiphy = async (keyword) => {
  try {
    const { data } = await axios.get(api_url_base, {
      params: {
        api_key: api_key,
        q: keyword,
        limit: 12,
      },
    });
    
    return data.data
  } catch (error) {
    return error.response.data
  }
};
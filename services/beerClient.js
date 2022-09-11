import axios from "axios";

const getBeers = async (page = 1) => {
  let data = [];
  try {
    const response = await axios.get(
      `https://api.punkapi.com/v2/beers?page=${page}`
    );
    data = response.data;
  } catch (e) {
    console.error(`Error fetching beers ${e}`);
  } finally {
    return data;
  }
};

const getBeerByStyle = async (style, page = 1) => {
  let data = [];
  try {
    const response = await axios.get(
      `https://api.punkapi.com/v2/beers?beer_name=${style}&page=${page}`
    );
    data = response.data;
  } catch (error) {
    console.error(`Error fetching beers by style ${e}`);
  } finally {
    return data;
  }
};

export default {
  getBeers,
  getBeerByStyle,
};

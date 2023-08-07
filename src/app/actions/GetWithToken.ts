// utils/fetcherWithToken.js
import axios from 'axios';


const fetcherWithToken = async (url: string, token?: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error to be caught by useSWR
  }
};

export default fetcherWithToken;

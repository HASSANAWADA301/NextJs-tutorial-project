import axios from "axios";

export const getBestConfig = async () => {
  const response = await axios.get(`http://localhost:5000/api/bestPrices`);
  console.log("best price :", response.data);
  return response.data;
};

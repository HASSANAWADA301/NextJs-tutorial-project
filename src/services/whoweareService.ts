import axios from "axios";

export const getWhoWEAreConfig = async () => {
  const response = await axios.get(`http://localhost:5000/api/who-we-are`);
  console.log("Who We Are Section Data:",response.data);
  return response.data;
};

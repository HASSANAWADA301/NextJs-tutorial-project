import axios from "axios";

export const getAboutUsConfig = async () => {
  const response = await axios.get(`http://localhost:5000/api/about-us`);
  console.log("Received about us: ",response.data);
  return response.data;
};

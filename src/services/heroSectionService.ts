import axios from "axios";

export const getHeroConfig = async () => {
  
  const response = await axios.get(`http://localhost:5000/api/hero-section`);
  console.log("Hero section response:", response.data);
  return response.data;
};

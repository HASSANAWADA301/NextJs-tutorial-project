import axios from "axios";

export const getStates = async () => {
  const response = await axios.get(`http://localhost:5000/api/states`);
  console.log("Stats data:", response.data);
  return response.data; 
};

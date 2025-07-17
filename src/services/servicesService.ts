import axios from "axios";

export const getServicesConfig = async () => {
  const response = await axios.get(`http://localhost:5000/api/services`);
  return response.data;
};

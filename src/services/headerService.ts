import axios from "axios";



export const getHeaderConfig = async () => {
  const response = await axios.get(`http://localhost:5000/api/header-config`);
  console.log("Header Section :",response.data);
  return response.data;
};

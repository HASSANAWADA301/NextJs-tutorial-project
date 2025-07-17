import axios from "axios";

export const getProjects = async () => {
  const response = await axios.get(`http://localhost:5000/api/projects`);
  console.log("Projects data :",response.data);
  return response.data;  
};

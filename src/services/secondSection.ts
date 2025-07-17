import axios from "axios";

export const getSecondSectionConfig = async () => {
  const response = await axios.get("http://localhost:5000/api/second-section");
  return response.data;
};

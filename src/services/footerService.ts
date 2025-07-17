import axios from "axios";

export const getFooterConfig = async () => {
  const response = await axios.get("http://localhost:5000/api/footer");
  return response.data;
};

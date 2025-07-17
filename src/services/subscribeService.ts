import axios from "axios";

export const getSubscribeConfig = async () => {
  const response = await axios.get("http://localhost:5000/api/subscribe-section");
  console.log("Subscribe section data:", response.data);
  return response.data;
};

import axios from "axios";

export const getFeedbacks = async () => {
  const response = await axios.get("http://localhost:5000/api/feedbacks");
  console.log("Feedbacks data:", response.data);
  return response.data;
};

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSubscribeConfig = async () => {
  const response = await axios.get("http://localhost:5000/api/subscribe-section");
  return response.data;
};

export const useSubscribeSection = () =>
  useQuery({
    queryKey: ["subscribeSection"],
    queryFn: fetchSubscribeConfig,
  });

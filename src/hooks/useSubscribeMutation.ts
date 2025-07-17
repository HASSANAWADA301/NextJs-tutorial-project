import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const postSubscriber = async (email: string) => {
  const response = await axios.post("http://localhost:5000/api/subscribers", { email });
  return response.data;
};

export const useSubscribeMutation = () =>
  useMutation({
    mutationFn: postSubscriber,
  });

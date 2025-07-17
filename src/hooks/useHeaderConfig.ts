import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchHeaderConfig = async () => {
  const { data } = await axios.get("http://localhost:5000/api/header-config");
  return data;
};

export const useHeaderConfig = () =>
  useQuery({
    queryKey: ["headerConfig"],
    queryFn: fetchHeaderConfig,
  });

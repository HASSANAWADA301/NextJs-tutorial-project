"use client";

import { useGetStatsQuery } from "@/src/store/api/statsApi";
import StatsCardClient from "./StatsCardClient";

const StatsCard = () => {
  const { data, isLoading, error } = useGetStatsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading stats</div>;
  if (!data) return null;

  return <StatsCardClient data={data} />;
};

export default StatsCard;

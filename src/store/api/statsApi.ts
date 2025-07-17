// src/store/api/statsApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type State = {
  value: string;
  label: string;
};

type Translations = {
  [lang: string]: State[];
};

export const statsApi = createApi({
  reducerPath: "statsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  endpoints: (builder) => ({
    getStats: builder.query<{ translations: Translations }, void>({
      query: () => "states",
    }),
  }),
});

export const { useGetStatsQuery } = statsApi;
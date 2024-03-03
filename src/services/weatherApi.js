// src/services/weatherApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = '462691efff054d478a7140508242302';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.weatherapi.com/v1/' }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: (city) => `current.json?key=${apiKey}&q=${city}`,
    }),
    getForecast: builder.query({
      query: (city) => `forecast.json?key=${apiKey}&q=${city}`,
    }),
  }),
});

export const { useGetWeatherQuery, useGetForecastQuery } = api;

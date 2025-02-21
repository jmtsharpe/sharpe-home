import { useState, useEffect } from "react";

const WeatherLocations = {
  Zurich: {
    latitude: "47.3769",
    longitude: "8.5417",
  },
  Seattle: {
    latitude: "47.6062",
    longitude: "-122.3321",
  },
  "New York": {
    latitude: "40.7143",
    longitude: "-74.006",
  },
};

// const response = {
//   latitude: 40.710335,
//   longitude: -73.99309,
//   generationtime_ms: 0.041604042053222656,
//   utc_offset_seconds: 0,
//   timezone: "GMT",
//   timezone_abbreviation: "GMT",
//   elevation: 51.0,
//   current_units: {
//     time: "unixtime",
//     interval: "seconds",
//     temperature_2m: "°C",
//     is_day: "",
//     precipitation: "mm",
//     rain: "mm",
//     showers: "mm",
//     snowfall: "cm",
//     cloud_cover: "%",
//   },
//   current: {
//     time: 1736709300,
//     interval: 900,
//     temperature_2m: 6.0,
//     is_day: 1,
//     precipitation: 0.0,
//     rain: 0.0,
//     showers: 0.0,
//     snowfall: 0.0,
//     cloud_cover: 7,
//   },
// };

type Location = keyof typeof WeatherLocations;

type WeatherResponse = {
  current: {
    time: number;
    interval: number;
    temperature_2m: number;
    is_day: number;
    precipitation: number;
    rain: number;
    showers: number;
    snowfall: number;
    cloud_cover: number;
  };
};

const useWeather = () => {
  const [location, setLocation] = useState<Location>("Seattle");
  const [weather, setWeather] = useState<WeatherResponse>();

  const { latitude, longitude } = WeatherLocations[location];
  useEffect(() => {
    const getWeather = async (): Promise<any> => {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day,precipitation,rain,showers,snowfall,cloud_cover&forecast_days=1&format=json&timeformat=unixtime`,
      );
      const data = await response.json();
      setWeather(data);
    };
    getWeather();
  }, [location]);

  return { weather, setLocation };
};

export { useWeather, WeatherLocations };
export type { Location };

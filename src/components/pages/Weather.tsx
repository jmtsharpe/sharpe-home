import { useMemo } from "react";
import { Sky } from "../organisms/Sky";
import { Page } from "../organisms/Page";
import {
  useWeather,
  WeatherLocations,
  Location,
} from "../../providers/weather";

const Weather = () => {
  const { weather, setLocation } = useWeather();
  const { cloudsPerLayer, layers, cloudColor } = useMemo(
    () => ({
      cloudsPerLayer:
        Math.floor(Number(weather?.current?.cloud_cover) / 20) || 0,
      layers: Math.ceil(Number(weather?.current?.cloud_cover) / 20) || 0,
      cloudColor: [
        { fill: "#fff", stroke: "#eee" },
        { fill: "#eee", stroke: "#ddd" },
        { fill: "#ddd", stroke: "#ccc" },
        { fill: "#ccc", stroke: "#bbb" },
        { fill: "#bbb", stroke: "#aaa" },
      ],
    }),
    [weather],
  );
  return (
    <Page title="Weather" headerColor="white" headerTextColor="black">
      <>{JSON.stringify(weather)}</>
      {Object.keys(WeatherLocations).map((location) => {
        return (
          <button onClick={() => setLocation(location as Location)}>
            {location}
          </button>
        );
      })}
      <Sky
        cloudsPerLayer={cloudsPerLayer}
        layers={layers}
        cloudColor={cloudColor}
      />
    </Page>
  );
};

export { Weather };

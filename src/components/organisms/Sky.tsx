import styled from "@emotion/styled/macro";
import { useMemo } from "react";
import { CloudLayer } from "./CloudLayer";

type SkyProps = {
  cloudsPerLayer?: number;
  layers?: number;
  cloudColor?: { fill: string; stroke: string }[];
};

const CloudsContainer = styled.div`
  background: lightblue;
  width: 100%;
  position: relative;
  height: 100%;
  overflow: hidden;
`;

const SkyContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const Sky = ({
  cloudsPerLayer = 2,
  layers = 1,
  cloudColor = [{ fill: "white", stroke: "white" }],
}: SkyProps) => {
  const clouds = useMemo(
    () =>
      Array(layers)
        .fill(1)
        .map((item, index) => {
          debugger;
          return (
            <CloudLayer
              layer={index}
              zIndex={layers - index}
              total={cloudsPerLayer}
              cloudSize={{
                height: 400 * ((100 - index * 10) / 100),
                width: 600 * ((100 - index * 10) / 100),
              }}
              color={cloudColor[index]}
            />
          );
        }),
    [cloudsPerLayer, layers],
  );
  return (
    <SkyContainer>
      <CloudsContainer>{clouds}</CloudsContainer>
    </SkyContainer>
  );
};
export { Sky };

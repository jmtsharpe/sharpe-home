import styled from "@emotion/styled/macro";
import { Cloud } from "../molecules/Cloud";
import { CloudLayer } from "./CloudLayer";

type SkyProps = {
  cloudsPerLayer?: number;
  layers?: number;
  cloudColor?: string[];
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
  cloudColor = ["white"],
}: SkyProps) => (
  <SkyContainer>
    <CloudsContainer>
      {Array(layers)
        .fill(1)
        .map((item, index) => {
          return (
            <CloudLayer
              layer={index}
              zIndex={layers - index}
              total={cloudsPerLayer}
              cloudSize={{
                height: 400 / (index + 1),
                width: 600 / (index + 1),
              }}
              color={cloudColor[index] || "white"}
            />
          );
        })}
    </CloudsContainer>
  </SkyContainer>
);

export { Sky };

import styled from "@emotion/styled/macro";
import { Cloud } from "../molecules/Cloud";
import { randomIntFromInterval } from "../../utils/math";

type CloudLayerProps = {
  color: string;
  cloudSize: { height: number; width: number };
  total: number;
  zIndex: number;
  layer: number;
};

const CloudContainer = styled.div`
  position: absolute;
`;

const CloudsContainer = styled.div`
  background: lightblue;
`;
const CloudLayer = ({
  cloudSize,
  color = "white",
  total = 5,
  zIndex,
  layer,
}: CloudLayerProps) => (
  <CloudsContainer>
    {Array(total)
      .fill(1)
      .map(() => {
        const shift = layer * 10;
        const top = `${randomIntFromInterval(10 + shift, -30 + shift)}%`;
        const left = `${randomIntFromInterval(80, -20)}%`;
        return (
          <CloudContainer
            style={{
              top,
              left,
              height: cloudSize.height,
              width: cloudSize.width,
              zIndex,
            }}
          >
            <Cloud fill={color} cloudSize={cloudSize} />
          </CloudContainer>
        );
      })}
  </CloudsContainer>
);

export { CloudLayer };

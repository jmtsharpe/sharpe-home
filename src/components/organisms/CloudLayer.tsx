import styled from "@emotion/styled/macro";
import { Cloud } from "../molecules/Cloud";
import { randomIntFromInterval } from "../../utils/math";

type CloudLayerProps = {
  color?: { fill: string; stroke: string };
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
  color = { fill: "white", stroke: "white" },
  total = 5,
  zIndex,
  layer,
}: CloudLayerProps) => (
  <CloudsContainer>
    {Array(total * (layer + 1))
      .fill(1)
      .map(() => {
        const shift = layer * 5;
        const top = `${randomIntFromInterval(shift, -20 + shift)}%`;
        const left = `${randomIntFromInterval(80, -40)}%`;
        const { fill, stroke } = color;
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
            <Cloud
              fill={fill}
              stroke={{ color: stroke, width: 1 }}
              cloudSize={cloudSize}
            />
          </CloudContainer>
        );
      })}
  </CloudsContainer>
);

export { CloudLayer };

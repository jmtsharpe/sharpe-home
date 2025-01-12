import { useMemo } from "react";
import styled from "@emotion/styled/macro";
import { CloudPuff } from "../atoms/CloudPuff";
import { randomIntFromInterval } from "../../utils/math";

type PuffDimensionsArgs = {
  x: number;
  y: number;
  xmax: number;
  ymax: number;
  maxSize: number;
  minSize: number;
};

const getPuffDimensions = ({
  x,
  y,
  xmax,
  ymax,
  maxSize,
  minSize,
}: PuffDimensionsArgs) => {
  const cx = randomIntFromInterval(x, xmax);
  const cy = randomIntFromInterval(y, ymax);
  const r = randomIntFromInterval(minSize, maxSize);
  return { cx, cy, r };
};

const StyledCloud = styled.div`
  position: absolute;
`;

type CloudProps = {
  cloudSize?: { height: number; width: number };
  fill?: string;
  lining?: { width: number; color: string };
  puffs?: number;
};

const Cloud = ({
  cloudSize = { height: 400, width: 600 },
  fill = "white",
  lining,
  puffs = 5,
}: CloudProps) => {
  const { height, width } = cloudSize;
  const getPuffs = useMemo(() => {
    const puffValues: PuffDimensionsArgs = {
      ymax: height - height / 4,
      xmax: (width * 3) / 4,
      y: height / 4,
      x: width / 4,
      maxSize: (height / 2) * 0.5,
      minSize: (height / 2) * 0.1,
    };
    const newPuffs = [];
    for (var i = 0; i < puffs; i++) {
      const values = getPuffDimensions(puffValues);

      newPuffs.push(<CloudPuff {...values} fill={fill} lining={lining} />);
    }
    return newPuffs;
  }, []);
  return (
    <StyledCloud>
      <svg
        height={height}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        fill={fill || "white"}
      >
        {lining
          ? [
              <circle
                cx={width / 3}
                cy={height / 2}
                r={height / 4 + lining.width}
                fill={lining.color}
              />,
              <circle
                cx={width / 2}
                cy={height / 2}
                r={height / 4 + lining.width}
                fill={lining.color}
              />,
              <circle
                cx={(width * 2) / 3}
                cy={height / 2}
                r={height / 4 + lining.width}
                fill={lining.color}
              />,
            ]
          : []}
        {getPuffs}
        <circle cx={width / 3} cy={height / 2} r={height / 4} />
        <circle cx={width / 2} cy={height / 2} r={height / 4} />
        <circle cx={(width * 2) / 3} cy={height / 2} r={height / 4} />
      </svg>
    </StyledCloud>
  );
};

export { Cloud };

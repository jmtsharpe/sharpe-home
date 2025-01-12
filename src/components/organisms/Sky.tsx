import styled from "@emotion/styled/macro";
import { Cloud } from "../molecules/Cloud";

type SkyProps = {
  total?: number;
};

const CloudsContainer = styled.div`
  background: lightblue;
  width: 100%;
  position: relative;
  height: 100%;
  overflow: hidden;
`;

const SkyContainer = styled.div`
  width: 100vh;
  height: 100vh;
`;

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const CloudContainer = styled.div`
  position: absolute;
`;

const Sky = ({ total = 20 }: SkyProps) => (
  <SkyContainer>
    <CloudsContainer>
      {Array(total)
        .fill(1)
        .map(() => {
          const top = `${randomIntFromInterval(100, -50)}%`;
          const left = `${randomIntFromInterval(100, -50)}%`;
          return (
            <CloudContainer style={{ top, left }}>
              <Cloud />
            </CloudContainer>
          );
        })}
    </CloudsContainer>
  </SkyContainer>
);

export { Sky };

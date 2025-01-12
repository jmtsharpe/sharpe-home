import { Sky } from "../organisms/Sky";

const Weather = () => (
  <>
    <Sky
      cloudsPerLayer={20}
      layers={3}
      cloudColor={["#fff", "#eee", "#ddd"]}
    />
  </>
);

export { Weather };

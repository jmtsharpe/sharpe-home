import { RouterProvider } from "react-router-dom";
import styled from "@emotion/styled/macro";
import "./App.css";
import { Footer } from "./components/organisms/Footer";
import { router } from "./Router";

function App() {
  return (
    <Container>
      <RouterProvider router={router} />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 1em;
`;

export default App;

import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div``;

import styled from "styled-components";
import Category from "../components/Category";
import Map from "../components/Map";
import RegistonMain from "../components/RegistonMain";
import Vedio from "../components/Vedio";

function HomePage() {
  return (
    <Wrapper>
      <RegistonMain />
      <Category />
      <Vedio />
      <Map />
    </Wrapper>
  );
}

export default HomePage;

const Wrapper = styled.div``;

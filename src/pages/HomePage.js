import styled from "styled-components";
import Category from "../components/Category";
import RegistonMain from "../components/RegistonMain";

function HomePage() {
  return (
    <Wrapper>
      <RegistonMain />
      <Category />
    </Wrapper>
  );
}

export default HomePage;

const Wrapper = styled.div``;

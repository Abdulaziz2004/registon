import styled from "styled-components";

function Categoris({ id, img, price, title, calendar, time }) {
  return (
    <Wrapper>
      <p>{price}</p>
      <img src={img} alt="" />
    </Wrapper>
  );
}

export default Categoris;

const Wrapper = styled.div``;

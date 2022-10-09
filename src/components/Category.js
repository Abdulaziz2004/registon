import styled from "styled-components";
import line from "../assets/icon/nav-bottom.svg";
import Categoris from "./Categoris";
import { categoryData } from "./Data";

function Category() {
  return (
    <Wrapper>
      <div className="container">
        <div className="title">
          <div className="div-line">
            <img src={line} alt="" />
            <div className="line"></div>
          </div>
          <h3>TAVSIYA ETILGANLAR</h3>
          <div className="div-line">
            <div className="line"></div>
            <img src={line} alt="" />
          </div>
        </div>
        <div className="category">
          {categoryData.map(({ id, img, title, price, calendar, time }) => (
            <Categoris
              id={id}
              img={img}
              title={title}
              price={price}
              calendar={calendar}
              time={time}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default Category;

const Wrapper = styled.div`
  .container {
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      margin-top: 156px;

      h3 {
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 64px;
        color: #fab549;
      }

      .div-line {
        display: flex;
        align-items: center;
        gap: 24px;

        .line {
          width: 250px;
          height: 1px;
          background-color: #fab549;
        }
      }
    }
  }
`;

import styled from "styled-components";
import line from "../assets/icon/nav-bottom.svg";

function Vedio() {
  return (
    <Wrapper>
      <div className="title">
        <div className="div-line">
          <img src={line} alt="" />
          <div className="line"></div>
        </div>
        <h3>SHAXARLARGA TASHRIF BUYURING</h3>
        <div className="div-line">
          <div className="line"></div>
          <img src={line} alt="" />
        </div>
      </div>

      <div className="vedio">
        <iframe
          width="100%"
          height="566"
          src="https://www.youtube.com/embed/VuRol8-pwD0"
          title="Registon maydoni haqida qiziqarli ma'lumotlar"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </Wrapper>
  );
}

export default Vedio;

const Wrapper = styled.div`
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 132px;

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

  .vedio {
    margin-top: 39px;
  }

  @media (max-width: 1520px) {
    .title {
      h3 {
        font-size: 38px;
      }
    }
  }

  @media (max-width: 1360px) {
    .title {
      h3 {
        font-size: 30px;
      }

      .div-line {
        display: none;
      }
    }
  }

  @media (max-width: 600px) {
    .title {
      h3 {
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 500px) {
    .title {
      margin-top: 40px;
      h3 {
        font-size: 22px;
      }
    }
  }
`;

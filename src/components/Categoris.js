import styled from "styled-components";
import calen from "../assets/icon/calendar.svg";
import timeImg from "../assets/icon/time.svg";

function Categoris({ id, img, price, title, calendar, time }) {
  return (
    <Wrapper>
      <img src={img} alt="" />

      <div className="titlee">
        <div className="title-price">
          <h3>{title}</h3>
          <p>$ {price}</p>
        </div>

        <div className="calendar-time">
          <div className="title-calendar">
            <img src={calen} alt="" />
            <p>{calendar}</p>
          </div>

          <div className="title-time">
            <img src={timeImg} alt="" />
            <p>{time}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Categoris;

const Wrapper = styled.div`
  .titlee {
    border-radius: 12px;
    background-color: #fff;
    padding: 24px 16px 16px 14px;

    .title-price {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h3 {
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 24px;
        color: #1a3771;
      }

      p {
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 24px;
        color: #000000;
      }
    }

    .calendar-time {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 18px;

      .title-calendar {
        display: flex;
        align-items: center;
        gap: 9px;

        p {
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: -0.02em;
          color: #000000;
          margin-top: 5px;
        }
      }

      .title-time {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;

        p {
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: -0.02em;
          color: #000000;
          margin-top: 5px;
        }
      }
    }
  }
`;

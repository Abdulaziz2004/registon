import styled from "styled-components";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";

function RoadMap() {
  const [value, setValue] = useState();
  return (
    <Wrapper>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="100%"
            height="448px"
            class="gmap_iframe"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=toshkent ganga&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>

      <div className="linear-grident"></div>
      <div className="contact">
        <h2>Raqamingizni yozing Biz sizga qo’ng’iroq qilamiz!</h2>

        <PhoneInput
          width="408px"
          height="72px"
          className="phoneInput"
          placeholder="Enter phone number"
          value={value}
          onChange={setValue}
        />
      </div>
    </Wrapper>
  );
}

export default RoadMap;

const Wrapper = styled.div`
  margin-top: 122px;
  position: relative;
  .mapouter {
    position: relative;
    text-align: right;
  }
  .gmap_canvas {
    overflow: hidden;
    background: none !important;
  }

  .linear-grident {
    /* position: relative; */
    width: 100%;
    height: 448px;
    background: linear-gradient(
      90deg,
      #fab549 30.17%,
      rgba(220, 181, 73, 0) 75.94%
    );
    position: absolute;
    top: 0;
    pointer-events: none;
  }

  .contact {
    position: absolute;
    top: 94px;
    margin-left: 252px;

    h2 {
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 56px;
      color: #203f7d;
    }

    .PhoneInput {
      margin-top: 53px;
      width: 408px;
      input {
        height: 72px;
        background: #ffedd2;
        opacity: 0.5;
        filter: blur(0.5px);
        border-radius: 32px;
        border: none;
        outline: none;
        padding: 0 0 0 20px;

        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #000000;

        opacity: 0.8;
      }
    }
  }

  @media (max-width: 1100px) {
    .contact {
      top: 94px;
      margin-left: 52px;

      h2 {
        font-size: 30px;
      }

      .PhoneInput {
        margin-top: 20px;
      }
    }
  }

  @media (max-width: 700px) {
    .contact {
      top: 32px;
      margin-left: 52px;

      h2 {
        font-size: 20px;
      }

      .PhoneInput {
        margin-top: 20px;
        width: 327px;
        height: 64px;
      }
    }

    .linear-grident {
      width: 100%;
      height: 248px;
      opacity: 0.7;
      background: linear-gradient(
        90deg,
        #fab549 100%,
        rgba(220, 181, 73, 220) 75.94%
      );
    }
  }

  @media (max-width: 500px) {
    .contact {
      text-align: center;
      h2 {
        font-size: 1rem;
      }

      .PhoneInput {
        margin-left: 0;
        margin-top: 10px;
        height: 64px;
        width: 100%;
      }
    }
  }

  @media (max-width: 450px) {
    .contact {
      h2 {
        font-size: 1rem;
      }

      .PhoneInput {
        margin-left: 0;
        margin-top: 10px;
        width: 100%;
        height: 30px;
      }
    }
  }
`;

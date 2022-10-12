import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import insta from "../assets/icon/insta.svg";
import youtube from "../assets/icon/youtube.svg";
import meta from "../assets/icon/meta.svg";
import ln from "../assets/icon/linkeddin.svg";

import {
  faMapMarker,
  faPhone,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid">
          <div className="flex">
            <h3>
              Sarbon Trans <br /> Tour1
            </h3>
            <p>
              Biz 2011-yildan beri ishonchli, innovatsion kompaniyalardan biri
              ekanligimizdan faxrlanamiz. Biz sayyohlik sanoatining turli
              sektorlaridan sayyohlik sohasida yuqori tajribaga ega
              sayohatchilar guruhimiz. Qatti vaqt ichida eng yuqori xizmat
              sifati bizning asosiy maqsadimizdir. Mehmonlar baxti = jamoamiz
              baxti.
            </p>
          </div>

          <div className="flex2">
            <h3>Havolalar</h3>
            <ul>
              <a href="#">Uy</a>
              <a href="#">Ekskursiyalar</a>
              <a href="#">Galereya</a>
              <a href="#">Aloqa</a>
            </ul>
          </div>

          <div className="flex2">
            <h3>Biz bilan bog’lanish</h3>

            <ul>
              <a href="#">
                <FontAwesomeIcon icon={faMapMarker} /> Toshkent, Ganga, Aliyev
                ko’cha 7-uy
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faPhone} /> +998 90 010-85-10
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faMessage} /> Sarbontrans@gmail.com
              </a>
            </ul>
          </div>

          <div className="flex2">
            <h3>Biz bilan bog’lanish</h3>
            <div className="networking">
              <img src={insta} />
              <img src={youtube} alt="" />
              <img src={meta} alt="" />
              <img src={ln} alt="" />
            </div>
          </div>
        </div>

        <div className="copy-right">
          <p>
            Mualliflik huquqi © 2022 Sarbon trans Tour MChJ Barcha huquqlar
            himoyalangan
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  .container {
    padding: 57px 176px 23px 108px;
    background: #fef7ec;

    .grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);

      .flex {
        grid-column: 1/ 3;

        h3 {
          font-style: normal;
          font-weight: 600;
          font-size: 28px;
          line-height: 40px;
          color: #fab549;
        }

        p {
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 24px;
          color: #203f7d;
          margin-top: 50px;
        }
      }

      .flex2 {
        margin: 0 auto;
        h3 {
          font-style: normal;
          font-weight: 600;
          font-size: 28px;
          line-height: 24px;
          color: #203f7d;
        }

        ul {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 32px;

          a {
            text-decoration: none;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            color: #203f7d;

            display: flex;
            align-items: center;
            gap: 21px;

            &:hover {
              text-decoration: underline;
            }
          }
        }

        .networking {
          margin-top: 32px;
          display: flex;
          align-items: center;
          gap: 32px;

          img {
            width: 20px;
            height: 20px;
            cursor: pointer;
          }
        }
      }
    }

    .copy-right {
      p {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 40px;
        color: #000000;
        margin-top: 79px;
      }
    }
  }

  @media (max-width: 1550px) {
    .container {
      .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
      }
    }
  }
  @media (max-width: 1050px) {
    .container {
      .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;

        /* .flex{
          grid-template-columns: ;
        } */
      }
    }
  }

  @media (max-width: 800px) {
    .container {
      padding: 57px 20px 23px 20px;
      .grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 40px;

        .flex {
          grid-column: 1 / 1;
        }

        .flex2 {
          margin: 0;
        }
      }
    }
  }

  @media (max-width: 450px) {
    .container {
      padding: 57px 20px 23px 20px;
    }
  }
`;

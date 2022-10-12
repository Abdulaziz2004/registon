import styled from "styled-components";
import svg from "../assets/icon/nav-bottom.svg";
import card1 from "../assets/img/wallpaper1.png";
import card2 from "../assets/img/wallpaper2.png";
import card3 from "../assets/img/wallpaper4.png";
import card4 from "../assets/img/wallpaper5.png";

function Map() {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid">
          <div className="flex-bg">
            <div className="title">
              <img src={svg} alt="" />
              <h2>Nega biz? </h2>
            </div>
            <h3>
              Sarbon Trans Tour —O‘zbegistondagi toʻliq xizmat koʻrsatuvchi
              turizm brendi.
            </h3>
            <p>
              Biz 2011-yildan beri ishonchli, innovatsion kompaniyalardan biri
              ekanligimizdan faxrlanamiz. Biz sayyohlik sanoatining turli
              sektorlaridan sayyohlik sohasida yuqori tajribaga ega
              sayohatchilar guruhimiz. Qattiq vaqt ichida eng yuqori xizmat
              sifati bizning asosiy maqsadimizdir. Mehmonlar baxti = jamoamiz
              baxti. Kompaniya sifatida biz FIT, guruh va biznes
              sayohatchilarga, tabiatni sevuvchilarga va hokazolarga to'liq
              xizmat ko'rsatamiz. Siz barcha turdagi quruqlik xizmatlarini
              so'rashingiz mumkin: transport, turar joy, gid xizmatlari,
              ovqatlanish, tadbirlarni boshqarish, master-klass, tabiatga
              sayohat xizmatlari, viza va h.k.{" "}
            </p>
            <button>Biz bilan bog’lanish</button>
          </div>
          <div className="flex">
            <div className="wallpaper">
              <div className="wallpaper-one">
                <img style={{ width: "100%" }} src={card1} alt="" />
                <h3>Galareyaga o‘tish</h3>
              </div>
              <div className="wallpaper-one">
                <img src={card2} alt="" />
                <h3>Galareyaga o‘tish</h3>
              </div>
              <div className="wallpaper-thire">
                <div className="wallpaper-two" style={{ width: "100%" }}>
                  <img src={card3} alt="" />
                  <h3>Galareyaga o‘tish</h3>
                </div>
                <div className="wallpaper-two" style={{ width: "100%" }}>
                  <img style={{ width: "100%" }} src={card4} alt="" />
                  <h3>Galareyaga o‘tish</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Map;

const Wrapper = styled.div`
  .container {
    padding: 156px 152px 0 60px;
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      .flex-bg {
        padding: 0 0 0 90px;
        .title {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 116px;

          h2 {
            font-style: normal;
            font-weight: 700;
            font-size: 48px;
            line-height: 64px;
            color: #fab549;
          }
        }

        h3 {
          font-style: normal;
          font-weight: 600;
          font-size: 28px;
          line-height: 40px;
          color: #203f7d;
          margin-top: 37px;
        }

        p {
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 40px;
          color: #203f7d;
          margin-top: 13px;
        }

        button {
          width: 287px;
          height: 56px;
          background: rgba(250, 181, 73, 0.8);
          border-radius: 32px;
          border: none;
          outline: none;
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
          color: #ffffff;
          cursor: pointer;
          margin-top: 29px;
        }
      }

      .flex {
        .wallpaper {
          display: flex;
          flex-direction: column;
          gap: 40px;

          img {
            width: 100%;
            transition: all 0.2s ease;

            &:hover {
              cursor: pointer;
              opacity: 0.3;
            }
          }

          .wallpaper-one {
            position: relative;
            h3 {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              transition: all 1s ease;

              font-style: normal;
              font-weight: 400;
              font-size: 28px;
              line-height: 24px;
              color: #203f7d;
              opacity: 0;
              cursor: pointer;
            }

            &:hover {
              h3 {
                opacity: 1;
              }
            }
          }

          .wallpaper-thire {
            display: flex;
            gap: 24px;

            .wallpaper-two {
              position: relative;
              h3 {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                transition: all 1s ease;

                font-style: normal;
                font-weight: 400;
                font-size: 28px;
                line-height: 24px;
                color: #203f7d;
                opacity: 0;
                cursor: pointer;
              }

              &:hover {
                h3 {
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 1550px) {
    .container {
      padding: 156px 50px 0 50px;
      .grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 50px;

        .flex-bg {
          button {
            margin-top: 50px;
          }
        }
      }
    }
  }

  @media (max-width: 1250px) {
    .container {
      padding: 146px 30px 0 30px;
    }
  }

  @media (max-width: 600px) {
    .container {
      .grid {
        .flex-bg {
          padding: 0;
        }
      }
    }
  }

  @media (max-width: 600px) {
    .container {
      .grid {
        .flex-bg {
          .title {
            margin-top: 1rem;
            h2 {
              font-size: 2rem;
            }
          }
        }
      }
    }
  }

  @media (max-width: 450px) {
    .container {
      padding: 146px 20px 0 20px;
    }
  }
`;

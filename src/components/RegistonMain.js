import { Link } from "react-router-dom";
import styled from "styled-components";
import nav from "../assets/icon/nav-bottom.svg";

function RegistonMain() {
  return (
    <Wrapper>
      <div className="container-main">
        <div className="title">
          <h1>
            O‘zbekiston <br /> <span>bo‘ylab sayohat</span>
          </h1>
          <h4>Sizning erkinligingiz ramzi</h4>
          <button>Barcha turlar</button>
          <div className="bottom-tag">
            <div className="grid">
              <div>
                <img src={nav} alt="" />
              </div>
              <div>
                <Link to="#">Biz bilan kashf qiling</Link>
              </div>
            </div>

            <div className="grid">
              <div>
                <img src={nav} alt="" />
              </div>
              <div>
                <Link to="#">7/24 qo‘llab quvvatlash</Link>
              </div>
            </div>

            <div className="grid">
              <div>
                <img src={nav} alt="" />
              </div>
              <div>
                <Link to="#">O‘zingizni sayohatingizni yarating</Link>
              </div>
            </div>

            <div className="grid">
              <div>
                <img src={nav} alt="" />
              </div>
              <div>
                <Link to="#">Onlayn band qilish</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default RegistonMain;

const Wrapper = styled.div`
  .container-main {
    position: relative;
  }
  .title {
    /* margin-top: 268px; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -38%);
    text-align: center;
    width: 100%;

    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 151px;
      line-height: 151px;
      color: #fff;

      span {
        color: #fab549;
      }
    }
    h4 {
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 24px;
      letter-spacing: 0.205em;
      color: #ffffff;
      opacity: 0.6;
    }

    button {
      width: 264px;
      height: 56px;
      background: rgba(250, 181, 73, 0.8);
      border-radius: 32px;
      cursor: pointer;
      border: none;
      outline: none;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      color: #fff;
      margin-top: 86px;
    }
    .bottom-tag {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 161px;
      margin-top: 134px;

      .grid {
        display: flex;
        align-items: center;
        gap: 16px;

        a {
          text-decoration: none;
          color: #fff;
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  @media (max-width: 1520px) {
    .container-main {
      .title {
        h1 {
          font-size: 121px;
        }
      }
    }
  }

  @media (max-width: 1300px) {
    .container-main {
      .title {
        h1 {
          font-size: 85px;
          line-height: 85px;
        }
      }

      .bottom-tag {
        padding: 0 130px;
        display: flex;
        gap: 30px;
        margin-top: 0;
      }
    }
  }

  @media (max-width: 1440px) {
    .container-main {
      .bottom-tag {
        padding: 0 100px;
        display: flex;
        gap: 30px;
        margin-top: 50px;
      }
    }
  }

  @media (max-width: 1400px) {
    .container-main {
      .bottom-tag {
        padding: 0 80px;
        margin-top: 50px;
      }
    }
  }

  @media (max-width: 1360px) {
    .container-main {
      .title {
        h1 {
          font-size: 100px;
          line-height: 100px;
        }
      }
      .bottom-tag {
        padding: 0 50px;
        margin-top: 50px;
      }
    }
  }

  @media (max-width: 1300px) {
    .container-main {
      .bottom-tag {
        padding: 0 20px;
        margin-top: 50px;
      }
    }
  }

  @media (max-width: 1100px) {
    .container-main {
      .bottom-tag {
        /* padding: 0 20px;
        margin-top: 50px; */

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

        .grid {
          margin: 0 auto;
        }
      }
    }
  }

  @media (max-width: 800px) {
    .container-main {
      .title {
        h1 {
          font-size: 60px;
          line-height: 60px;
        }
        h4 {
          font-size: 20px;
          margin-top: 10px;
        }

        button {
          margin-top: 25px;
        }
      }

      .bottom-tag {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 10px;
        width: 450px;
        margin: 0 auto;
        margin-top: 25px;

        .grid {
          margin: 15px 0;
          text-align: center;
        }
      }
    }
  }

  @media (max-width: 450px) {
    .container-main {
      .title {
        h1 {
          font-size: 45px;
          line-height: 50px;
        }

        h4 {
          font-size: 18px;
          margin-top: 10px;
        }
      }

      .bottom-tag {
        width: 100%;

        .grid {
          margin: 4px 0;
          a {
            font-size: 1rem;
            line-height: 1rem;
          }
        }
      }
    }
  }
`;

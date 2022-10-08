import { Link } from "react-router-dom";
import styled from "styled-components";
import Gloob from "../assets/icon/globe.svg";

function Navbar() {
  return (
    <Wrapper>
      <div className="nav">
        <div className="nav-link">
          <Link path="/">Uy</Link>
          <Link path="#">Yo’nalishlar</Link>
          <Link path="#">Xizmatlarimiz</Link>
          <Link path="#">Galareya</Link>
          <Link path="#">Aloqa</Link>
        </div>

        <div className="language">
          <div>
            <img src={Gloob} alt="" />
          </div>
          <select style={{ backgroundImage: "url{Gloob}" }}>
            <option>Uzb</option>
            <option>Eng</option>
            <option>Rus</option>
          </select>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;

const Wrapper = styled.div`
  padding: 20px 100px 28px 372px;
  background: rgba(43, 44, 53, 0.4);
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nav-link {
      display: flex;
      align-items: center;
      gap: 56px;
      a {
        text-decoration: none;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #fff;
      }
    }

    .language {
      display: flex;
      /* align-items: center; */
      gap: 5px;
      select {
        border: none;
        color: #fff;
        background-color: transparent;
        outline: none;
        option {
          color: #000;
        }
      }
    }
  }
`;

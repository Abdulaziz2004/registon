import styled from "styled-components";
import svg from "../assets/icon/nav-bottom.svg";

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
          <div className="flex">sasasa</div>
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
    }
  }
`;

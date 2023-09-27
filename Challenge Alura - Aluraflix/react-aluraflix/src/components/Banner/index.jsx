import banner from "../../assets/HeaderBanner.jpg";
import styled from "styled-components";

const ContentImage = styled.div`
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  //background-position-y: -180px;
  //margin-top: -100px;
  height: 100%;
  width: 100%;
  //opacity: 50%;
  position: absolute;
  top: 0;
  left: 0;
  filter: brightness(0.5); //lo mismo que opacity
  z-index: -1;
`;

export const Banner = () => {
  return <ContentImage></ContentImage>;
};

const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  color: #f5f5f5;
  gap: 25px;
  width: 78%;
  /*margin-top: 10%;
  margin-left: 2%;*/
  @media (max-width: 435px) {
    
  }
  div {
    h1 {
      margin: 0;
      font-size: 60px;
      background: #6bd1ff;
      border: none;
      border-radius: 3px;
      padding: 5px 13px;
      display: inline-block;
      @media (max-width: 940px) {
        font-size: 50px;
      }
      @media (max-width: 435px) {
        font-size: 35px;
      }
      @media (max-width: 320px) {
        font-size: 40px;
      }
    }
    @media (max-width: 320px) {
      text-align: start;
      order: 1;
    }
  }

  h4 {
    font-size: 40px;
    margin: 0;
    font-weight: 100;
    @media (max-width: 840px) {
      font-size: 35px;
    }
    @media (max-width: 435px) {
        font-size: 32px;
      }
    @media (max-width: 320px) {
      font-size: 30px;
      margin-bottom: 20px;
    }
  }
  p {
    font-size: 15px;
    margin-top: 10px;
    font-weight: 100;
    text-align: justify;
    @media (max-width: 320px) {
      display: none;
    }
  }
  
`;

export const BannerText = () => {
  return (
    <ContentText>
      <div>
        <h1>Front End</h1>
      </div>
      <h4>Challengue React</h4>
      <p>
        Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás
        comprometerte en la resolución de un problema para poder aplicar todos
        los conocimientos adquiridos en la formación React.
      </p>
    </ContentText>
  );
};

const ContentVideo = styled.div`
  width: 68vw;
  height: 28vw;
  iframe {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 800px) {
    width: 70%;
  height: 300px;
  }
  @media (max-width: 400px) {
    width: 81%;
  height: 250px;
  }
`;

export const BannerVideo = (props) => {
  const x = "ov7vA5HFe6w?si";
  return (
    <ContentVideo>
      <iframe
        src={`https://www.youtube.com/embed/${x}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </ContentVideo>
  );
};

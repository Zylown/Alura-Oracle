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
  
  width: 100%;
  /*margin-top: 10%;
  margin-left: 2%;*/
  div {
    h1 {
      font-size: 60px;
      background: #6bd1ff;
      border: none;
      border-radius: 3px;
      padding: 5px 13px;
      display: inline-block;
      @media (max-width: 840px) {
        font-size: 48px;
        margin: 0;
      }
      @media (max-width: 320px) {
        font-size: 28px;
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
    @media (max-width: 320px) {
      font-size: 32px;
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
  @media (max-width: 770px) {
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
  iframe {
    width: 45vw;
    height: 25vw;
    /* min-width: 320px;
    min-height: 150px; */
  }
`;

export const BannerVideo = () => {
  return (
    <ContentVideo>
      <iframe
        src="https://www.youtube.com/embed/ov7vA5HFe6w?si=dvBVVuPkSxmz3s30"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </ContentVideo>
  );
};

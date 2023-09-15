import styled from "styled-components";
import { Banner, BannerText, BannerVideo } from "../Banner";

const StyleHeader = styled.header`
  width: 100%;
  //background-color: black;
  position: relative;
  height: 630px;
`;

const StyleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 45px 0px 70px;
  gap: 45px;
  @media (max-width: 770px) {
    flex-direction: column;
  }
  @media (max-width: 676px) {
    //padding: 120px 50px 0px 20px;
    flex-direction: column;
    text-align: center;
  }
  @media (max-width: 320px) {
    gap: 15px;
  }
`;

export const Header = () => {
  return (
    <StyleHeader>
      <Banner />
      <StyleContainer>
        <BannerText></BannerText>
        <BannerVideo></BannerVideo>
      </StyleContainer>
    </StyleHeader>
  );
};

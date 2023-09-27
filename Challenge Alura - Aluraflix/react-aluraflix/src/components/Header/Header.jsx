import styled from "styled-components";
import { Banner, BannerText, BannerVideo } from "../Banner";

const StyleHeader = styled.header`
  width: 100%;
  //background-color: black;
  position: relative;
  height: 630px;
  @media (max-width: 690px) {
    height: 690px;
  }
`;

const StyleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 115px 38px 0px 50px;
  gap: 35px;
  @media (max-width: 940px) {
    flex-direction: column;
    padding: 70px 30px 0px 30px;
    gap: 10px;
  }
  @media (max-width: 676px) {
    padding: 70px 0px 0px 0px;
    flex-direction: column;
    text-align: center;
  }
  @media (max-width: 320px) {
    gap: 50px;
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

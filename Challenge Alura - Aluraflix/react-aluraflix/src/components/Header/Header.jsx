import banner from "../../assets/HeaderBanner.jpg";
import styled from "styled-components";

const StyleHeader = styled.header`
  width: 100%;
`;
const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  background-color: black;
  //--opacidad-negro: 0.5;
  /*background-image: linear-gradient(rgba(0, 0, 0, var(--opacidad-negro)), rgba(0, 0, 0, var(--opacidad-negro))), url("../img/fondo.jpg");*/
  filter: brightness(0.5);
`;
export const Header = () => {
  return (
    <StyleHeader>
      <StyledImage src={banner} alt="Banner" />
    </StyleHeader>
  );
};

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  background: linear-gradient(-45deg, #fff300, #efe400);
  position: fixed;
  left: 0px;
  top: 0;
  width: 100%;
  height: 100%;
  line-height: 1.5em;
  z-index: 9999;
`;

const ErrorText = styled.div`
  font-size: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Shabnam", Tahoma, sans-serif;
  color: #000;
  direction: rtl;
`;

const ErrorImage = styled.img`
  margin: 85px auto 20px;
  height: 342px;
`;

const StyledLink = styled(Link)`
  background: #fff;
  color: #000;
  font-size: 30px;
  text-decoration: none;
  margin: 2em auto 0;
  padding: 0.7em 2em;
  border-radius: 500px;
  box-shadow: 0 20px 70px 4px rgba(0, 0, 0, 0.1), inset 7px 33px 0 0px #fff300;
  font-weight: 900;
  transition: all 300ms ease;

  &:hover {
    transform: translateY(-13px) !important;
    box-shadow: 0 35px 90px 4px rgba(0, 0, 0, 0.3), inset 0px 0 0 3px #000 !important;
  }
`;

export const Page404 = () => {
  return (
    <Wrapper>
      <ErrorText>
        <ErrorImage
          src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
          alt="404"
        />
        <span>404 PAGE</span>
        <p className="p-a">
          No se pudo encontrar la página que estabas buscando
        </p>

        <StyledLink to="/">... Back to the previous page</StyledLink>
      </ErrorText>
    </Wrapper>
  );
};
//<p className="p-b">... Back to the previous page</p>

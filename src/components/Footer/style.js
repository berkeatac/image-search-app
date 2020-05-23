import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  width: 100vw;
  height: 5vh;
  background-color: #050417;
  display: flex;
  align-items: center;
`;

export const FooterText = styled.div`
  margin-left: 30px;
  font-family: Open Sans;
  font-size: 14px;
  color: white;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

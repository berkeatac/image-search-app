import styled, { css } from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const ButtonText = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #2a2b8d;
  margin: 12px 30px 12px 30px;
`;

export const PageButton = styled.button`
  border: 1px solid #d5d7e5;
  box-sizing: border-box;
  border-radius: 2px;
  cursor: pointer;
  margin: 5px;
  ${(props) =>
    props.disabled &&
    css`
      cursor: default;
      opacity: 0.4;
    `}
`;

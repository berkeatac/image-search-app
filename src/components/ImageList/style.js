import styled from "styled-components";

export const ImageListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 0px 10px;
  grid-auto-rows: 10px;
`;

export const ListImage = styled.img`
  width: 300px;
`;

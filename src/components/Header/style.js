import styled from "styled-components";
import Select from "react-select";

export const HeaderContainer = styled.div`
  height: 120px;
  width: 100vw;
  background-color: #050417;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 20;
`;

export const LogoContainer = styled.div`
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoComponent = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(
    333.23deg,
    #2a2b8d -16.84%,
    #2b2f8f -12.31%,
    #559bd1 119.72%
  );
  border-radius: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px 50px 25px 50px;
`;

export const LogoImage = styled.img`
  width: 41px;
  height: 35px;
  margin: 2px 1px;
`;

export const HeaderFormContainer = styled.form`
  display: flex;
  width: calc(100% - 170px);
  height: 120px;
  align-items: center;
  margin-right: 100px;
  justify-content: space-evenly;
`;

export const HeaderQueryInput = styled.input`
  width: 400px;
  height: 50px;
  border-radius: 4px;
  padding: 0px 22px;
  font-family: Open Sans;
  font-size: 14px;
  border: 1px solid #cccccc;
`;

export const HeaderDropdown = styled(Select)`
  width: 400px;
  height: 50px;
  border-radius: 4px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  margin-left: 30px;
`;

export const HeaderSubmitText = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.1em;
  color: #ffffff;
`;

export const HeaderSubmitButton = styled.button`
  width: 246px;
  height: 50px;
  background: #2a2b8d;
  border-color: #2a2b8d;
  border-radius: 25px;
  cursor: pointer;
  margin-left: 52px;
`;

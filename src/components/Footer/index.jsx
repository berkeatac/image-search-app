import React from "react";

import { FooterContainer, FooterText, StyledLink } from "./style";

const Footer = () => {
  return (
    <FooterContainer>
      <StyledLink to="/about">
        <FooterText>About</FooterText>
      </StyledLink>
    </FooterContainer>
  );
};

export default Footer;

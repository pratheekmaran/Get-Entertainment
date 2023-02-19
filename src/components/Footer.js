import React from "react";
import styled from "styled-components";

const FooterBar = styled.div`
    background-color: gray;
    text-align: center;
    margin-top: 100px;
    position: relative;
    top: 380px;
    padding: 8px;
`;

const Footer = () => {
    const year = new Date().getFullYear();
  
    return (
        <FooterBar>
            {`Copyright © Get Entertainment ${year}`}
        </FooterBar>
    );
};

export default Footer;
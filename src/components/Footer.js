import React from "react";
import styled from "styled-components";

const FooterBar = styled.div`
    background-color: gray;
    background: rgba(204, 204, 204, 0.5);
    text-align: center;
    margin-top: 100px;
    position: fixed;
    z-index: 0;
    width: 100%;
    bottom: 0;
    left: 0;
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
import React, { useState } from "react";
import { Link } from "react-router-dom";
import partnersBN from "../img/partnersBN.svg";
import styled, { css } from "styled-components";

const Content = styled.div`
  width: calc(100% - 120px);
  float: left;
  background: #ffffff;
  margin-left: 120px;
`;

const Button = styled.button`
  margin: 5em;
  box-sizing: border-box;
  position: relative;
  width: 15em; /* - apply for fixed size*/
  margin: 0.2em;
  padding: 0 15px 0 46px;
  border: none;
  text-align: left;
  line-height: 34px;
  white-space: nowrap;
  border-radius: 0.2em;
  font-size: 16px;
  color: #fff;
  ${props =>
    (props.google &&
      css`
        background: #dd4b39;

        /* Not working!! */
        &:before {
          border-right: #bb3f30 1px solid;
          background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png")
            6px 6px no-repeat;
        }

        &:hover,
        &:focus {
          background: #e74b37;
        }
      `) ||
    (props.facebook &&
      css`
        background-color: #4c69ba;
        background-image: linear-gradient(#4c69ba, #3b55a0);
        /*font-family: "Helvetica neue", Helvetica Neue, Helvetica, Arial, sans-serif;*/
        text-shadow: 0 -1px 0 #354c8c;
        &:before {
          border-right: #364e92 1px solid;
          background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png")
            6px 6px no-repeat;
        }
        &:hover,
        &:focus {
          background-color: #5b7bd5;
          background-image: linear-gradient(#5b7bd5, #4864b1);
        }
      `)}
`;

const MainInteractionButton = css`
  font-family: "Nunito";
  font-size: 18px;
  line-height: 36px;
  background-color: transparent;
  border-color: transparent;
  border: none;
`;

const BackButton = styled.a`
  ${MainInteractionButton}
  color: #9b9b9b;
  float: left;
  &:before {
    /* TODO: FontAwesome */
  }
`;

// const ContinueButton = styled.button`
//   ${MainInteractionButton}
//   color: #044087;
//   float: right;
// `;

const LandingForm = () => {
  const [isOverlayOpen, setOverlay] = useState(false);
  const [isPopupOpen, setPopup] = useState(false);

  const registrarse = () => {
    setOverlay(true);
    setPopup(true);
  };

  const cerrarPop = () => {
    setOverlay(false);
    setPopup(false);
  };

  return (
    <Content>
      <div className="center">
        <img src={partnersBN} width="90px" height="35px" alt="Partners" />
        <h1>
          Build together,
          <br />
          <b>Ship together.</b>
        </h1>
        <p>
          Partners es una red social colaborativa que conecta emprendedores con
          ganas de crecer y y potenciar sus proyectos.
          <br />
          En este espacio vas a poder compartir tus proyectos, dar y recibir
          feedback de otros emprendedores. Intercambiar conocimientos y promover
          una cultura colaborativa.
        </p>
        <Link to="/about">
          <BackButton>Quiero saber mas</BackButton>
        </Link>
        <div className="continuar" id="join-register" onClick={registrarse}>
          Quiero unirme
        </div>
      </div>
      <Modal
        cerrarPop={cerrarPop}
        isOverlayOpen={isOverlayOpen}
        isPopupOpen={isPopupOpen}
      />
    </Content>
  );
};

const CloseButton = styled.button`
  font-size: 16px;
  line-height: 16px;
  display: block;
  text-align: right;
  color: #bbbbbb;
  transition: 0.3s ease all;
`;

const Modal = ({ cerrarPop, isOverlayOpen, isPopupOpen }) => (
  <div className={`overlay ${(isOverlayOpen && "active") || ""}`}>
    <div className={`popup ${(isPopupOpen && "active") || ""}`}>
      <CloseButton onClick={cerrarPop}>Close</CloseButton>
      <Link to="/register">
        <Button google>Registrate con Google</Button>
      </Link>
      <Link to="/register">
        <Button facebook>Registrate con Facebook</Button>
      </Link>
    </div>
  </div>
);

export default LandingForm;

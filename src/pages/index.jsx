import React, { Component } from "react";
//import { Link, Redirect } from "react-router-dom";
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

class LandingForm extends Component {
  constructor(props) {
    super(props);
    // btnAbrir = document.getElementbyId('join-register'),

    // cerrarPopup = document.getElementById('btn-cerrar');
    this.registrarse = this.registrarse.bind(this);
    this.cerrarPop = this.cerrarPop.bind(this);
  }
  registrarse() {
    let overlay = document.getElementsByClassName("overlay")[0],
      popup = document.getElementsByClassName("popup")[0];
    overlay.classList.add("active");
    popup.classList.add("active");
  }

  cerrarPop() {
    let overlay = document.getElementsByClassName("overlay")[0],
      popup = document.getElementsByClassName("popup")[0];
    overlay.classList.remove("active");
    popup.classList.remove("active");
  }

  render() {
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
            Partners es una red social colaborativa que conecta emprendedores
            con ganas de crecer y y potenciar sus proyectos.
            <br />
            En este espacio vas a poder compartir tus proyectos, dar y recibir
            feedback de otros emprendedores. Intercambiar conocimientos y
            promover una cultura colaborativa.
          </p>
          <div className="back">Quiero saber mas</div>
          <div
            className="continuar"
            id="join-register"
            onClick={this.registrarse}
          >
            Quiero unirme
          </div>
        </div>
        <Modal cerrarPop={this.cerrarPop} />
      </Content>
    );
  }
}

const CloseButton = styled.a`
  font-size: 16px;
  line-height: 16px;
  display: block;
  text-align: right;
  color: #bbbbbb;
  transition: 0.3s ease all;
`;

const Modal = ({ cerrarPop }) => (
  <div className="overlay">
    <div className="popup">
      <CloseButton href="#" onClick={cerrarPop}>
        <i className="fas fa-times"></i>
      </CloseButton>
      <Button google>Registrate con Google</Button>
      <Button facebook>Registrate con Facebook</Button>
    </div>
  </div>
);

export default LandingForm;

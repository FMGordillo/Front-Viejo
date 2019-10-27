import React, { Component } from "react";
import {  Redirect } from "react-router-dom";
import partnersBN from "../img/partnersBN.svg";
import {useAuth0} from "@auth0/auth0-spa-js";
// import config from "../../auth_config.json";
import NavBar from "./NavBar"

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

  // login(){
  //   const some = useAuth0().isAuthenticated //Tratando de obtener el isAuthenticated para evaluar a donde redirigir
  // }

  cerrarPop() {
    let overlay = document.getElementsByClassName("overlay")[0],
      popup = document.getElementsByClassName("popup")[0];
    overlay.classList.remove("active");
    popup.classList.remove("active");
  }

  render() {
    // {this.login()}
    return (
      <div className="content">
              <NavBar/>
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
          <div className="continuar"
          ><a href="/register" style={{textDecoration:"none", color:"white"}}>Quiero Unirme</a></div>
          <div className="back"
          >Quiero saber mas</div>
        </div>
      </div>
    );
  }
}

export default LandingForm;

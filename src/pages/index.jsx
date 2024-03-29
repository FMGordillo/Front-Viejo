import React from "react";
import { Link,Redirect } from "react-router-dom";
import partnersBN from "../img/partnersBN.svg";
import { useAuth0 } from "../react-auth0-spa";
import NavBar from "../components/NavBar";

function LandingForm() {
  const { loading, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  
  function loggin(){
   if(isAuthenticated){
      return <Redirect to="/register" />
   }
  }

  return (
    <div className="content">
      <NavBar />
      {loggin()}
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
        {/* <Link to="/register" style={{ textDecoration: "none", color: "white" }}> */}
          <div className="continuar" onClick={() => loginWithRedirect()}>Quiero Unirme</div>
        {/* </Link> */}
        <div className="back">Quiero saber mas</div>
      </div>
    </div>
  );
}

export default LandingForm;

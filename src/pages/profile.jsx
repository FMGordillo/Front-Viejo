import React from "react";
import Social from "./social";
import { useAuth0 } from "../react-auth0-spa";
import ListaComponent from "../components/ListaReut";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_PROJECTS = gql`
  {
    projects {
      name
    }
  }
`;

function Profile() {
  const { loading: loadingAuth0, user } = useAuth0();
  const { loading, data, error } = useQuery(GET_PROJECTS);

  if (loadingAuth0 || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="partners">
        <img
          src="../img/partners_white.svg"
          width="90px"
          height="35px"
          alt="Partners"
        />
      </div>

      <div className="content">
        <div className="center">
          <div className="gridPhoto">
            <img
              className="roundedPhoto"
              src={user ? user.picture : ""}
              alt=""
            />
            <div className="textList">
              <h2>{user.name}</h2>
            </div>
          </div>
          <p>{/*user.BioDetails */} Aca va mi presentacion de usuario</p>
          {Social({})}
        </div>
        <div className="aside">
          <div className="Box-content">
            {ListaComponent({
              list: ["a", "b", "c", "d"],
              title: "Proyectos"
            })}
          </div>
        </div>

        <div className="aside2">
          <div className="Box-content">
            {ListaComponent({
              list: ["a", "b", "c", "d"],
              title: "Colaboraciones"
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

import React, {Component} from 'react'
import { useAuth0 } from "../../react-auth0-spa";

function Welcome(){
    
    
    const { user } = useAuth0();
    console.log(user)
    
    
        return(
        <div>
            <h1 className="bienvenido">Bienvenido!</h1>
            <p className="name">{user?user.name:''}</p>
            <p className="conocernos">Completa los siguientes datos para conocernos mejor</p>
        </div>
        )
    


}
export default Welcome
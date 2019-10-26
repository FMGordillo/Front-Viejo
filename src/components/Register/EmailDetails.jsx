import React, { Component } from "react";
import Welcome from "./Welcome";
import createAuth0Client from "@auth0/auth0-spa-js";
import config from "../../auth_config.json";

 class EmailDetails extends Component{
    constructor(props){
        super(props)
   
        this.saveAndContinue = this.saveAndContinue.bind(this)
      } 
   
    
      saveAndContinue(e){
        e.preventDefault()
        const input = document.getElementsByClassName('input')[0]
        // console.log(input)
        if(input.value !== ''){
            // console.log('Continue')
            if (/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)$/i.test(input.value)){
            this.props.nextStep()
            }else{
                input.style.color = 'red'
                input.placeholder = 'please, complete with a valid email'
                input.style.borderBottomColor = 'red'
            }
        }else{
            // console.log('dont continue')
            input.style.color = 'red'
            input.placeholder = 'please, complete this'
            input.style.borderBottomColor = 'red'
        }
    }


    render(){
      const {values}=this.props
      
        return(
          <div>
        <button id="login" className="continuar">Click to Login</button>
            <Welcome/>
            <form action="">
                <p className="pregunta">1. Confirmanos tu email</p>
                <input
                className="input" 
                type="email"
                name='email'
                onChange={this.props.handleChange}
                defaultValue={values.email} 
                />
                <div>
                    <button className="continuar" onClick={this.saveAndContinue}>Siguiente Pregunta</button>
                </div>
            </form>
        </div>
        )

    this.saveAndContinue = this.saveAndContinue.bind(this);
  }

  saveAndContinue(e) {
    e.preventDefault();
    const input = document.getElementsByClassName("input")[0];
    // console.log(input)
    if (input.value != "") {
      // console.log('Continue')
      if (
        /^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)$/i.test(
          input.value
        )
      ) {
        this.props.nextStep();
      } else {
        input.style.color = "red";
        input.placeholder = "please, complete with a valid email";
        input.style.borderBottomColor = "red";
      }
    } else {
      // console.log('dont continue')
      input.style.color = "red";
      input.placeholder = "please, complete this";
      input.style.borderBottomColor = "red";
    }
  }

  render() {
    const { values } = this.props;

    return (
      <div>
        <Welcome />
        <form action="">
          <p className="pregunta">1. Confirmanos tu email</p>
          <input
            className="input"
            type="email"
            name="email"
            onChange={this.props.handleChange}
            defaultValue={values.email}
          />
          <div>
            <button className="continuar" onClick={this.saveAndContinue}>
              Siguiente Pregunta
            </button>
          </div>
        </form>
      </div>
    );

    this.saveAndContinue = this.saveAndContinue.bind(this);
  }

  saveAndContinue(e) {
    e.preventDefault();
    const input = document.getElementsByClassName("input")[0];
    // console.log(input)
    if (
      /^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)$/i.test(
        input.value
      )
    ) {
      // console.log('Continue')
      this.props.nextStep();
    } else {
      // console.log('dont continue')
      input.style.color = "red";
      input.placeholder = "please, complete with a valid email";
      input.style.borderBottomColor = "red";
    }
  }

  render() {
    const { values } = this.props;

    return (
      <div>
        <Welcome />
        <form action="">
          <p className="pregunta">1. Confirmanos tu email</p>
          <input
            className="input"
            type="email"
            name="email"
            onChange={this.props.handleChange}
            defaultValue={values.email}
          />
          <div>
            <button className="continuar" onClick={this.saveAndContinue}>
              Siguiente Pregunta
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EmailDetails;

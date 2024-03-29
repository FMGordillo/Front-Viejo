import React, {Component} from 'react'
import Welcome from './Welcome';

class PersonalDetails extends Component{
    constructor(props){
        super(props)
   
        this.saveAndContinue = this.saveAndContinue.bind(this)
        this.back = this.back.bind(this)
        this.save = this.save.bind(this)
        this.onChange = this.onChange.bind(this)
      } 
   
    
      saveAndContinue(e){
        e.preventDefault()
        const input = document.getElementsByClassName('boxList')
        // console.log(input.length)
        if(input.length !== 0){
            // console.log('Continue')
            this.props.nextStep()
        }else{
            // console.log('dont continue')
            const inp = document.getElementById('inpInt')
            inp.style.color = 'red'
            inp.placeholder = 'please, complete this'
            inp.style.borderBottomColor = 'red'
        }
    }
    back(e){
        e.preventDefault()
        this.props.prevStep()
    }

    save(e){
        e.preventDefault()
        const input= document.getElementById('inpInt')
        this.props.handleInterest(input)
        input.value= ''
    }

    onChange(e){
        e.preventDefault()
        e.target.style.color= 'black'
        e.target.style.borderBottomColor= 'black'
    }

    render(){
        const {values}=this.props
        const interest =values.interesting

        const list = interest.map((interest,i)=>{
            return(
            <div key={i} className="boxList">
            <p className="textList"
            >#{interest}</p>
            </div>)
       })

        return(
        <div>
            <Welcome/>
            <form>
                <p className="pregunta">7.Cuales son tus principales intereses?</p>
                <div className="divInterest">
                <input 
                className="inputInterest"
                id="inpInt"
                type="text"
                onChange = {this.onChange}
                />
                <button className="saveInterest" onClick={this.save}></button>
                </div>
                <br/>
                {list}
                
                

                <div>
                    <button className="back" onClick={this.back} >Ver pregunta anterior</button>
                    <button className="continuar" onClick={this.saveAndContinue} >Siguiente Pregunta</button>
                </div>
            </form>
       </div>
       )
    }



}
export default PersonalDetails
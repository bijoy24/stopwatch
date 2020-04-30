import React,{ Component } from "react"
import './Title.css'
class Title extends Component{
    constructor(props){
        super(props);
        this.state ={
            title:'Please Enter Your Title Here...',
            isinput:false
        }
    }
    editHandler (){
        this.setState({
            ...this.state,
            isinput:true
        })
    }
    changeHandler (event){
        this.setState({
            ...this.state,
            title:event.target.value
        })
    }
    pressHandler (event){
        if(event.key === "Enter"){
            this.setState({
                ...this.state,
                isinput:false
            })
        }
    }
    render(){
        let  element = null;
        if(this.state.isinput){
            element =(
                <div className ='title'>
                    <input className='form-control' type ='text' value ={this.state.title} 
                    onChange ={(event)=>{
                        this.changeHandler(event);
                    }}
                    onKeyPress ={event=>{
                        this.pressHandler(event)
                    }}
                    ></input>
                </div>
            )

        }else{
            element =(
                <div className="d-flex title" >
                    <h1 className ="display-4">{this.state.title}</h1>
                    <span onClick ={this.editHandler.bind(this)} className="ml-auto edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
                </div>
            )
        }
        return(
            <div>
                {element}
            </div>
        )
    }
}
export default Title;
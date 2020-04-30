import React,{Component} from 'react'
class Controller extends Component{
    constructor(props){
        super(props);
        this.state ={
            start:true,
            pause:false,
            lap:false,
            reset:false        
    }
}
    startHandler (){
        this.setState({
            ...this.state,
            start:false,
            pause:true,
            lap:true
        });
        this.props.startTime();

    }
    pauseHandler(){
        this.setState({
            ...this.state,
            start:true,
            pause:false,
            lap:false,
            reset:true
        })
        this.props.pauseTime(); 
    }
    resetHandler(){
        this.setState({
            start:true,
            pause:false,
            lap:false,
            reset:false 
        })
        this.props.resetTime();
    }
    lapHandler(){
        this.props.lapTime()
    }
    getController(){
        let output =null;
        //initial state
        if(this.state.start && !this.state.reset){
            output =(
                <div className="my-4">
                    <button onClick ={()=>{
                        this.startHandler()
                    }} className='btn btn-primary  btn-lg'>Start</button>
                </div>
            )

        }
        else if(this.state.pause && this.state.lap){
            output =(
                <div className="my-4">
                    <button onClick ={()=>{
                        this.pauseHandler()
                    }} className='btn btn-primary btn-lg'>Pause</button>
                    <button onClick ={(event)=>{
                        this.lapHandler()
                    }} className='btn btn-danger  btn-lg mx-4'>Lap</button>
                </div>
            )
        }
        else if(this.state.start && this.state.reset){
            output =(
                <div className="my-4">
                    <button onClick ={()=>{
                        this.startHandler()
                    }} className='btn btn-primary  btn-lg mx-4'>start</button>
                    <button onClick ={()=>{
                        this.resetHandler()
                    }} className='btn btn-warning  btn-lg mx-4'>Reset</button> 
                </div>
            )
        }
        
        return output
    }
    render(){
        return this.getController();
    }
}
export default Controller
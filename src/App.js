import React,{Component} from 'react';
import './App.css';
import Title from "./components/title/Title"
import Countdown from './components/title/Countdown/Countdown'
import Controller from './components/controller/Controller'
import Lap from './components/laps/Lap'

class App extends Component{
  constructor(){
    super()
    this.state ={
      time:{
        min:0,
        sec:0,
        mili:0
      },
      laps:[]
    }
  }
  getstart (){
    this.intervalId=setInterval(()=>{
      let min =this.state.time.min;
      let sec =this.state.time.sec;
      let mili =this.state.time.mili;
      if(mili>=10){
        sec+=1;
        mili=0;
      }
      if(sec>=60){
        min+=1;
        sec=0;
      }
      this.setState({
        time:{
          min,
          sec,
          mili:mili+1
        }
      })
    },100)
  }
  getpause(){
    clearInterval(this.intervalId);
  }
  getReset(){
    this.setState({
      ...this.state,
      time:{
        min:0,
        sec:0,
        mili:0
      },
      laps:[]

    })
  }
  getLap(){
    let time = {
      ...this.state.time
    }
    this.setState({
    ...this.state,
    laps:[time,...this.state.laps]
    })
    console.log(this.state.laps);
  }
  render(){
    return(
      <div className ="App">
        <div className ="container py-5">
          <div className ="row">
            <div className ="col-sm-8 offset-sm-2">
            <Title></Title>
            <Countdown value ={this.state.time}></Countdown>
            <Controller
             startTime={this.getstart.bind(this)}
             pauseTime={this.getpause.bind(this)}
             resetTime={this.getReset.bind(this)}
             lapTime ={this.getLap.bind(this)}
             ></Controller>
             <Lap lap={this.state.laps}></Lap>
            </div>
          </div>

        </div>
          
      </div>
    )
  }
}

export default App;

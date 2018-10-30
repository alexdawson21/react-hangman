import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Background from "./components/Background";
import Question from "./components/Question";
import Timer from "./components/Timer";
import Wrapper from "./components/Wrapper";
import questions from "./question.json"
import Correct from "./components/Correct";
import Wrong from "./components/Wrong";
import Score from "./components/Score";
import Gamestart from "./components/Gamestart";


class App extends Component {

  state = {
    questions,
    timer: 10,
    number: 1,
    correct: 0,
    incorrect: 0,
    showGamestart: true,
    showQuestion: false,
    showCorrect: false,
    showWrong: false ,
    showScore: false
  }

startGame = () =>{
    this.setState({number: 1})
    this.setState({correct: 0})
    this.setState({incorrect: 0})
    this.setState({showGamestart:false});
    this.setState({showScore:false});
    this.setState({showQuestion:true});
    this.timerStart();
    this.countdownStart();
  }

countdownStart = () =>{
  this.countdown = setTimeout(()=>{
    clearInterval(this.timer)
    this.answering(false)
  },10000)
}
timerStart = () =>{
  this.timer = setInterval(()=>{this.setState({timer:this.state.timer-1})},1000)
}


answering = (answer) =>{
    clearInterval(this.timer)
    clearTimeout(this.countdown)
    this.setState({timer: 10});
    if(answer === true){
      this.setState({correct: this.state.correct +1});
      this.setState({number: this.state.number+1});
      this.setState({showQuestion: false});
      this.setState({showCorrect: true});
      setTimeout(()=>{
        if(this.state.number<5){
        this.setState({showQuestion: true});
        this.setState({showCorrect: false});
        this.timerStart();
        this.countdownStart();
      }
        else{
          this.setState({showCorrect: false});
          this.setState({showScore: true});
        }
      }, 3000)
    }
    else{
      this.setState({incorrect: this.state.incorrect +1});
      this.setState({number: this.state.number+1});
      this.setState({showQuestion: false});
      this.setState({showWrong: true});
      setTimeout(()=>{
        if(this.state.number<5){
        this.setState({showQuestion: true});
        this.setState({showWrong: false});
        this.timerStart();
        this.countdownStart();
      }
        else{
          this.setState({showWrong: false});
          this.setState({showScore: true});
        }
      }, 3000)
    }
  }


  
  render() {
    return (
      <Background>
        <Wrapper>
          <Timer timer={this.state.timer} />
          {this.state.showGamestart?
          <Gamestart
          startGame = {this.startGame}/>
          :null}
          {this.state.showQuestion?
          <Question
            id = {this.state.questions[this.state.number-1].id}
            key = {this.state.questions[this.state.number-1].id}
            number = {this.state.number}
            question = {this.state.questions[this.state.number-1].question}
            answers = {this.state.questions[this.state.number-1].answers}
            answering = {this.answering}/>
            :null
          }
           {this.state.showCorrect?
           <Correct/>
           :null}
           {this.state.showWrong?
           <Wrong/>
           :null}
           {this.state.showScore?
           <Score
           correct = {this.state.correct}
           incorrect ={this.state.incorrect}
           startGame={this.startGame}/>
           :null} 
        </Wrapper>
      </Background>
    );
  }
}

export default App;

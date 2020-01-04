import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// created components of page
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import IconCard from './components/IconCard';
import Icons from './icons.json';
import "./components/IconCard.css";
import 'tachyons'

// while there are element in the array, pick an index at random to replace it with
const shuffleArray = (array) => {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
};

class App extends Component {

  state = {
    currentScore: 0,
    topScore: 0,
    result: "",
    clicked: [],
    Icons,
    gameOver: false
  };

  // display starting message when page loads and component is mounted
  componentDidMount() {
    this.setState({result: "Do the Clicky thing to begin the game thing"})
  }

  // when an image is clicked,
  // increase points
  // add id of the element to an array to keep track of what has been clicked
  clickedPlayer = (id) => {
    console.log(`image clicked id: ${id}`);
    if(!this.state.clicked.includes(id)){
      this.pointIncrease();
      this.state.clicked.push(id);
      this.setState({
        gameOver: false
      });
    } else {
      this.resetGame();
    }
  }
  pointIncrease = () => {
    let score = this.state.currentScore + 1;
    console.log(`current score is ${score}`);
    if (score === this.state.Icons.length) {
      this.setState({
        result: "Winner! Click again to start a new game!",
        topScore: score,
        currentScore: 0,
        clicked: [],
        Icons,
        gameOver: false
      });
    } else if (score > this.state.topScore) {
      this.setState({
        topScore: score,
        currentScore: score,
        result: "New High Score!",
      });
    } else {
      this.setState({
        currentScore: score,
        result: "Correct!"
      });
    }
    this.resetIconArray();
  }

  // reset the game when the player makes a mistake
  resetGame = () => {
    this.setState({
      points: 0,
      currentScore: 0,
      topScore: this.state.topScore,
      result: "Incorrect!",
      clicked: [],
      Icons,
      gameOver: true
    });
    console.log('Game Over', this.state.gameOver);
    this.resetIconArray();
  }

  // shuffle the image array with a shuggle algorythm
  resetIconArray = () => {
    let newScramble = shuffleArray(Icons);
    this.setState({Icons: newScramble})
  }
  render() {
    return (
      <div className='container'>
        <NavBar topScore={this.state.topScore} currentScore={this.state.currentScore} status={this.state.result}/>
        <Banner />
        <div className='mainStyle'>
          {this.state.Icons.map(icon => (
            <IconCard
            id={icon.id}
            image={icon.image}
            clickedPlayer={this.clickedPlayer}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

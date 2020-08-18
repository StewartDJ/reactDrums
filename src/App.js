import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import SoundOne from './SoundOne';
import SoundTwo from './SoundTwo';
import SoundThree from './SoundThree';
import SoundFour from './SoundFour';
import SoundFive from './SoundFive';
import SoundSix from './SoundSix';
import SoundSeven from './SoundSeven';
import SoundEight from './SoundEight';
import SoundNine from './SoundNine';

class App extends Component {
  state = { 

  buttons: [
    {id: 1, content: '<img src="1.jpg">'},
    {id: 2, content: '<img src="2.jpg">'},
    {id: 3, content: '<img src="3.jpg">'},
    {id: 4, content: '<img src="4.jpg">'},
    {id: 5, content: '<img src="5.jpg">'},
    {id: 6, content: '<img src="6.jpg">'},
    {id: 7, content: '<img src="7.jpg">'},
    {id: 8, content: '<img src="8.jpg">'},
    {id: 9, content: '<img src="9.jpg">'}
  ]
  }

  render() { 
    return ( 

<div className="container">
    <Header />
    <div className="keys">
    <SoundOne />
    <SoundTwo />
    <SoundThree />
    <br />
    <SoundFour />
    <SoundFive />
    <SoundSix />
    <SoundSeven />
    <SoundEight />
    <SoundNine />
  </div>


<audio data-key="65" src="./clap.wav"></audio>
<audio data-key="83" src="./hihat.wav"></audio>
<audio data-key="68" src="./kick.wav"></audio>
<audio data-key="70" src="./openhat.wav"></audio>
<audio data-key="71" src="./boom.wav"></audio>
<audio data-key="72" src="./ride.wav"></audio>
<audio data-key="74" src="./snare.wav"></audio>
<audio data-key="75" src="./tom.wav"></audio>
<audio data-key="76" src="./tink.wav"></audio>

</div>

     );
  }
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
 
export default App;



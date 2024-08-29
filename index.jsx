import React from 'react';
import ReactDOM from 'react-dom/client';
import DrumPad from './components/DrumPad';
import Display from './components/Display';

function App() {
  /* current text in #display */
  const [currentText, setCurrentText] = React.useState(""); 

  const drumPadData = [{
    keyLetter: "Q",
    audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    displayText: "Heater 1"
  },{
    keyLetter: "W",
    audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    displayText: "Heater 2"
  },{
    keyLetter: "E",
    audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    displayText: "Heater 3"
  },{
    keyLetter: "A",
    audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    displayText: "Heater 4"
  },{
    keyLetter: "S",
    audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    displayText: "Clap"
  },{
    keyLetter: "D",
    audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    displayText: "Open-HH"
  },{
    keyLetter: "Z",
    audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    displayText: "Kick-n'-Hat"
  },{
    keyLetter: "X",
    audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    displayText: "Kick"
  },{
    keyLetter: "C",
    audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    displayText: "Closed-HH"
  }];

  function updateCurrentText(newDisplayText) {
    setCurrentText(newDisplayText);
  }
  return (
    <div id = "drum-machine">
      <Display 
      displayText = {currentText}
      />
      {
        /* function to create DrumPad components using drumPadDate */
        drumPadData.map(function (drumPad) {
          return (
            <DrumPad 
            keyLetter = {drumPad.keyLetter}
            audioSrc = {drumPad.audioSrc}
            displayText = {drumPad.displayText}
            updateCurrentText = {updateCurrentText}
            />
          )
        })
      }
      {/* <DrumPad 
      keyLetter = "Q"
      audioSrc = "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
      displayText = "Heater 1"
      updateCurrentText = {updateCurrentText}
      /> */}
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 
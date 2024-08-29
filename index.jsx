import React from 'react';
import ReactDOM from 'react-dom/client';
import DrumPad from './components/DrumPad';
import Display from './components/Display';
import { drumPadData } from './data';

function App() {
  /* current text in #display */
  const [currentText, setCurrentText] = React.useState(""); 

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
            key = {drumPad.keyLetter}
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
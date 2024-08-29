import React from 'react';
import ReactDOM from 'react-dom/client';
import DrumPad from './components/DrumPad';
import Display from './components/Display';
import { drumPadData } from './data';

function App() {
  /* current text in #display */
  const [currentText, setCurrentText] = React.useState("Click on a button or press the corresponding key"); 

  function updateCurrentText(newDisplayText) {
    setCurrentText(newDisplayText);
  }
  return (
    <div id = "drum-machine">
      <Display 
      displayText = {currentText}
      />
      <div className = "drum-pads-container">
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
      </div>
      <p id = "credits">by <a href="https://github.com/lucy-c1/drum-machine" target = "_blank">lucy-c1</a></p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 
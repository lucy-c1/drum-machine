import React from "react"

/*
Props:
- keyLetter: the key that the drumpad is associated with
- audioSrc: the audio source associated with this drumpad
- displayText: the displayText associated with this drumpad, useful for passing
into parameters later
- updateCurrentText: updates the currentText state in parent
*/
export default function DrumPad(props) {
    function playAudio() {
        const audioTag = document.getElementById(props.keyLetter);
        audioTag.play();
        props.updateCurrentText(props.displayText);
    }
    
    function handleKeyPress(event) {
        console.log("handleKeyPressed function called");
        if (event.key.toUpperCase() === props.keyLetter) {
            playAudio();
        }
    }

    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        }
    }, [])

    return (
        <div className = "drum-pad-container">
            <button className = "drum-pad" onClick = {playAudio} id = {props.displayText}>
                {props.keyLetter}
                <audio src = {props.audioSrc} id = {props.keyLetter} className = "clip">Browser does not support audio</audio>
            </button>
        </div>
    )
}
import React from 'react';

class DrumMachine extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            display: "The Drum Machine has just started!"
        };
        this.keyboardListener = this.keyboardListener.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.getAudioName = this.getAudioName.bind(this);
    }

    componentDidMount(){
        window.addEventListener("keydown", this.keyboardListener, false);
    }

    keyboardListener(event){
        if (event.keyCode === 81 ||
        event.keyCode === 87 ||
        event.keyCode === 69 ||
        event.keyCode === 65 ||
        event.keyCode === 83 ||
        event.keyCode === 68 ||
        event.keyCode === 90 ||
        event.keyCode === 88 ||
        event.keyCode === 67){
            const test = String.fromCharCode(event.keyCode).toLowerCase();
            document.getElementById(test).click();
        }
    }

    clickHandler(event){
        event.target.style.backgroundColor = "violet";
        setTimeout(() => event.target.style.backgroundColor = "#CCFF00", 150);
        event.target.children[0].play();
        this.setState({display: this.getAudioName(event.target.id)});
    }

    getAudioName(character){
        switch (character){
            case "q":
                return "Heater 1";

            case "w":
                return "Heater 2";

            case "e":
                return "Heater 3";

            case "a":
                return "Heater 4";

            case "s":
                return "Clap";

            case "d":
                return "Open-HH";

            case "z":
                return "Kick-n'-Hat";
            
            case "x":
                return "Kick";

            case "c":
                return "Closed-HH";

            default:
                break;
        }
    }

    render(){
        return(
            <div class="row d-flex justify-content-center text-center">
                <h1 id="display" class="col-sm-9"><b>{this.state.display}</b></h1>
                <div id="drum-pads">
                    <div class="row mt-4 mb-2 d-flex justify-content-center">
                        <button class="drum-pad col-sm-1 btn mx-2" id="q" onClick={this.clickHandler}>
                            Q
                            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" id="Q" class="clip"></audio>
                        </button>
                        <button class="drum-pad col-sm-1 btn mx-2" id="w" onClick={this.clickHandler}>
                            W
                            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" id="W" class="clip"></audio>
                        </button>
                        <button class="drum-pad col-sm-1 btn mx-2" id="e" onClick={this.clickHandler}>
                            E
                            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" id="E" class="clip"></audio>
                        </button>
                    </div>
                    <div class="row mb-2 d-flex justify-content-center">
                        <button class="drum-pad col-sm-1 btn mx-2" id="a" onClick={this.clickHandler}>
                            A
                            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id="A" class="clip"></audio>
                        </button>
                        <button class="drum-pad col-sm-1 btn mx-2" id="s" onClick={this.clickHandler}>
                            S
                            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" id="S" class="clip"></audio>
                        </button>
                        <button class="drum-pad col-sm-1 btn mx-2" id="d" onClick={this.clickHandler}>
                            D
                            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" id="D" class="clip"></audio>
                        </button>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <button class="drum-pad col-sm-1 btn mx-2" id="z" onClick={this.clickHandler}>
                            Z
                            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" id="Z" class="clip"></audio>
                        </button>
                        <button class="drum-pad col-sm-1 btn mx-2" id="x" onClick={this.clickHandler}>
                            X
                            <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" id="X" class="clip"></audio>
                        </button>
                        <button class="drum-pad col-sm-1 btn mx-2" id="c" onClick={this.clickHandler}>
                            C
                            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" id="C" class="clip"></audio>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default DrumMachine;

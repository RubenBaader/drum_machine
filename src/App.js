import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
      bank: 'One',
      volume: 30
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.changeBank = this.changeBank.bind(this);

    this.audiosBankOne = {
      Q: {
        keyCode: 81,
        id: 'Heater-1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
      },
      W: {
        keyCode: 87,
        id: 'Heater-2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
      },
      E: {
        keyCode: 69,
        id: 'Heater-3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
      },
      A: {
        keyCode: 65,
        id: 'Heater-4',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
      },
      S: {
        keyCode: 83,
        id: 'Clap',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
      },
      D: {
        keyCode: 68,
        id: 'Open-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
      },
      Z: {
        keyCode: 90,
        id: "Kick-n'-Hat",
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
      },
      X: {
        keyCode: 88,
        id: 'Kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
      },
      C: {
        keyCode: 67,
        id: 'Closed-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
      }
    };
    this.audiosBankTwo = {
      Q: {
        keyCode: 81,
        id: 'Chord-1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
      },
      W: {
        keyCode: 87,
        id: 'Chord-2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
      },
      E: {
        keyCode: 69,
        id: 'Chord-3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
      },
      A: {
        keyCode: 65,
        id: 'Shaker',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
      },
      S: {
        keyCode: 83,
        id: 'Open-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
      },
      D: {
        keyCode: 68,
        id: 'Closed-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
      },
      Z: {
        keyCode: 90,
        id: 'Punchy-Kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
      },
      X: {
        keyCode: 88,
        id: 'Side-Stick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
      },
      C: {
        keyCode: 67,
        id: 'Snare',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
      }
    };
    this.audioPlayer = {
      bankOne: {
        Q: new Audio(this.audiosBankOne['Q']['url']),
        W: new Audio(this.audiosBankOne['W']['url']),
        E: new Audio(this.audiosBankOne['E']['url']),
        A: new Audio(this.audiosBankOne['A']['url']),
        S: new Audio(this.audiosBankOne['S']['url']),
        D: new Audio(this.audiosBankOne['D']['url']),
        Z: new Audio(this.audiosBankOne['Z']['url']),
        X: new Audio(this.audiosBankOne['X']['url']),
        C: new Audio(this.audiosBankOne['C']['url'])        
      },
      bankTwo: {
        Q: new Audio(this.audiosBankTwo['Q']['url']),
        W: new Audio(this.audiosBankTwo['W']['url']),
        E: new Audio(this.audiosBankTwo['E']['url']),
        A: new Audio(this.audiosBankTwo['A']['url']),
        S: new Audio(this.audiosBankTwo['S']['url']),
        D: new Audio(this.audiosBankTwo['D']['url']),
        Z: new Audio(this.audiosBankTwo['Z']['url']),
        X: new Audio(this.audiosBankTwo['X']['url']),
        C: new Audio(this.audiosBankTwo['C']['url']) 
      }
    };
    this.audioDescriber = {
      bankOne: {
        Q: this.audiosBankOne['Q']['id'],
        W: this.audiosBankOne['W']['id'],
        E: this.audiosBankOne['E']['id'],
        A: this.audiosBankOne['A']['id'],
        S: this.audiosBankOne['S']['id'],
        D: this.audiosBankOne['D']['id'],
        Z: this.audiosBankOne['Z']['id'],
        X: this.audiosBankOne['X']['id'],
        C: this.audiosBankOne['C']['id']       
      },
      bankTwo: {
        Q: this.audiosBankTwo['Q']['id'],
        W: this.audiosBankTwo['W']['id'],
        E: this.audiosBankTwo['E']['id'],
        A: this.audiosBankTwo['A']['id'],
        S: this.audiosBankTwo['S']['id'],
        D: this.audiosBankTwo['D']['id'],
        Z: this.audiosBankTwo['Z']['id'],
        X: this.audiosBankTwo['X']['id'],
        C: this.audiosBankTwo['C']['id'] 
      }
    }
  }

// constructor end, start methods
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress)
  };

  handleKeyPress(event) {
    if (document.getElementById(event['key'].toUpperCase()) === null) {
      return
    } else {
      document.getElementById(event['key'].toUpperCase()).click()
    };
  }

  handleVolumeChange(event) {
    this.setState({volume: event.target.value})
  }
  playAudio(event) {
    if(this.state.bank === 'One') {
      this.audioPlayer['bankOne'][event.target.id].volume = this.state.volume/100.0
      this.audioPlayer['bankOne'][event.target.id].play();
      this.setState({label: this.audioDescriber['bankOne'][event.target.id]})
      return;
    }
    if(this.state.bank === 'Two') {
      this.audioPlayer['bankTwo'][event.target.id].volume = this.state.volume/100.0
      this.audioPlayer['bankTwo'][event.target.id].play();
      this.setState({label: this.audioDescriber['bankTwo'][event.target.id]})
      return;
    }
    else {
      console.error("ERROR in audio player")
    }
  }
  changeBank() {
    if (this.state.bank === 'One') {
      this.setState({bank: 'Two'})
      return;
    }
    if (this.state.bank === 'Two') {
      this.setState({bank: 'One'})
      return;
    }
    else {
      console.error("Invalid bank state!")
      return;
    }
  }


// end methods, start JSX
  render() {
    return (
      <div className="App">
        <div id='drum-machine'>
          <div id='pad-container'>
            <button className='drum-pad' id='Q' onClick={this.playAudio}>Q</button>
            <button className='drum-pad' id='W' onClick={this.playAudio}>W</button>
            <button className='drum-pad' id='E' onClick={this.playAudio}>E</button>
            <button className='drum-pad' id='A' onClick={this.playAudio}>A</button>
            <button className='drum-pad' id='S' onClick={this.playAudio}>S</button>
            <button className='drum-pad' id='D' onClick={this.playAudio}>D</button>
            <button className='drum-pad' id='Z' onClick={this.playAudio}>Z</button>
            <button className='drum-pad' id='X' onClick={this.playAudio}>X</button>
            <button className='drum-pad' id='C' onClick={this.playAudio}>C</button>
          </div>
          <div id='control-panel'>
            <button className='controls-button' id='power-button'>Power</button>
            <input type='text' id='display'  value={this.state.label} readOnly></input>
            <div className='slider'>
              <input type='range' id='volume' name='volume' min='0' max='100' value={this.state.volume} onChange={this.handleVolumeChange} ></input>
              <label htmlFor='volume'>{this.state.volume}</label>
            </div>
            <button className='controls-button' id='bank' onClick={this.changeBank} >Bank</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

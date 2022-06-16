import './App.css';

function App() {
  return (
    <div className="App">
      <div id='drum-machine'>
        <div id='pad-container'>
          <button className='drum-pad'>butt</button>
          <button className='drum-pad'>butt</button>
          <button className='drum-pad'>butt</button>
          <button className='drum-pad'>butt</button>
          <button className='drum-pad'>butt</button>
          <button className='drum-pad'>butt</button>
          <button className='drum-pad'>butt</button>
          <button className='drum-pad'>butt</button>
          <button className='drum-pad'>butt</button>
        </div>
        <div id='control-panel'>
          <button id='power-button'>Power</button>
          <input type='text' id='display'></input>
          <div className='slider'>
            <input type='range' id='volume' name='volume' min='0' max='100'></input>
            <label for='volume'>this is the volume</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

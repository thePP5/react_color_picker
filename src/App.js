

import React, {useState} from 'react';



function App() {
  const [color, setColor] = useState();
  const divStyle = {backgroundColor: color};

  // const [input, setInput] = useState('');

  // const tellColor = ()=>{

  // }


  return (
    <div className="App">
      <div style={divStyle}>
      <p>The color is {color}</p>
      <button onClick={() => setColor('Aquamarine')}>
        Aquamarine
      </button>
      <button onClick={() => setColor('BlueViolet')}>
        BlueViolet
      </button>
      <button onClick={() => setColor('Chartreuse')}>
        Chartreuse
      </button>
      <button onClick={() => setColor('CornflowerBlue')}>
        CornflowerBlue
      </button>
      <button onClick={()=> setColor('White')}>
        Reset
      </button>
    </div>
    </div>
  );
}

export default App;

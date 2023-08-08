import { useState } from 'react';
import './App.css';
import { Rectangle } from './Rectangle';
import { AddColor } from './AddColor';
import './Rectangle.css';

function App() {

  const [color, setColor] = useState('white');

  return (
    <div>
      <Rectangle colorName={color} />
      <AddColor colorName={color} setColor={setColor} />
    </div>

  );
}

export default App;

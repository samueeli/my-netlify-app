import { useState } from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState<string>('');

  const getItem = async () => {
    const res = await fetch('/.netlify/functions/item');
    const { item } = await res.json();
    setItem(item.image);
  };

  return (
    <div className="App">
      <h2>Get Random Item</h2>
      <div className="itemCard" style={{ backgroundImage: `url(${item})` }}>
        {item === '' && '?'}
      </div>
      <p>
        <button onClick={getItem}>Get Random Item</button>
      </p>
    </div>
  );
}

export default App;

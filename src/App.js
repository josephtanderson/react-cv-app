import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [progress, setProgress ] = useState('1');
  function nextButton(e, progress) {
    e.preventDefault();
    setProgress((Number(progress) + 1).toString())
  }
  return (
    <div className="container">
      <Card Progress={progress} nextCard={nextButton} />
    </div>
  );
}

export default App;

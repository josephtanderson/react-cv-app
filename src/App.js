import React, { useState } from 'react';
import styled from 'styled-components'
import Card from './components/Card';

const Container = styled.section`
  background-color: aqua;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;`

function App() {
  const [progress, setProgress ] = useState('1');
  function nextButton(e, progress) {
    e.preventDefault();
    setProgress((Number(progress) + 1).toString())
  }
  return (
    <Container>
      <Card Progress={progress} nextCard={nextButton} />
    </Container>
  );
}

export default App;

import React, { useState} from 'react';
import styled from 'styled-components';
// import CVForm from './components/CVForm';
import CVPreview from './components/CVPreview';

const Container = styled.section`
  background-color: #eee;
  margin: 0;
  padding: 10vh 10vw;
  width: 80vw;
  `



  export default function App() {
    const [ color, setColor ] = useState("#a86fac");
    const handleColor = (e) => {
      setColor(e.target.value)
    }
  return (
    <Container>
      {/* <CVForm /> */}
      <CVPreview firstName="FIRSTNAME" lastName="Lastnamerson" accentColor={color} changeColor={handleColor} />
    </Container>
  );
}
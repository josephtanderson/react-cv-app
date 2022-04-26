import React from 'react';
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
  return (
    <Container>
      {/* <CVForm /> */}
      <CVPreview />
    </Container>
  );
}
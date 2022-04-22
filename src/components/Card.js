import React from 'react';
import styled from 'styled-components'
import GeneralForm from './GeneralForm';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';

export default function Card(props) {
    const StyledCard = styled.section`
        height: 80vmin;
        width: 80vmin;
        min-height: 250px;
        min-width: 250px;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;
    const checkProgress = (progress) => {
    console.log(progress)
    switch (progress) {
      case '1':
          console.log('1')
          return <GeneralForm />;
      case '2':
          console.log('2')
        return <EducationForm />;
      case '3':
          console.log('3')
        return <ExperienceForm />
        default:
            console.log('default')
    }
  }
  let currentCard=checkProgress(props.Progress)
  return(
    <StyledCard>
        {currentCard}
        <button className="button" onClick={(e) => props.nextCard(e, props.Progress)}>
            NEXT
        </button>
    </StyledCard>
  )
}
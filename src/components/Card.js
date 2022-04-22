import React from 'react';
import GeneralForm from './GeneralForm';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import './Card.css'

export default function Card(props) {
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
    <div className="card">
        {currentCard}
        <button className="button" onClick={(e) => props.nextCard(e, props.Progress)}>
            NEXT
        </button>
    </div>
  )
}
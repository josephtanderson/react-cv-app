import React, { useState } from "react";
import styled from 'styled-components';
import GeneralForm from './GeneralForm';
import EducationList from './EducationList';
import ExperienceList from './ExperienceList';

const StyledPreview = styled.section`
margin: 0 1vw;
padding: 4em;
aspect-ratio: 8.5/11;
border: 1px grey solid;
overflow: hidden;
display: grid;
grid-template-rows: 20% 40% 40%;
`
const SectionHeader = styled.h2`
font-size: 24px;
border-top: 5px black solid;
`


export default function CVPreview(props) {
    const [ name, setName ] = useState({
        firstName: 'FirstName',
        lastName: 'LastNamerson'
    })
    const [ general, setGeneral ] = useState({
        phone: '',
        email: '',
        linkedIn: '',
        social: ''
    });
    const [ education, setEducation ] = useState({
            institution: '',
            yearStart: '',
            yearEnd: '', 
            degree: ''
    });
    const [ experience, setExperience ] = useState({
            business: '',
            yearStart: '',
            yearEnd: '', 
            responsibilities: ''
    });
    const [ color, setColor ] = useState("#a86fac");
    const changeColor = (e) => {
      setColor(e.target.value)
    }
    return (
        <StyledPreview>
            <GeneralForm name={name} GeneralInfo={ general } setGeneral={ setGeneral } AccentColor={color} />
            <input style={{position: "absolute", left: "-10000px"}} type="color"  value={color} onInput={(e) => changeColor(e)} />
            <div>
                <SectionHeader style={{color: color}} onClick={(e) => {e.target.parentElement.previousSibling.click()}}>
                    EDUCATION
                </SectionHeader>
                <EducationList edu={ education } setEdu={ setEducation } />
            </div>
            <div>
                <SectionHeader style={{color: color}} onClick={(e) => {e.target.parentElement.previousSibling.previousSibling.click()}}>
                    EXPERIENCE
                </SectionHeader>
                <ExperienceList edu={ experience } setEdu={ setExperience } />
            </div>
        </StyledPreview>
    )
}
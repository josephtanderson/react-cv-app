import React from "react";
import styled from 'styled-components';
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


export default function CVPreview(props) {
    const SectionHeader = styled.h2`
        font-size: 36px;
        border-top: 5px black solid;
        color: ${props.accentColor};
        `
    return (
        <StyledPreview>
            <div style={{display: "grid", gridTemplateColumns: "1fr 30%", height: "fit-content", margin: "auto 0"}}>
                <div style={{fontSize: "72px", lineHeight: "56px"}}>
                    {props.firstName.toUpperCase()}<br />
                    <span style={{color: props.accentColor}} onClick={(e) => {e.target.parentElement.parentElement.nextSibling.click()}} >
                        {props.lastName.toUpperCase()}
                    </span>
                </div>
                <div style={{fontSize: "large", alignSelf: "center"}}>
                    Address:<br />
                    Phone:<br />
                    Email:<br />
                    linkedIn:<br />
                    Social:
                </div>
            </div>
            <input style={{position: "absolute", left: "-10000px"}} type="color"  value={props.accentColor} onInput={(e) => props.changeColor(e)} />
            <div>
                <SectionHeader onClick={(e) => {e.target.parentElement.previousSibling.click()}}>
                    EDUCATION
                </SectionHeader>
                <EducationList />
            </div>
            <div>
                <SectionHeader onClick={(e) => {e.target.parentElement.previousSibling.previousSibling.click()}}>
                    EXPERIENCE
                </SectionHeader>
                <ExperienceList />
            </div>
        </StyledPreview>
    )
}
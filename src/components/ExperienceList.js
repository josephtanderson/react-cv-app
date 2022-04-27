import React from 'react';
import styled from 'styled-components';
import GenerateForm from './GenerateForm';

const StyledExperience = styled.ul`
    font-size: 18px;
`

export default function ExperienceForm(props) {
    const { edu, setEdu } = props;
        return (
        <StyledExperience >
            <GenerateForm list={ edu } setMethod={ setEdu } />
            <button>Add More</button>
        </StyledExperience>
    )
}
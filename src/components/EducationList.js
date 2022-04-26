import React from 'react';
import styled from 'styled-components';
import GenerateForm from './GenerateForm';

const StyledEducation = styled.ul`
    font-size: 18px;
`

export default function EducationForm(props) {
    const { edu, setEdu } = props;
        return (
        <StyledEducation >
            <GenerateForm list={ edu } setMethod={ setEdu } />
        </StyledEducation>
    )
}
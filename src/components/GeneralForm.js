import React from 'react';
import styled from 'styled-components';
import GenerateForm from './GenerateForm';

const General = styled.div`
display: grid;
grid-template-columns: 1fr 40%;
height: fit-content;
margin: auto 0;
`
const StyledName = styled.div`
font-size: 36px;
line-height: 28px;
`

export default function GeneralForm(props) {
    const { GeneralInfo, setGeneral, name } = props;
    return (
        <General>
            <StyledName >
                {name.firstName.toUpperCase()}<br />
                <span style={{color: props.AccentColor}} onClick={(e) => {e.target.parentElement.parentElement.nextSibling.click()}} >
                    {name.lastName.toUpperCase()}
                </span>
            </StyledName>
            <div style={{fontSize: "medium", alignSelf: "center", display: "flex", justifyContent: "space-evenly"}}>
                <GenerateForm list={GeneralInfo} setMethod={setGeneral} labels={true} justification={"right"} />
            </div>
        </General>
    )
}


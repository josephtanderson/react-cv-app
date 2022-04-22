import React from 'react';
import styled from 'styled-components';

const General = styled.section`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
`

const CustomInput = styled.input`
outline: none;
border: none;
box-shadow: 0px 0px 5px #aaa;
margin-bottom: .5rem;
width: 100%;
`

export default function GeneralForm(props) {
    return (
        <div>
            <form>
                <General>
                    Name
                    <CustomInput />
                    Email
                    <CustomInput />
                    Address
                    <CustomInput />
                    Phone Number
                    <CustomInput />
                </General>
            </form>
        </div>
    )
}
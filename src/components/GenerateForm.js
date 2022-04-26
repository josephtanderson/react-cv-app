import React from 'react';
import fillInForm, { resetForm} from './fillInForm';
import styled from 'styled-components';

const StyledList = styled.ul`
list-style-type: none;
min-width: 230px;
`
const StyledListItem = styled.li`
display: flex;
margin: .2em;
background-color: #00000000;
border: none;
font-family: inherit;
font-weight: inherit;
font-style: inherit;
font-size: inherit;
`


export default function GenerateForm(props) {
    const { list, setMethod, labels } = props;
    let items = Object.keys(list);
    return (
        <StyledList>
            {items.map(item => {
                if (labels) {
                return <StyledListItem key={item}>
                    <span style={{marginRight: ".5em"}}>{item.split('').map((x, i) => i == 0 ? x.toUpperCase() : x).join('')} : </span>
                    <span onClick={(e) => { resetForm(item, list, setMethod) } }>
                        { list[item] || fillInForm(item, list, setMethod) }
                    </span>
                </StyledListItem>
                }
                return <StyledListItem key={item}>
                    <span onClick={(e) => { resetForm(item, list, setMethod) } }>
                        { list[item] || fillInForm(item, list, setMethod) }
                    </span>
                </StyledListItem>
            })}    
        </StyledList>
    )
}
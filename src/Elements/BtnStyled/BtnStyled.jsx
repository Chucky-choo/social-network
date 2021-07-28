import React from 'react';
import styled from 'styled-components'


const Btn = styled.button`
  background: ${props => props.primary ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.primary ? 'white' : 'black'};
  border: ${props => props.primary ? 'none' : '1px solid black'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 6px;
  transition: .5s;
  display: flex;
  align-items: center;

  &:active {
    background: ${props => props.primary ? 'rgb(77, 177, 249)' : 'rgba(189,187,187,0.58)'};
  }
  
  svg {
    margin: 0 4px 0 0;
    font-size:1.2em;
  }
`


const BtnStyled = (props) => {
  return <Btn {...props} >
    {props.children}
    </Btn>
    };

    export default BtnStyled;

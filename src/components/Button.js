import React from 'react'
import styled from 'styled-components';

const Button = (props) => {
  return (
    <ButtonWrapper href={props.href}>
        { props.text }
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.a`
    background-color: ${({theme}) => theme.dark};
    color: ${({ theme }) => theme.light};
    padding: 20px 30px;
`;

export default Button;
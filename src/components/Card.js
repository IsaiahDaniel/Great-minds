import React from 'react';
import styled from 'styled-components';
import cardImgOne from "../assets/card-img-1.jpg";
// import Button from './Button';

const Card = (props) => {
  return (
    <CardWrapper style={{ backgroundImage: `url(${cardImgOne})` }}>
        {/* <Button /> */}
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
    background: url("/assets/card-img-1.jpg");
`;

export default Card
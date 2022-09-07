import React from 'react'
import cardImgOne from '../assets/instagram-1.jpg'
import cardImgTwo from '../assets/instagram-2.jpg'
import cardImgThree from '../assets/card-img-3.jpg'
import styled from 'styled-components'

import './insights.css';



const Insights = () => {
  return (
    <Wrapper>
      <div>
        <h1 className="text-center">Insights</h1>
        <p className="text-center mb-4">Take a Peak at what we are trying to Accomplish</p>
      </div>
        <div className="grid-3 flex-column-sm text-center">
          <a href="https://www.instagram.com/p/Ch-Ii3Vj1l7/" target="_blank" rel="noreferrer">
            <img src={cardImgOne} height="500" alt="instagram-one" className="mr-3" data-aos="fade-up" />
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, perspiciatis.
            </Paragraph>
          </a>
          <a href='https://www.instagram.com/p/ChxkCd8jG6c/' target="_blank" rel="noreferrer">
            <img src={cardImgTwo} height="500" alt="instagram-one" className="mr-3" data-aos="fade-up" /> 
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, perspiciatis.
            </Paragraph>
          </a>
        </div>

        <div className="grid-3 flex-column-sm text-center">
          <div>
            <img src={cardImgOne} height="500" className="mr-3" alt="instagram-one" data-aos="fade-up" />
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, perspiciatis.
            </Paragraph>
          </div>
          <div>
            <img src={cardImgThree} height="500" className="mr-3" alt="instagram-two" data-aos="fade-up" />
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, perspiciatis.
            </Paragraph>
          </div>
          <div>
            <img src={cardImgTwo} height="500" className="mr-3" alt="instagram-three" data-aos="fade-up" /> 
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, perspiciatis.
            </Paragraph>
          </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 30px;
`;

const Paragraph = styled.p`

`;

export default Insights


// us-east-1
// us-east-2
// singapore
// eu-west-1
// tokyo
// frankfurt
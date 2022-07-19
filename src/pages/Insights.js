import React from 'react';
import cardImgOne from "../assets/card-img-1.jpg";
import cardImgTwo from "../assets/card-img-2.jpg";
import cardImgThree from "../assets/card-img-3.jpg";

import "./insights.css";

import styled from "styled-components";

const Insights = () => {
    return (
        <div className="flex-row mt-5 mb-5">
            <div className="flex-column container">
                <h2>Take a look at our insights...</h2>
                <p>
                    Discover the inspirational gallery we gathered from our community.
                </p>
                {/* <InsightsGrid>
                    <img src={cardImgThree} width="200" height="400" className="mr-3 item-1" />
                    <img src={cardImgOne} width="200" height="400" className="mr-3" />
                    <img src={cardImgTwo} width="200" height="400" className="mr-3" />
                    <img src={cardImgOne} width="200" height="400" className="mr-3 item-7" />
                    <img src={cardImgOne} width="200" height="400" className="mr-3" />
                    <img src={cardImgOne} width="200" height="400" className="mr-3" />
                    <img src={cardImgOne} width="200" height="400" className="mr-3" />
                    <img src={cardImgThree} width="200" height="400" className="mr-3 span-3" />
                    <img src={cardImgOne} width="200" height="400" className="mr-3" />
                    <img src={cardImgOne} width="200" height="400" className="mr-3" />
                    <img src={cardImgTwo} width="200" height="400" className="mr-3" />
                    <img src={cardImgOne} width="200" height="400" className="mr-3" />
                    <img src={cardImgThree} width="200" height="400" className="mr-3 span-1" />
                </InsightsGrid> */}

                <InsightsGrid>
                    <img src={cardImgThree} width="200" height="400" className="mr-3 item-1" />
                    <img src={cardImgOne} width="200" height="400" className="mr-3" />
                    <img src={cardImgTwo} width="200" height="400" className="mr-3" />
                    <img src={cardImgOne} width="200" height="400" className="mr-3 item-7" />
                    <img src={cardImgOne} width="200" height="400" className="mr-3" />
                    <img src={cardImgOne} width="200" height="400" className="mr-3" />
                    <img src={cardImgOne} width="200" height="400" className="mr-3" />
                    <img src={cardImgThree} width="200" height="400" className="mr-3 span-3" />
                    <img src={cardImgOne} width="200" height="400" className="mr-3" />
                    <img src={cardImgOne} width="200" height="400" className="mr-3" />
                    <img src={cardImgTwo} width="200" height="400" className="mr-3" />
                    <img src={cardImgOne} width="200" height="400" className="mr-3" />
                </InsightsGrid>

            </div>
        </div>
    )
}

const InsightsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

export default Insights;
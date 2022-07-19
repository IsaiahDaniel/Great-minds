import React from 'react';
import Button from '../components/Button';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Card from '../components/Card';

import cardImgOne from "../assets/kids-reading.jpeg";
import cardImgTwo from "../assets/kids-2.jpeg";
import cardImgThree from "../assets/card-img-2.jpg";
import NewsLetter from '../components/NewsLetter';

const Home = () => {
  return (
    <div>
        <Showcase>
            <div className="container">
                <div className='text-white w-70 w-100-sm flex-column'>
                    <div>
                        <h3 className='lg-heading text-lg-sm text-center-sm'>Lets Grow together</h3>
                        <p className="text-center-sm">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla laboriosam, Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, alias? aliquam sunt delectus quidem qui animi?
                        </p>
                        <br />
                        <div className="text-center-sm">
                            <Button 
                                text="Learn More"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Showcase>

        <div className='container'>
            <h3 className="sm-heading text-center mt-5">Find The Help You Need</h3>
            <p className="text-center">From Experts to novice, there's something for everyone in our Club.</p>

            <div className="grid-3 flex-column-sm text-center">
                <img src={cardImgOne} height="500" className="mr-3 mb-3" />
                <img src={cardImgThree} height="500" className="mr-3 mb-3" />
                <img src={cardImgTwo} height="500" className="mr-3 mb-3" /> 
            </div>

        </div>

        <div className='container flex-row flex-column-sm mt-5'>
            <div className="mr-2">   
                <h3>OUR STORY</h3>
                <h1 className="md-heading">
                    It's all about what they love the most...
                </h1>
                <p className="lead">
                    We are a Reading brand and online store that specialises in all kinds of items for kids. Our goal is to help children grow and feel comfortable in a world full of play, freedom, and fun. We are dedicated to helping children of all ages enjoy the things that they love most. At the end of the day, we are about making the world a better place.
                </p>
                <br />
                <Button text="Discover" />
            </div>

            <div width="200" height="400" className="mt-4">
                <img src={cardImgThree} style={{ width: "300px" }} />
            </div>
            

        </div>

        <div className='container mt-5'>
            <div className="mr-2">   
                <h1 className="md-heading text-center mb-4">
                    An inside look to our inspirational gallery...
                </h1>
                <div className="grid-3">
                    <img src={cardImgOne} width="200" height="400" className="mr-3" />
                    <img src={cardImgTwo} width="200" height="400" className="mr-3" />
                    <img src={cardImgOne} width="200" height="400" className="mr-3" />
                    <img src={cardImgOne} width="200" height="400" className="mr-3" />
                    <img src={cardImgOne} width="200" height="400" className="mr-3" />
                </div>
            </div>

            <div className="mt-5 mb-5 text-center">
                <Button text="Discover" />
            </div>

        </div>

        {/* <div className="container">
            <NewsLetter />
        </div> */}


    </div>
  )
}

const Showcase = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/assets/showcase.jpg");
    background-position: center;
    background-size: cover;
    height: 70vh;
` ;

export default Home
import React from 'react';
import Button from '../components/Button';


import cardImgThree from "../assets/ceo.jpeg";



const About = () => {
  return (
    <>
      <div className='container text-center mt-5'>
        <h2>Quality, that makes a difference</h2>
        <p className="lead mb-5">
          We have made quality our habit. It’s not something that we just strive for – we live by this principle every day.
        </p>

        <div className="grid-3 flex-column-sm text-center display-none-lg">
            <img src={cardImgThree} height="500" className="mr-3 mb-3" /> 
        </div>

        <div className='flex-row flex-column-sm mt-5 mr-5'>

          <div className="mr-5 w-100">
            <img src={cardImgThree} style={{ width: "460px", height: "570px", objectFit: "cover", margin: "auto" }} class="image-sm" />
          </div>

          <div className="w-100">
            <h1 className="md-heading text-left">
              Mrs Olamibo D. Balogun
            </h1>
            <p className="lead text-justify">
              Olamibo  Balogun is an Educationist, Trainer, Counsellor, Consultant and the founder of Great Minds Literacy Readers.
              .  She holds post graduate diploma in English education (PGDE), B.ED.
              She is a Chartered Teacher with her qualification certificate from the Teachers Registration Council (TRC).

              Also founder of Eminent minds Empowerment Initiative.
            </p>
            <p className="lead text-justify">
              Author of book on sexual abuse
              She is a seasoned administrar, a leader and goal oriented team player with motivational and interpersonal skills that is geared towards achieving success for any organisation.

              The brain behind the Vocabulary Bee in Abuja that started in 2018.

              Also an advocate for Girl Child Education, Women Emancipation and Empowerment.

              Aside reading, she derives joy in counselling young girls and women. She is also a lover of God.
            </p>
            <br />

          </div>



        </div>

        <div className="text-justify mb-5">
          <p>
            Great Minds Literacy Readers was established on the 11th of November , 2017. Owned by Mrs Olamibo D. Balogun

            As a child advocate centre, our aim is to foster love for reading by providing developmental books for children and exposing the benefits of reading to as many people as possible through result based strategies for quality and sound learning.

            We desire to create a new operating system and instill values of Character, Responsibility, Excellence, Empathy and Discipline [CREED].
          </p>

          <p>
            Great Minds Literacy Readers organizes a yearly   vocabulary bee and held her 1st Edition of vocabulary bee in 2018 with the Theme: Words Changes the World, 2nd Edition in 2019 Theme: Win with Words, 3rd Edition in 2020 Voice of the Voiceless Abuja with the Theme: Power of Words and 4th Edition Voice of the Voiceless Ondo state July, 2021 and Voiced and Voiceless Vocabulary Bee Abuja 2021 Theme: Shine with Words.
          </p>

          <div>
            <h3>Mission:</h3> <br />  
            As a child advocate centre, our aim is to foster love for reading by providing developmental books for children and exposing the benefits of reading to as many people as possible through result based strategies for quality and sound learning.
            We desire to create a new operating system and instill values of Character, Responsibility, Excellence, Empathy and Discipline [CREED].
          </div>

          <div className="text-right">
            <h3>With love.</h3> <br />
            <h3>Mrs Olamibo D. Balogun</h3>
          </div>

        </div>


      </div>
    </>
  )
}

export default About
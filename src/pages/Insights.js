import React from 'react'
import cardImgOne from '../assets/card-img-1.jpg'
import cardImgTwo from '../assets/card-img-2.jpg'
import cardImgThree from '../assets/card-img-3.jpg'

import './insights.css';

import styled from 'styled-components'

const Insights = () => {
  return (
    <div className='wrapper'>
      {/* <div className="flex-row mt-5 mb-5">
        <div className="flex-column container">
          <h2>Take a look at our insights...</h2>
          <p>
            Discover the inspirational gallery we gathered from our community.
          </p>

          <InsightsGrid>
            <img
              src={cardImgThree}
              width="200"
              height="400"
              className="mr-3 item-1"
            />
            <img src={cardImgOne} width="200" height="400" className="mr-3" />
            <img src={cardImgTwo} width="200" height="400" className="mr-3" />
            <img
              src={cardImgOne}
              width="200"
              height="400"
              className="mr-3 item-7"
            />
            <img src={cardImgOne} width="200" height="400" className="mr-3" />
            <img src={cardImgOne} width="200" height="400" className="mr-3" />
            <img src={cardImgOne} width="200" height="400" className="mr-3" />
            <img
              src={cardImgThree}
              width="200"
              height="400"
              className="mr-3 span-3"
            />
            <img src={cardImgOne} width="200" height="400" className="mr-3" />
            <img src={cardImgOne} width="200" height="400" className="mr-3" />
            <img src={cardImgTwo} width="200" height="400" className="mr-3" />
            <img src={cardImgOne} width="200" height="400" className="mr-3" />
          </InsightsGrid>
        </div>
      </div> */}

      <div class="testimonials">
        <div class="card card--bg--purple">
          <header class="card__header">
            <img src="images/image-daniel.jpg" class="card__img" alt="" />
            <div>
              <h3>Daniel CLifford</h3>
              <p>Verified Graduate</p>
            </div>
          </header>
          <p class="card__lead">
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny's worth.
          </p>
          <p class="card__quote">
            "I was an EMT for many years before I joined the bootcamp. I've been
            looking to make a transition and have heard some people who had an
            amazing experience here. I signed up for the free intro course and
            found it incredibly fun! I enrolled shortly thereafter. The next 12
            weeks was the best - and most grueling - time of my life. Since
            completing the course, I've successfully switched careers, working
            as a Software Engineer at a VR startup."
          </p>
        </div>

        <div class="card card--bg--gray-blue">
          <header class="card__header">
            <img src="images/image-jonathan.jpg" class="card__img" alt="" />
            <div>
              <h3>Jonathan Walters</h3>
              <p>Verified Graduate</p>
            </div>
          </header>
          <p class="card__lead">
            The team was very supportive and kept me motivated
          </p>
          <p class="card__quote">
            "I started as a total newbie with virtually no coding skills. I now
            work as a mobile engineer for a big company. This was one of the
            best investments I've made in myself."
          </p>
        </div>

        <div class="card">
          <header class="card__header">
            <img src="images/image-jeanette.jpg" class="card__img" alt="" />
            <div>
              <h3>Jeanette Harmon</h3>
              <p>Verified Graduate</p>
            </div>
          </header>
          <p class="card__lead">
            An overall wonderful and rewarding experience
          </p>
          <p class="card__quote">
            "Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love."
          </p>
        </div>

        <div class="card card--bg-black-blue">
          <header class="card__header">
            <img src="images/image-patrick.jpg" class="card__img" alt="" />
            <div>
              <h3>Patrick Adams</h3>
              <p>Verified Graduate</p>
            </div>
          </header>
          <p class="card__lead">
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experiences was
            easy.
          </p>
          <p class="card__quote">
            "The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart
            and amazing people."
          </p>
        </div>

        <div class="card">
          <header class="card__header">
            <img src="images/image-kira.jpg" class="card__img" alt="" />
            <div>
              <h3>Kira Whittle</h3>
              <p>Verified Graduate</p>
            </div>
          </header>
          <p class="card__lead">
            Such a life-changing experience. Highly recommended!
          </p>
          <p class="card__quote">
            "Before joining the bootcamp, I've never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I've often referred to it during interviews as an
            example of my developent experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend!"
          </p>
        </div>
      </div>
    </div>
  )
}

const InsightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

export default Insights

// <div class="card">
//     <header class="card__header">
//         <img src="images/image-kira.jpg" class="card__img" alt="" />
//         <div>
//             <h3>Kira Whittle</h3>
//             <p>Verified Graduate</p>
//         </div>
//     </header>
//     <p class="card__lead">
//         Such a life-changing experience. Highly recommended!
//       </p>
//       <p class="card__quote">
//         "Before joining the bootcamp, I've never written a line of code. I
//         needed some structure from professionals who can help me learn
//         programming step by step. I was encouraged to enroll by a former
//         student of theirs who can only say wonderful things about the program.
//         The entire curriculum and staff did not disappoint. They were very
//         hands-on and I never had to wait long for assistance. The agile team
//         project, in particular, was outstanding. It took my learning to the
//         next level in a way that no tutorial could ever have. In fact, I've
//         often referred to it during interviews as an example of my developent
//         experience. It certainly helped me land a job as a full-stack
//         developer after receiving multiple offers. 100% recommend!"
//       </p>
//     </div>
// </div>

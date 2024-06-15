import React from 'react'
import styled from 'styled-components'
// import Button from './Button';
import { BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <div className="mt-5 text-center text-white">
          <div className="container grid-3">
            <div>
              <h3>Address</h3>
              <p>Trademore avenue trademore estate along von garden estate off airport road, Lugbe FCT Abuja</p>
            </div>

            {/* <div>
                            <h3>FAQS</h3>
                            <ul>
                                <li className="mb-2">3721 Single Street</li>
                                <li className="mb-2">What is the differnce between brilliant minds and </li>
                                <li className="mb-2">What is the differnce between brilliant minds and </li>
                            </ul>
                        </div> */}

            <div>
              <h3>Contacts</h3>
              <p>+234 806 235 9404</p>
              <p>info@brilliantminds.com</p>
            </div>

            <a
              href="https://www.instagram.com/greatmindsliteracyreaders/"
              target="_blank"
              style={{ textDecoration: 'none', color: '#fff' }}
              rel="noreferrer"
            >
              <h3>Socials</h3>

              <br />

              
                <a href='https://www.instagram.com/greatmindsliteracyreaders?igsh=MXQ3OGIzeW5tOXNhdQ==' target='_blank' style={{ marginRight: 10 }}>
                  <BsInstagram size="20" color='#fff' />
                </a>
                <a href='https://www.facebook.com/greatminds.literacyreaders.1?mibextid=ZbWKwL' target='_blank' style={{ marginRight: 10 }}>
                  <BsFacebook size="20" color='#fff' />
                </a>
                <a href='https://youtube.com/@greatmindsliteracyreaders3977?si=xjjMNkP54mIg4Ouw' target='_blank' style={{ marginRight: 10 }}>
                  <BsYoutube size="20" color='#fff' />
                </a>

                {/*   */}
              

            </a>

            {/* <div>
                    <h3>Subscribe to our newsletter</h3>
                    <form>
                        <Input type="text" className="form-control mb-4" />
                        <Button text="submit"  />
                    </form>
                </div> */}
          </div>
        </div>
      </FooterWrapper>
      <div className="footer-bottom text-center text-white bg-dark p-2">
        <h3>GreatMinds Literacy Reader &copy; 2021</h3>
      </div>
    </>
  )
}

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.dark};
  padding: 20px;
`

// const Input = styled.input`
//     padding: 10px 20px;
//     width: 100%;
// `;

export default Footer

import React from 'react';
import styled from 'styled-components';
// import Button from './Button';
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <FooterWrapper>
                <div className="mt-5 text-center text-white">
                    <div className="container grid-3">

                        <div>
                            <h3>Address</h3>
                            <p>
                                3721 Single Street
                                Quincy, MA 02169
                            </p>
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
                            <p>
                                +234567392021
                            </p>
                            <p>
                                info@brilliantminds.com
                            </p>
                        </div>

                        <a href='https://www.instagram.com/greatmindsliteracyreaders/' target="_blank" style={{ textDecoration: "none", color: "#fff" }}  rel="noreferrer">
                            <h3>Socials</h3>
                            <br />
                            <BsInstagram size="20" />
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
    );
}

const FooterWrapper = styled.footer`
    background-color:  ${({ theme }) => theme.dark};
    padding: 20px;
`;

// const Input = styled.input`
//     padding: 10px 20px;
//     width: 100%;
// `;

export default Footer;
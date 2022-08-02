import React from 'react'
import ContactImg from "../assets/contact-us.jpg";
import Button from '../components/Button';

const Contact = () => {
  return (
    <>
        <div className="flex-row flex-column-sm">
            <img src={ContactImg} alt="" className="w-50 w-100-sm h-100" />
            <div className="flex-column container">
                <h2>Get In Touch</h2>
                <form action="#" className="w-100-sm mb-4">
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" className='form-control w-100-sm' />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Your Email</label>
                        <input type="text" className='form-control w-100-sm' />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Your Message</label>
                        <textarea type="text" className='form-control w-100-sm' rows="10"></textarea>
                    </div>

                    <Button text="Submit" />

                </form>
            </div>
        </div>
    </>
  )
}

export default Contact
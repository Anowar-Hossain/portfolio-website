import React from 'react';
import shack from '../../images/shack.jpg'
import './Contact.css';

const Contact = () => {
    const handleSubmit = e => {
        e.preventDefault();
        
    }
    return (
        <div className="contact">
            <div className="left">
                <img className="c-img" src={shack} alt="" />
            </div>
            <div className="right">
                <form onSubmit={handleSubmit}>
                    <h2>Contact</h2>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <h4 className='footer_main'>Questions? Call 000-800-919-1694</h4>
        <div className="footer_container">
            <div className="section">
            <ul>
                <li href="/">FAQ</li>
                <li href="/">Investor Relations</li>
                <li href="/">Privacy</li>
                <li href="/">Speed Test</li>
            </ul>
            </div>
            <div className="section">
                <ul>
                    <li href="/">Help Center</li>
                    <li href="/">Jobs</li>
                    <li href="/">Cookie Preferences</li>
                    <li href="/">Legal Notices</li>
                </ul>
            </div>
            <div className="section">
                <ul>
                <li href="/">Account</li>
                <li href="/">Ways to Watch</li>
                <li href="/">Corporate Information</li>
                <li href="/">Only on Netflix</li>
                </ul>
            </div>
            <div className="section">
                <ul>
                <li href="/">Media Center</li>
                <li href="/">Terms of use</li>
                <li href="/">Contact Us</li>
                </ul>
            </div>
        </div>
        <h5 className='footer_end'>Netflix</h5>
    </div>
  )
}

export default Footer
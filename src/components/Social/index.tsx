import React from 'react';
import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";
import "./style.scss";

function Social() {
    return (
        <div className="social-overlay">
            <ul className="social-overlay-list">
                <li className="social-overlay-item">
                    <a target="_blank" className="social-overlay-item-icon-holder" href="https://github.com/matteolutz" rel="noreferrer"><FaGithub className="social-overlay-item-icon" /></a>
                </li>

                <li className="social-overlay-item">
                    <a target="_blank" className="social-overlay-item-icon-holder" href="https://www.linkedin.com/in/matteo-lutz-b19355249/" rel="noreferrer"><FaLinkedin className="social-overlay-item-icon" /></a>
                </li>

                <li className="social-overlay-item">
                    <a className="social-overlay-item-icon-holder" href="mailto:info@matteolutz.de"><FaEnvelope className="social-overlay-item-icon" /></a>
                </li>
            </ul>
        </div>
    );
}

export default Social;
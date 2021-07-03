import React from 'react';
import {FaLinkedin,FaGithub,FaTwitterSquare,FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-black px-5 py-8 flex justify-between rounded-t-md flex-col md:flex-row">
            <h1 className="text-white">Made With &#10084;&#65039; By Ganapati</h1>
            <div className="text-white order-last mt-0.5 flex ">
            <a className="text-white px-2" href="https://www.linkedin.com/in/ganapati-biswas-b958971a1/" target="_blank">
             <FaLinkedin size="2em"/>
            </a>
            <a className="text-white px-2" href="https://github.com/Ganapati-Biswas" target="_blank">
             <FaGithub size="2em"/>
            </a>
            <a className="text-white px-2" href="https://twitter.com/GanapatiBiswas8" target="_blank">
             <FaTwitterSquare size="2em"/>
            </a><a className="text-white px-2" href="https://www.facebook.com/ganapati.biswas.3766" target="_blank">
             <FaFacebookSquare size="2em"/>
            </a>
            </div>
        </div>
    )
}

export default Footer

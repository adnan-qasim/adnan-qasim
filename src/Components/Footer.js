import React from 'react'
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { FaGithub } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer id="footer" className="mt-32 md:px-16 pb-5">
            <h2 className="text-center mb-6 -rotate-2 font-permanent-marker ">Don't forget to follow me..</h2>
            <div className="grid md:grid-cols-5 gap-4 pb-6 md:pb-0">
                <div className="order-2 md:order-1 md:col-span-2 text-gray-400 md:py-6 text-center md:text-left">
                    Pascal van Gemert © <span className="md:hidden lg:inline-block">| all rights reserved</span>
                </div>
                <div className="order-1 md:order-2 bg-yellow-400 p-6 text-black flex gap-5 m-auto font-bold mb-3 md:mb-0">
                    <a href="https://twitter.com/pascalvgemert" aria-label="Twitter">
                        <i className="text-3xl icon-twitter-1 hover:text-white"><CiTwitter /></i>
                    </a>
                    <a href="https://linkedin.nl/in/pascalvgemert" aria-label="Linkedin" >
                        <i className="text-3xl icon-linkedin-1 hover:text-white"><CiLinkedin /></i>
                    </a>
                    <a href="https://github.com/pascalvgemert" aria-label="Github">
                        <i className="text-3xl icon-github-circled hover:text-white"><FaGithub /></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
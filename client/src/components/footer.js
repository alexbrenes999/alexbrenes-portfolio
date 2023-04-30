import React from 'react';
import linkein from '../images/linkedinlogo.png';
import logo from '../images/@logo.png';
import gitty from '../images/githublogo.png';

function Footer() {
    return (
        <div>
            <div className="p-5 bg-emerald-900 text-black">
            <ul className="flex justify-center space-x-10">
                <a href="https://github.com/alexbrenes999">
                    <img className="w-14 h-14" src={gitty}/>
                    <li className="text-center">GitHub</li>
                </a>
                <a href="https://www.linkedin.com/in/alexander-brenes-pimentel-59979622a/">
                    <img className="w-14 h-14" src={linkein}/>
                    <li className="text-center">LinkedIn</li>
                </a>
                <a href="mailto:alexbrenes2002@gmail.com">
                    <img className="w-14 h-14" src={logo}/>
                    <li className="text-center">Email</li>
                </a>
            </ul>
            </div>

            <footer className="bg-emerald-900 pb-10">
                <h1 className="flex justify-center text-2xl">&#169 2023 Alex Brenes</h1>
            </footer>
        </div>
    );
}

export default Footer;
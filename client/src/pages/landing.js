import React from "react";
import stud from '../images/studiiiimufinnn.PNG';

function Landing() {
    return (
        <div className="bg-zinc-900 text-gray-300">
            <div className="spacer2 newspk mt-14"></div>

            <div className="">
                <h1 className="flex justify-center text-7xl">ALEX BRENES</h1>
                <img className="block ml-auto mr-auto" src={stud}/>
                <p className="flex justify-center text-5xl font-bold pb-12">THE SPIEL OF A FULL STACK WEB DEVELOPER</p>
            </div>

            <div className="pt-16 pb-8">
                <div className="text-4xl">
                    <p className="flex justify-center">Full-Stack Web Developer | MERN Stack</p>
                    <p className="flex justify-center">Always hungry to learn more | UCF Bootcamp</p>
                    <p className="flex justify-center">Graduate | Pixel Aesthetic Aficionado</p>
                </div>
            </div>

            <div className="pt-8">
                <div className="text-4xl">
                    <p className="flex justify-center">For the last 6 months I've been making</p>
                    <p className="flex justify-center">my journey to becoming a Full-Stack Web</p>
                    <p className="flex justify-center">Developer by challenging myself to learn</p>
                    <p className="flex justify-center">multiple high-level languages and skills</p>
                    <p className="flex justify-center">in short amounts of time.</p>
                </div>
            </div>
        </div>
    );
}

export default Landing;
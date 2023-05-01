import React from "react";
import quiz from '../images/codequz.gif';
import gamespot from '../images/gmspott.gif';
import hori from '../images/horiseon.gif';
import papayon from '../images/papayon port.gif';
import threejsdemo from '../images/threejsdemo.gif';
import schedule from '../images/wrksche.gif';

function Portfolio() {
    return (

        <div className="bg-zinc-900 text-gray-300">
            <div className="flex justify-center">
                <h2 className="underline999 text-5xl pb-20">Portfolio</h2>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                <div className="pr-16 pl-32 py-5">
                    <img href="https://alexbrenes999.github.io/project1/"
                            className="gamespot rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl"
                            src={gamespot} alt="controller"/>
                </div>
                <div className="pl-16 pr-32 py-5">
                    <img href="https://papayon-app.herokuapp.com/" className="papayon port rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl"
                            src={papayon} alt="pizza"/>
                </div>
                <div className="pr-16 pl-32 py-5">
                    <a href="https://alexbrenes999.github.io/code-quiz/"><img className="rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl"
                            src={quiz} alt="code screen"/></a>
                </div>
                <div className="pl-16 pr-32 py-5">
                    <a href="https://alexbrenes999.github.io/work-day-schedule/"><img className="rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl"
                            src={schedule} alt="calendar"/></a>
                </div>
                <div className="pr-16 pl-32 py-5">
                    <a href="https://www.google.com"><img className="rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl"
                            src={hori} alt="businessmen"/></a>
                </div>
                <div className="pl-16 pr-32 py-5">
                    <a href="https://www.google.com"><img className="rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl"
                            src={threejsdemo} alt="orb"/></a>
                </div>
            </div>

            <div className="flex justify-center">
                <a href=""><h2 className="hover:scale-105 underline pt-5 text-xl">View All</h2></a>
            </div>
        </div>
    )};

    export default Portfolio;
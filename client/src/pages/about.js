import React from "react";

function About() {
    return (
        <div className="bg-zinc-900 text-gray-300">

            {/* <!--Title--> */}
            <h2 className="underline999 text-5xl flex justify-center pb-20">About</h2>

            {/* <!--About Sections--> */}
            <div className="text-4xl">

                {/* <!--About Section #1--> */}
                <div className="p-16">
                    <p className="flex justify-center">Born and raised in Costa Rica, I didn't have</p>
                    <p className="flex justify-center">any access to much technology. Nevertheless,</p>
                    <p className="flex justify-center">I taught myself the basics of computer</p>
                    <p className="flex justify-center">hardware by cracking open old PC cases in</p>
                    <p className="flex justify-center">school, libraries, etc. and slowly</p>
                    <p className="flex justify-center">understood how they functioned.</p>
                </div>

                {/* <!--About Section #2--> */}
                <div className="p-16">
                    <p className="flex justify-center">Once I moved to the US I began</p>
                    <p className="flex justify-center">teaching others about PCs, guiding</p>
                    <p className="flex justify-center">them through the build process, and</p>
                    <p className="flex justify-center">even built a few PCs for clients once I</p>
                    <p className="flex justify-center">became more knowledgeable. After</p>
                    <p className="flex justify-center">learning so much about the hardware</p>
                    <p className="flex justify-center">components of computers, I couldn't</p>
                    <p className="flex justify-center">help but to spike curiosity in the</p>
                    <p className="flex justify-center">power of it's software.</p>
                </div>

                {/* <!--About Section #3--> */}
                <div className="pt-16">
                    <p className="flex justify-center">More recently, I joined the UCF</p>
                    <p className="flex justify-center">Bootcamp where I've been learning skills</p>
                    <p className="flex justify-center">to direct me in becoming a Full-Stack</p>
                    <p className="flex justify-center">Web Developer.</p>
                </div>
            </div>
        </div>
)};

export default About;
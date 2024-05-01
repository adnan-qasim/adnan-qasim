import React from 'react'

const About = () => {
    return (
        <div className='w-full flex justify-center items-center'>
            <section className="flex flex-col items-center justify-center min-h-screen py-16 w-[900px]">
                <div className="container grid md:grid-cols-3 gap-8 items-center">
                    <div className="avatar px-12 md:px-0">
                        <img className="rounded-full" alt="My avatar" src="https://media.licdn.com/dms/image/D4D03AQFZOHUFDeOaUA/profile-displayphoto-shrink_800_800/0/1714039439037?e=1720051200&v=beta&t=7LMBH3DO8yOcb5Bf68tGNssro8ZgDHcuKu9mO7XMnqY" />
                    </div>
                    <div className="introduction  md:col-span-2">
                        <h2 className="inline-block bg-yellow-400 py-2 px-4 md:-ml-4 mb-4 text-lg font-bold uppercase font-permanent-marker">About me</h2>
                        <p className="text-lg leading-loose font-work-sans">
                            Hi, my name is <strong>Pascal van Gemert</strong>. I'm a Creative / Full Stack Developer from the Netherlands. Over the years, I've developed a skill set in a range of technologies and frameworks, including <strong>Laravel</strong>, <strong>VueJS</strong>, and <strong>Tailwind</strong>. I really value clean and readable code. Also, I'm very passionate about <strong>UX / UI</strong>. And last but not least, I am the proud father of two boys. I enjoy playing sports, and I'm a little bit of a geek now and then.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
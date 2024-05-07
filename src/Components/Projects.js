import React, { useState } from 'react';

const Projects = () => {
    const [active, setActive] = useState(0);
    const data = [
        {
            image: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg',
            name: 'John Doe',
            work: 'Designer',
            title: 'Project Title',
            Paragraph: 'Project Description',
        },
        {
            image: 'https://i.pinimg.com/originals/cd/bc/f0/cdbcf077b62246123f74fcc919587b0b.jpg',
            name: 'Jane Smith',
            work: 'Developer',
            title: 'Project Title',
            Paragraph: 'Project Description',
        },
        {
            image: 'https://www.godai.gr.jp/imgacademy/img/gallery/gallery_03.jpg',
            name: 'Alice Johnson',
            work: 'Manager',
            title: 'Project Title',
            Paragraph: 'Project Description',
        },
    ];

    const MAX_VISIBILITY = 2;
    const count = data.length;

    return (
        <>
            <section id="projects" className="sm:min-h-screen pt-5">
                <div className="flex justify-center items-center m-auto">
                    <div className="container grid md:grid-cols-6 gap-8 items-center">
                        <div className="text-center w-full md:col-span-6">
                            <h2 className="inline-block bg-yellow-400 py-2 px-4 md:-ml-4 mb-2 text-lg font-bold uppercase font-permanent-marker">Projects</h2>
                        </div>
                        <div className="md:col-start-3 md:col-span-4">
                            <p className="ml-px text-xl text-gray-500">Projects I’ve worked on in my career and where I am very proud of, I must say.</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center overflow-hidden bg-gradient-to-br font-montserrat relative'>
                    {active > 0 && (
                        <button
                            className='absolute left-1 sm:left-[30px] top-[40%] transform -translate-y-1/2 text-[#15803D] text-4xl sm:text-5xl z-40 cursor-pointer'
                            onClick={() => setActive(i => i - 1)}
                        >
                            &lt;
                        </button>
                    )}
                    <div className='relative w-[400px] sm:w-[600px] md:w-[600px] lg:w-[900px] h-[60vh] sm:h-[100vh] perspective-500 transform-style-preserve-3d py-10'>
                        {data.map((item, i) => (
                            <div
                                key={i}
                                className='absolute w-full transform transition-transform duration-300 border border-white '
                                style={{
                                    '--offset': (active - i) / 2,
                                    '--abs-offset': Math.abs(active - i) / 2,
                                    '--direction': Math.sign(active - i),
                                    '--active': i === active ? 1 : 0,
                                    'transform': `
                                        rotateY(calc(var(--offset) * 50deg))
                                        scaleY(calc(1 + var(--abs-offset) * -0.4))
                                        translateZ(calc(var(--abs-offset) * -30rem))
                                        translateX(calc(var(--direction) * -5rem))
                                    `,
                                    'filter': `blur(calc(var(--abs-offset) * 1rem))`,
                                    'pointerEvents': active === i ? 'auto' : 'none',
                                    'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                                    'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
                                    'zIndex': i === active ? 30 : 1, // Set z-index of active card to 30, others to 1
                                }}
                            >
                                <div className="w-full p-5 sm:p-8 rounded-lg shadow-lg">
                                    <div className="gap-5 sm:items-center ">
                                        <img
                                            src={item.image}
                                            alt="people"
                                            className="pb-5 w-[90vw] sm:h-[50vh] sm:w-[65vw] sm:m-auto  md:m-0"
                                        />
                                        <div>
                                            <h1>Name: {item.name}</h1>
                                            <div className="flex gap-3">
                                                <p>Work: {item.work}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <h1>Project Title: {item.title}</h1>
                                        <p>Project Description: {item.Paragraph}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {active < count - 1 && (
                        <button
                            className='absolute right-1 sm:right-[30px] top-[40%] transform -translate-y-1/2 text-[#15803D] text-4xl sm:text-5xl z-40 cursor-pointer'
                            onClick={() => setActive(i => i + 1)}
                        >
                            &gt;
                        </button>
                    )}
                </div>
            </section>
            <section id="support" className="pt-8 w-full">
                <div className=" flex flex-col gap-8 w-full items-center">
                    <div className="text-center">
                        <h2 className="inline-block border-b-2 border-yellow-400 py-2 px-4 md:-ml-4 mb-2 text-lg font-bold uppercase font-permanent-marker">Do you love this website?</h2>
                    </div>
                    <div className="flex justify-center ">
                        <p className="ml-px text-xl sm:w-[600px] leading-8 text-gray-500">
                            If you want to use this template for your own personal website, you can purchase an anonymous, customizable version for only € ??.??. The template comes with a readme that explains how to get it up and running and make any necessary changes.
                        </p>
                    </div>
                    <div className="mt-4 text-center">
                        <span className="font-bold uppercase">Coming soon</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects;






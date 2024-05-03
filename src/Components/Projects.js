// import React, { useState } from 'react';

// const Projects = () => {
//     const [active, setActive] = useState(0);
//     const data = [
//         {
//             image: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg',
//             name: 'John Doe',
//             work: 'Designer',
//             title: 'Project Title',
//             Paragraph: 'Project Description',
//         },
//         {
//             image: 'https://i.pinimg.com/originals/cd/bc/f0/cdbcf077b62246123f74fcc919587b0b.jpg',
//             name: 'Jane Smith',
//             work: 'Developer',
//             title: 'Project Title',
//             Paragraph: 'Project Description',
//         },
//         {
//             image: 'https://www.godai.gr.jp/imgacademy/img/gallery/gallery_03.jpg',
//             name: 'Alice Johnson',
//             work: 'Manager',
//             title: 'Project Title',
//             Paragraph: 'Project Description',
//         },
//     ];

//     const MAX_VISIBILITY = 2;
//     const count = data.length;

//     return (
//         <>
//             <section id="projects" className="min-h-screen pt-5">
//                 <div className="flex justify-center items-center m-auto">
//                     <div className="container grid md:grid-cols-6 gap-8 items-center">
//                         <div className="text-center w-full md:col-span-6">
//                             <h2 className="inline-block bg-yellow-400 py-2 px-4 md:-ml-4 mb-2 text-lg font-bold uppercase font-permanent-marker">Projects</h2>
//                         </div>
//                         <div className="md:col-start-3 md:col-span-4">
//                             <p className="ml-px text-xl text-gray-500">Projects I’ve worked on in my career and where I am very proud of, I must say.</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='flex items-center justify-center overflow-hidden bg-gradient-to-br font-montserrat relative'>
//                     {active > 0 && (
//                         <button
//                             className='absolute left-1 sm:left-[50px] top-1/2 transform -translate-y-1/2 text-[#15803D] text-4xl sm:text-5xl z-40 cursor-pointer'
//                             onClick={() => setActive(i => i - 1)}
//                         >
//                             &lt;
//                         </button>
//                     )}
//                     <div className='relative w-[300px] sm:w-[500px] md:w-[600px] lg:w-[900px] h-96 perspective-500 transform-style-preserve-3d py-10'>
//                         {data.map((item, i) => (
//                             <div
//                                 key={i}
//                                 className='absolute w-full h-[30vh] transform transition-transform duration-300 border border-white '
//                                 style={{
//                                     '--offset': (active - i) / 2,
//                                     '--abs-offset': Math.abs(active - i) / 2,
//                                     '--direction': Math.sign(active - i),
//                                     '--active': i === active ? 1 : 0,
//                                     'transform': `
//                                         rotateY(calc(var(--offset) * 50deg))
//                                         scaleY(calc(1 + var(--abs-offset) * -0.4))
//                                         translateZ(calc(var(--abs-offset) * -30rem))
//                                         translateX(calc(var(--direction) * -5rem))
//                                     `,
//                                     'filter': `blur(calc(var(--abs-offset) * 1rem))`,
//                                     'pointerEvents': active === i ? 'auto' : 'none',
//                                     'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
//                                     'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
//                                     'zIndex': i === active ? 30 : 1, // Set z-index of active card to 30, others to 1
//                                 }}
//                             >
//                                 <div className="w-full h-full p-8 rounded-lg shadow-lg">
//                                     <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
//                                         <img
//                                             src={item.image}
//                                             alt="people"
//                                             className="h-24 sm:h-16 w-24 sm:w-16 m-auto sm:m-0 rounded-full"
//                                         />
//                                         <div>
//                                             <h1>{item.name}</h1>
//                                             <div className="flex gap-3">
//                                                 <p>{item.work}</p>
//                                                 <p>⭐⭐⭐⭐⭐</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="mt-6">
//                                         <h1>{item.title}</h1>
//                                         <p>{item.Paragraph}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     {active < count - 1 && (
//                         <button
//                             className='absolute right-1 sm:right-[50px] top-1/2 transform -translate-y-1/2 text-[#15803D] text-4xl sm:text-5xl z-40 cursor-pointer'
//                             onClick={() => setActive(i => i + 1)}
//                         >
//                             &gt;
//                         </button>
//                     )}
//                 </div>
//             </section>
//             <section id="support" className="pt-8">
//                 <div className=" flex flex-col gap-8 w-full items-center">
//                     <div className="text-center">
//                         <h2 className="inline-block border-b-2 border-yellow-400 py-2 px-4 md:-ml-4 mb-2 text-lg font-bold uppercase font-permanent-marker">Do you love this website?</h2>
//                     </div>
//                     <div className="flex justify-center ">
//                         <p className="ml-px text-xl w-[600px] leading-8 text-gray-500">
//                             If you want to use this template for your own personal website, you can purchase an anonymous, customizable version for only € ??.??. The template comes with a readme that explains how to get it up and running and make any necessary changes.
//                         </p>
//                     </div>
//                     <div className="mt-4 text-center">
//                         <span className="font-bold uppercase">Coming soon</span>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Projects;





import React, { useState } from 'react';

const Projects = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const projects = [
        {
            id: 1,
            img: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg",
            projectName: "Samsung S6 - Next is now",
            ProjectDsp: "The Next is Now campaign, for the completely redesigned Galaxy S6 and S6 edge, is part of one of Samsung’s biggest launches in recent years. Next is Now will be featured around the globe, supporting all campaign components, including television, digital, experiential, OOH, and retail activations.",
            Company: "Caviar Digital",
            Link: "Offline",
            Techniques: "PHP, Laravel, JS / ES5, CSS / SASS, AWS S3",
        },
        {
            id: 1,
            img: "https://i.pinimg.com/originals/cd/bc/f0/cdbcf077b62246123f74fcc919587b0b.jpg",
            projectName: "Samsung S6 - Next is now",
            ProjectDsp: "The Next is Now campaign, for the completely redesigned Galaxy S6 and S6 edge, is part of one of Samsung’s biggest launches in recent years. Next is Now will be featured around the globe, supporting all campaign components, including television, digital, experiential, OOH, and retail activations.",
            Company: "Caviar Digital",
            Link: "Offline",
            Techniques: "PHP, Laravel, JS / ES5, CSS / SASS, AWS S3",
        },
        {
            id: 1,
            img: "https://www.godai.gr.jp/imgacademy/img/gallery/gallery_03.jpg",
            projectName: "Samsung S6 - Next is now",
            ProjectDsp: "The Next is Now campaign, for the completely redesigned Galaxy S6 and S6 edge, is part of one of Samsung’s biggest launches in recent years. Next is Now will be featured around the globe, supporting all campaign components, including television, digital, experiential, OOH, and retail activations.",
            Company: "Caviar Digital",
            Link: "Offline",
            Techniques: "PHP, Laravel, JS / ES5, CSS / SASS, AWS S3",
        },
        // Add more projects here
    ];

    const handlePrevProject = () => {
        setCurrentProjectIndex(currentProjectIndex === 0 ? projects.length - 1 : currentProjectIndex - 1);
    };

    const handleNextProject = () => {
        setCurrentProjectIndex(currentProjectIndex === projects.length - 1 ? 0 : currentProjectIndex + 1);
    };

    return (
        <>
            <section id="projects" className="min-h-screen pt-5">
                <div className="flex justify-center items-center m-auto">
                    <div className="container grid md:grid-cols-6 gap-8 items-center ">
                        <div className=" text-center w-full md:col-span-6">
                            <h2 className="inline-block bg-yellow-400 py-2 px-4 md:-ml-4 mb-2 text-lg font-bold uppercase font-permanent-marker">Projects</h2>
                        </div>
                        <div className="md:col-start-3 md:col-span-4">
                            <p className="ml-px text-xl text-gray-500">Projects I’ve worked on in my career and where I am very proud of, I must say.</p>
                        </div>
                    </div>
                </div>
                <div className="mx-6 mt-8 w-16 h-0.5  md:mx-auto md:relative md:-left-24 "></div>
                <div className="py-6 mt-4 md:mt-0 md:px-16 md:py-8 flex hide-scroll-bar relative">
                    <button className='absolute left-0 top-1/2 text-5xl' onClick={handlePrevProject}> - </button>
                    <div className="flex overflow-hidden relative ">
                        <div key={projects[currentProjectIndex].id} className="min-w-[100vw] mx-6">
                            <img className="w-full" src={projects[currentProjectIndex].img} alt={projects[currentProjectIndex].projectName} />
                            <div className="grid md:grid-cols-6 mt-8">
                                <div className="md:col-start-2 md:col-span-3">
                                    <h3 className="font-bold text-xl mb-4">{projects[currentProjectIndex].projectName}</h3>
                                    <p className="text-gray-600 mb-8">{projects[currentProjectIndex].ProjectDsp}</p>
                                    <div className="grid md:grid-cols-4 mt-2">
                                        <strong>Company</strong>
                                        <span className="col-span-3">{projects[currentProjectIndex].Company}</span>
                                    </div>
                                    <div className="grid md:grid-cols-4 mt-2">
                                        <strong>Link</strong>
                                        <span className="col-span-3 text-red-400">{projects[currentProjectIndex].Link}</span>
                                    </div>
                                    <div className="grid md:grid-cols-4 mt-2">
                                        <strong>Techniques</strong>
                                        <span className="col-span-3">{projects[currentProjectIndex].Techniques}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='absolute right-0 top-1/2 text-5xl' onClick={handleNextProject}> + </button>
                </div>
            </section>
            <section id="support" className="pt-8">
                <div className=" flex flex-col gap-8 w-full items-center">
                    <div className="text-center">
                        <h2 className="inline-block border-b-2 border-yellow-400 py-2 px-4 md:-ml-4 mb-2 text-lg font-bold uppercase font-permanent-marker">Do you love this website?</h2>
                    </div>
                    <div className="flex justify-center ">
                        <p className="ml-px text-xl w-[600px] leading-8 text-gray-500">
                            If you want to use this template for your own personal website, you can purchase an anonymous, customizable version for only € ??.??. The template comes with a readme that explains how to get it up and running and make any necessary changes.
                        </p>

                    </div>
                    <div className="mt-4 text-center   ">
                        <span className="font-bold uppercase">Coming soon</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects;

import React from 'react'

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen pt-5">
            <div className="flex justify-center items-center m-auto">
                <div className="container grid md:grid-cols-5 gap-8 items-center ">
                    <div className="md:col-start-3 md:col-span-4">
                        <h2 className="inline-block bg-yellow-400 py-2 px-4 md:-ml-4 mb-2 text-lg font-bold uppercase font-permanent-marker">Projects</h2>
                    </div>
                    <div className="md:col-start-2 md:col-span-4">
                        <p className="ml-px text-xl text-gray-500">Projects I’ve worked on in my career and where I am very proud of, I must say.</p>
                    </div>
                </div>
            </div>
            <div className="mx-6 mt-8 w-16 h-0.5 bg-gray-300 md:mx-auto md:relative md:-left-24"></div>
            <div className="py-6 mt-4 md:mt-0 md:px-16 md:py-8 flex overflow-x-scroll hide-scroll-bar" style={{ background: 'linear-gradient(transparent 140px, rgb(229, 231, 235) 140px)' }}>
                <div className="flex flex-nowrap">
                    <div className="w-[75vw] mx-6">
                        <img className="w-full" src="/assets/samsung-s6-next-is-now-campaign.4b09e6ad.png" alt="Samsung S6 - Next is now" />
                        <div className="grid md:grid-cols-6 mt-8">
                            <div className="md:col-start-2 md:col-span-4">
                                <h3 className="font-bold text-xl mb-4">Samsung S6 - Next is now</h3>
                                <p className="text-gray-600 mb-8">The Next is Now campaign, for the completely redesigned Galaxy S6 and S6 edge, is part of one of Samsung’s biggest launches in recent years. Next is Now will be featured around the globe, supporting all campaign components, including television, digital, experiential, OOH, and retail activations.</p>
                                <div className="grid md:grid-cols-4 mt-2">
                                    <strong>Company</strong>
                                    <span className="col-span-3">Caviar Digital</span>
                                </div>
                                <div className="grid md:grid-cols-4 mt-2">
                                    <strong>Link</strong>
                                    <span className="col-span-3 text-red-400">Offline</span>
                                </div>
                                <div className="grid md:grid-cols-4 mt-2">
                                    <strong>Techniques</strong>
                                    <span className="col-span-3">PHP, Laravel, JS / ES5, CSS / SASS, AWS S3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[75vw] mx-6">
                        <img className="w-full" src="/assets/oranjebitter-campaign.a82ba644.jpg" alt="Oranjebitter 2014 / 2015 / 2016" />
                        <div className="grid md:grid-cols-6 mt-8">
                            <div className="md:col-start-2 md:col-span-4">
                                <h3 className="font-bold text-xl mb-4">Oranjebitter 2014 / 2015 / 2016</h3>
                                <p className="text-gray-600 mb-8">Together with Studiomals.com I created the interactive website for the Oranjebitter festival for three consecutive years. Each year with a new design challenge, where in the image above the machine was also a way to navigate through the website.</p>
                                <div className="grid md:grid-cols-4 mt-2">
                                    <strong>Client</strong>
                                    <span className="col-span-3">Studiomals.com</span>
                                </div>
                                <div className="grid md:grid-cols-4 mt-2">
                                    <strong>Link</strong>
                                    <span className="col-span-3 text-red-400">Offline</span>
                                </div>
                                <div className="grid md:grid-cols-4 mt-2">
                                    <strong>Techniques</strong>
                                    <span className="col-span-3">PHP, Bootstrap, JS / ES5, CSS / SASS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[75vw] mx-6">
                        <img className="w-full" src="/assets/github-laravel-gwt-plugin.d39b078f.png" alt="Laravel GWT package" />
                        <div className="grid md:grid-cols-6 mt-8">
                            <div className="md:col-start-2 md:col-span-4">
                                <h3 className="font-bold text-xl mb-4">Laravel GWT Plugin - Github</h3>
                                <p className="text-gray-600 mb-8">The most recent package I created is a Given-When-Then plugin for Laravel, which provides a fluent way of writing tests with the GWT format.</p>
                                <div className="grid md:grid-cols-4 mt-2">
                                    <strong>Company</strong>
                                    <span className="col-span-3">WolfpackIT</span>
                                </div>
                                <div className="grid md:grid-cols-4 mt-2">
                                    <strong>Link</strong>
                                    <a href="https://github.com/wolfpack-it/laravel-gwt-plugin" className="col-span-3 text-blue-400">Github.com</a>
                                </div>
                                <div className="grid md:grid-cols-4 mt-2">
                                    <strong>Techniques</strong>
                                    <span className="col-span-3">PHP, Laravel, GWT</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Projects
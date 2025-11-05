import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {

    return (
    <section 
    id="projects" 
    className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>

        
        <div className="max-w-5xl mx-auto px-4">
            {/* heading */}
        <h2 
            className="text-3xl font-bold mb-8 bg-gradient-to-r 
            from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
            className="p-6 rounded-xl border border-white/10 
                        hover:-translate-y-1 hover:border-blue-500/30
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2"> DocRelay </h3>
                <p className="text-gray-400 mb-4">
                A self-hosted, lightweight, secure file-sharing platform built in pure Java with a modern React.js frontend.
                </p>
                <div>
                    {["React", "Java", "Sockets", "Docker", "AWS"].map((tech, key) => (
                        <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                    hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex items-center justify-center mt-3">
                    <a href="https://github.com/RohitBhaskarUday/DocRelay" target="_blank" className="bg-blue-500/10 text-purple-500 py-1 px-3 rounded-full text-bg
                                    hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">GitHub</a>
                </div>
                <div className="">
                <a href="http://52.41.198.69/" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project &#8594;</a>  
                </div>
            </div>

            <div 
            className="p-6 rounded-xl border border-white/10 
                        hover:-translate-y-1 hover:border-blue-500/30
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2"> Blogify </h3>
                <p className="text-gray-400 mb-4">
                    A modern AI-assisted blogging platform built with Spring Boot and React.js, 
                    enabling users to generate, edit, and publish intelligent blog content seamlessly.
                </p>
                <div>
                    {["Python", "Java", "Spring-boot", "MySQL", "Thymleaf"].map((tech, key) => (
                        <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                    hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex items-center justify-center mt-3">
                    <a href="https://github.com/RohitBhaskarUday/Blogify" target="_blank" className="bg-blue-500/10 text-purple-500 py-1 px-3 rounded-full text-bg
                                    hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">GitHub</a>
                </div>
                {/* <div className="">
                <a href="http://52.41.198.69/" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project &#8594;</a>  
                </div> */}
            </div>

            <div 
            className="p-6 rounded-xl border border-white/10 
                        hover:-translate-y-1 hover:border-blue-500/30
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2"> Contact Vault </h3>
                <p className="text-gray-400 mb-4">
                A secure contact-management web application built with Spring Boot and Thymeleaf, enabling users to register, login and manage their contacts efficiently.
                </p>
                <div>
                    {["Spring Boot", "Thymeleaf", "Java", "Lombok", "MySQL"].map((tech, key) => (
                        <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                    hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex items-center justify-center mt-3">
                    <a href="https://github.com/RohitBhaskarUday/contact-vault" target="_blank" className="bg-blue-500/10 text-purple-500 py-1 px-3 rounded-full text-bg
                                    hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">GitHub</a>
                </div>
                {/* <div className="">
                <a href="http://52.41.198.69/" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project &#8594;</a>  
                </div> */}
            </div>

            <div 
            className="p-6 rounded-xl border border-white/10 
                        hover:-translate-y-1 hover:border-blue-500/30
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2"> Pulse Monitor </h3>
                <p className="text-gray-400 mb-4">
                A backend service built with Vert.x that tracks latency and uptime of multiple URLs asynchronously, using an embedded H2 database and exposing REST APIs for monitoring management.                </p>
                <div>
                    {["Java 17", "Vert.x", "H2 (file-based)", "REST API", "Docker"].map((tech, key) => (
                        <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                    hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex items-center justify-center mt-3">
                    <a href="https://github.com/RohitBhaskarUday/pulsemonitor" target="_blank" className="bg-blue-500/10 text-purple-500 py-1 px-3 rounded-full text-bg
                                    hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">GitHub</a>
                </div>
                {/* <div className="">
                <a href="http://52.41.198.69/" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project &#8594;</a>  
                </div> */}
            </div>

            

        </div>

        </div>

        </RevealOnScroll>
    </section>)
}
import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {

    const frontendSkills = ["React","Vue", "TypeScript", "TailwindCSS"]
    const backendSkills = ["Java", "Python", "Spring-boot", "FastAPI", "Vert.x"]
    const databaseSkills = ["SQL", "MongoDB", "PostgreSQL", "H2"]
    const misc = ["Linux", "AWS", "Docker", "Jenkins", "Kubernetes", "JUnit5", "Mockito", "REST", "gRPC", "WebSockets", "Kafka"]

    return (
    <section 
    id="about" 
    className="min-h-screen flex items-center justify-center py-20">

        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">

            {/* the heading for the component */}
            <h2 
            className="text-3xl font-bold mb-8 bg-gradient-to-r 
            from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                About Me?
            </h2>

            <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
{/* intro */}
                <p className="text-gray-300 mb-6">
                Developer passionate about building scalable web applications and solving complex problems with curiosity and precision.
                </p>
{/* skills-1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* this is where i list all my skills in the front-end */}
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span
                                key = {key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                        hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* this is where i list all my amazing skills in the back-end */}
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span
                                key = {key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                        hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
{/* skills-2 */}
                {/* created extra for more clarity on databases and Miscellanous */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* this is where i list all my skills in the databases */}
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Databases</h3>
                        <div className="flex flex-wrap gap-2">
                            {databaseSkills.map((tech, key) => (
                                <span
                                key = {key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                        hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* this is where i list all my amazing skills in the rest */}
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">DevOps & Miscellanous</h3>
                        <div className="flex flex-wrap gap-2">
                            {misc.map((tech, key) => (
                                <span
                                key = {key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                        hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
{/* education and experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> 🎓 Education </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong> M.Sc. in Computer Science </strong> - California State University, Fullerton (2023-2025)
                        </li>
                        <li>
                        <strong> B.Tech. in Computer Science & Engineering </strong> - Nehru College of Engineering & Research Centre (2017-2021)
                        </li>
                    </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 💼 Experience </h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">Full Stack Developer at SaayamForAll (July 2025 - Present)</h4>
                                <p>
                                    Developed and maintain various microservices for cloud-based applications.
                                </p>
                            </div>
                            <div>
                                
                                <h4 className="font-semibold">Systems Engineer at TCS (July 2021 - August 2023)</h4>
                                <p>
                                    Developed and maintain various java based microservices for payments application at American Express.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
    )
}
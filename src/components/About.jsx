import foto1 from '../assets/foto1.jpg';

const About = () => {
    return (
        <section id="about" className="w-screen min-h-screen bg-gray-900 text-gray-100 pt-30">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                <div className="flex justify-center">
                    <img
                        src={foto1}
                        alt="Hero"
                        className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl ring-4 ring-cyan-400/30"
                    />
                </div>

                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        Sobre mí
                    </h1>
                    <p className="mt-2 text-cyan-400 uppercase tracking-widest text-sm">
                        Construyendo el futuro, línea a línea
                    </p>
                    <p className="mt-6 text-base md:text-lg text-gray-300 max-w-lg">
                        Desarrollador full-stack con una sólida base en React, Node.js y Laravel, enfocado en transformar ideas en soluciones web eficientes. Mi experiencia incluye la creación de sistemas transaccionales, herramientas de análisis en tiempo real y proyectos a medida, siempre con un enfoque en el rendimiento y la seguridad. Me entusiasma el reto de desarrollar software robusto de principio a fin.
                    </p>

                    <div className="mt-10 relative">
                        <div className="absolute left-[9px] top-2 bottom-2 w-0.5 bg-cyan-400/30" />

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <span className="relative z-10 w-5 h-5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 shrink-0" />
                                <div>
                                    <p className="text-gray-200 font-semibold">2022: Jr. Front-end Dev</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="relative z-10 w-5 h-5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 shrink-0" />
                                <div>
                                    <p className="text-gray-200 font-semibold">2023: Freelancer – Full-Stack Developer</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="relative z-10 w-5 h-5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 shrink-0" />
                                <div>
                                    <p className="text-gray-200 font-semibold">2025: Programming and Support Analyst – Full-Stack Developer </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

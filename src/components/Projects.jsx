import ProjectCard from '../components/ProjectCard'
import wedding from '../assets/wedding_project.PNG'
import transaction from '../assets/transactional_platform.PNG'
import countries from '../assets/countries.PNG'
import eCommerce from '../assets/e-commerce.PNG'


const Projects = () => {
    const dataProjects = [{ description: "Plataforma integral de invitaciones de boda digital con React.js, Node.js y MongoDB. Se diseñaron API RESTful personalizadas para facilitar la integración fluida de datos entre el front-end y el back-end, a la vez que se diseña un esquema de base de datos escalable.", title: "Invitación de boda digital", image: wedding, repo: "https://github.com/objetive218/WeddingInvitation", web: "https://weddinginvitationexample.netlify.app" }, {
        description: "Rediseño completo de una plataforma transaccional utilizando React.js, Laravel y MySQL. Se diseñaron e implementaron APIs RESTful para facilitar la integración fluida de datos, a la vez que interfaces front-end de alto rendimiento.", title: "Plataforma transaccional", image: transaction
    }, {
        description: "Aplicación web que muestra información detallada de países utilizando React.js y una API pública. Se implementaron características como búsqueda, filtrado, modo oscuro y paginación para mejorar la experiencia del usuario.", title: "Buscador de paises", image: countries, repo: "https://github.com/objetive218/Countries-Challenge", web: "https://country-challenge-objetive.netlify.app"
    }, {
        description: "Plataforma de comercio electrónico desarrollada con React.js y Node.js. Incluye funcionalidades como catálogo de productos y carrito de compras.", title: "E-commerce", image: eCommerce, repo: "https://github.com/objetive218/Pantheon-Tech", web: "https://pantheon-tech.netlify.app"
    }]
    return (
        <section id="projects" className="w-full bg-gray-900 text-gray-100 px-4 md:px-8 py-20">
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch pt-10">
                <h2 className="text-2xl font-bold text-white text-center col-span-full pb-5">Proyectos</h2>
                {dataProjects.map((project, index) => (
                    <div key={index} className="w-full">
                        <ProjectCard image={project.image} description={project.description} title={project.title} repo={project.repo} web={project.web} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;

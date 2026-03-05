import { FaGithub } from 'react-icons/fa';
import { MdWebAsset } from "react-icons/md";

const ProjectCard = ({ image, description, title, repo, web }) => {
    return (
        <article className="relative group h-full w-full flex flex-col bg-gray-800 text-gray-100 rounded-lg overflow-hidden shadow-md">
            <div className="relative w-full h-48 md:h-52 bg-gray-900 overflow-hidden">
                <img src={image} alt="image_project" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1" />

                <div className="absolute right-3 bottom-3 flex items-center space-x-2 bg-black/40 backdrop-blur-sm rounded-md px-2 py-1 opacity-90 transition-opacity duration-200 group-hover:opacity-100">
                    {repo && (
                        <a href={repo} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-100 hover:text-white p-1">
                            <FaGithub className="w-5 h-5" />
                        </a>
                    )}
                    {web && (
                        <a href={web} target="_blank" rel="noopener noreferrer" aria-label="Website" className="text-gray-100 hover:text-white p-1">
                            <MdWebAsset className="w-6 h-6" />
                        </a>
                    )}
                </div>
            </div>

            <div className="p-3 flex-1 flex flex-col">
                <h3 className="text-base font-semibold text-gray-100 mb-2">{title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{description}</p>

            </div>
        </article>
    );
}

export default ProjectCard;
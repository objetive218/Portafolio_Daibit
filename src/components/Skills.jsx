
const Skills = () => {
    const categories = [
        {
            title: 'Front-end',
            items: [
                { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'JavaScript (ES6+)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
            ]
        },
        {
            title: 'Back-end',
            items: [
                { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
                { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
                { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
                { name: 'Laravel 11', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
            ]
        },
        {
            title: 'Tools & DevOps',
            items: [
                { name: 'Adobe XD', icon: 'https://img.icons8.com/color/48/000000/adobe-xd--v1.png' },
                { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
                { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
                { name: 'AWS', icon: 'https://img.icons8.com/color/48/000000/amazon-web-services.png' }
            ]
        }
    ];


    return (
        <section id="skills" className="flex flex-col items-center justify-center bg-gray-900 min-h-screen py-12">
            <h1 className="text-3xl font-bold text-white mb-8">Habilidades</h1>

            <div className="mt-12 w-full max-w-4xl space-y-12">
                {categories.map(cat => (
                    <div key={cat.title}>
                        <h2 className="text-xl font-bold text-white text-center mb-4">
                            {cat.title}
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6 border-2 rounded-lg border-l-gray-50 p-6">
                            {cat.items.map(item => (
                                <div
                                    key={item.name}
                                    className="flex flex-col items-center"
                                >
                                    <img
                                        src={item.icon}
                                        alt={item.name}
                                        className="h-12 w-12 bg-green-50 rounded-full p-2 mb-2"
                                    />
                                    <span className="mt-1 text-sm text-white border-b ">
                                        {item.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
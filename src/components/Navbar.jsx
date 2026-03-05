import { useState } from 'react'
import logo from '../assets/logo_corregido_blanco_2.png'

const links = [
    { id: 'hero', label: 'Inicio' },
    { id: 'about', label: 'Sobre mí' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Proyectos' },
]

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState('hero')

    return (
        <header className="bg-gray-900 text-white rounded-md fixed top-0 left-0 z-50 shadow-md w-full">
            <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <a href="#hero" onClick={() => { setActive('hero'); }}>
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-10 w-auto cursor-pointer"
                        />
                    </a>
                    <span className="sr-only">Mi portfolio</span>
                </div>

                <ul className="hidden md:flex items-center gap-8">
                    {links.map(l => (
                        <li key={l.id}>
                            <a
                                href={`#${l.id}`}
                                onClick={() => setActive(l.id)}
                                className={
                                    'text-sm font-medium transition-colors ' +
                                    (active === l.id ? 'text-cyan-400' : 'text-gray-300 hover:text-white')
                                }
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-3">

                    <button
                        className="md:hidden p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        aria-label="Abrir menú"
                        aria-expanded={open}
                        onClick={() => setOpen(prev => !prev)}
                    >
                        <svg className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {open ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {open && (
                <div className="md:hidden bg-gray-800/90 border-t border-gray-700">
                    <ul className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3">
                        {links.map(l => (
                            <li key={l.id}>
                                <a
                                    href={`#${l.id}`}
                                    onClick={() => {
                                        setActive(l.id)
                                        setOpen(false)
                                    }}
                                    className={
                                        'block px-3 py-2 rounded-md text-sm font-medium transition-colors ' +
                                        (active === l.id ? 'bg-gray-700 text-cyan-300' : 'text-gray-200 hover:bg-gray-700 hover:text-white')
                                    }
                                >
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Navbar
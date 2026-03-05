import { useState, useEffect } from 'react';

const TypingText = ({ texts = [], typingSpeed = 80, pause = 1200 }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [forward, setForward] = useState(true);

    useEffect(() => {
        if (!texts.length) return;

        const current = texts[index];
        let timeout;

        if (forward) {
            if (subIndex <= current.length) {
                timeout = setTimeout(() => setSubIndex(s => s + 1), typingSpeed);
            } else {
                timeout = setTimeout(() => setForward(false), pause);
            }
        } else {
            if (subIndex > 0) {
                timeout = setTimeout(() => setSubIndex(s => s - 1), Math.max(40, typingSpeed / 2));
            } else {
                setForward(true);
                setIndex(i => (i + 1) % texts.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [subIndex, forward, index, texts, typingSpeed, pause]);

    return (
        <span className="inline-flex items-center">
            <span>{texts[index]?.slice(0, subIndex)}</span>
            <span className="inline-block ml-2 w-0.5 md:w-1 h-6 bg-cyan-400 animate-pulse" />
        </span>
    );
};

const Hero = () => {
    return (
        <section id="hero" className="w-screen min-h-screen bg-gray-900 text-gray-100 relative flex items-end justify-start pl-12 md:pl-32 pb-12 md:pb-30 overflow-hidden">
            <div className="max-w-4xl w-full px-6 flex flex-col items-start justify-center text-start gap-0.5 md:gap-1">
                <h1 className='text-5xl md:text-6xl font-extrabold leading-tight'>David Triana</h1>
                <p>Construyendo el futuro línea por línea</p>
                <h3 className='text-2xl md:text-3xl font-semibold text-cyan-400'>Full‑Stack Developer React.js, Node.js, Laravel</h3>
            </div>

            <div className="absolute right-26 md:right-32 top-1/2 transform -translate-y-1/2 z-20 text-right">
                <p className="text-sm text-gray-300 mb-2">También puedo:</p>
                <div className="text-2xl md:text-3xl font-semibold text-cyan-400">
                    <TypingText
                        texts={[
                            'Construir interfaces con React, CSS3 y TailwindCSS',
                            'Responsive Design',
                            'APIs REST con Node.js, Express y MongoDB',
                            'Apps completas con Laravel',
                        ]}
                        typingSpeed={70}
                        pause={1400}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
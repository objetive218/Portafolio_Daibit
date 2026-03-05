import { useState } from "react";

const Contact = () => {
    const [open, setOpen] = useState(false);

    const modalContent = (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                className="fixed inset-0 bg-black opacity-60"
                onClick={() => setOpen(false)}
            />
            <div className="relative w-full max-w-2xl bg-gray-800 p-8 rounded-xl shadow-lg ring-1 ring-gray-700 z-10">
                <button
                    className="absolute top-3 right-3 text-gray-300 hover:text-white"
                    onClick={() => setOpen(false)}
                >
                    &times;
                </button>
                <h1 className="text-3xl font-bold text-white mb-8 text-center">
                    Contactame
                </h1>
                <p className="text-white text-center mb-6">
                    No dudes en comunicarte conmigo a través de cualquiera de los siguientes canales.
                </p>
                <div className="mt-6 flex justify-center gap-10">
                    <a
                        href="mailto:davidsantiagotc@gmail.com"
                        className="flex flex-col items-center text-white hover:text-blue-400 transition-colors"
                    >
                        <img
                            src="https://img.icons8.com/ios-filled/50/ffffff/new-post.png"
                            alt="email icon"
                            className="h-6 w-6 mb-1"
                        />
                        <span className="text-sm">Email</span>
                    </a>
                    <a
                        href="https://github.com/david"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center text-white hover:text-blue-400 transition-colors"
                    >
                        <img
                            src="https://img.icons8.com/ios-glyphs/50/ffffff/github.png"
                            alt="github icon"
                            className="h-6 w-6 mb-1"
                        />
                        <span className="text-sm">GitHub</span>
                    </a>
                    <a
                        href="https://linkedin.com/in/david"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center text-white hover:text-blue-400 transition-colors"
                    >
                        <img
                            src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
                            alt="linkedin icon"
                            className="h-6 w-6 mb-1"
                        />
                        <span className="text-sm">LinkedIn</span>
                    </a>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-6 right-6 bg-cyan-500 hover:bg-cyan-600 text-black px-4 py-2 rounded-full shadow-lg"
            >
                Contactame
            </button>
            {open && modalContent}
        </>
    );
};

export default Contact;

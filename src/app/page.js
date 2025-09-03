import Image from "next/image";

export default function HomePage() {
    return (
        <div className="space-y-16">
            {/* Intro */}
            <section>
                <h2 className="text-4xl font-bold mb-4">Hi, I’m James Hodder 👋</h2>
                <p className="text-lg max-w-2xl text-gray-400">
                    I build modern websites and set up reliable, secure networks that can manage a full system. I am Passionate about clean design,
                    automation, and solving technical challenges.
                </p>
            </section>

            {/* Portfolio */}
            <section>
                <h3 className="text-2xl font-bold mb-6">Featured work</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-900 p-6 rounded-2xl shadow">
                        <h4 className="text-xl font-semibold mb-2">Teaching assistance</h4>
                        <p className="text-gray-400 mb-4">Teaching assistant in object oriented programming in Java.</p>
                        <a href="#" className="text-blue-400 hover:underline">View Project →</a>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-2xl shadow">
                        <h4 className="text-xl font-semibold mb-2">Autc Gear page</h4>
                        <p className="text-gray-400 mb-4">I was involved in the implementation of the AUTC gear management system a software tool that enhances gear management for the club. My focus was around the building of a Gear scanning tool and implementing this into a react based project</p>
                        <a href="#" className="text-blue-400 hover:underline">View Project →</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

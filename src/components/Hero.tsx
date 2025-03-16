"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-6 py-10">


      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Hi, I'm <span className="text-blue-500">Krish Thakar</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          🚀 Aspiring <strong>Front-End Developer & UI/UX Designer</strong> passionate about crafting clean, modern,
          and interactive web applications.
        </p>
        <p className="text-lg text-gray-300">
          🔥 I specialize in <strong>React.js, Next.js, Tailwind CSS, and JavaScript</strong> to build
          <strong> scalable</strong> & user-friendly digital experiences.
        </p>
        <p className="text-lg text-gray-300">
          ☁️ Currently focusing on <strong>Full Stack Development & Cloud Technologies</strong> to create robust and
          efficient solutions.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 justify-center md:justify-start">
          <Link
            href="/projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-800 rounded-lg text-lg font-semibold transition-all"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-white hover:bg-white hover:text-black rounded-lg text-lg font-semibold transition-all"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden mt-10 md:mt-0">
        <Image
         
         src="/homepage.jpg" 
         alt="Krish Thakar"
         className="w-48 h-48 object-cover rounded-full border-4 border-gray-700 shadow-lg mt-[-60px]"
       />
       
          priority
        
      </div>
    </section>
  );
}

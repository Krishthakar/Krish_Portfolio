"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faFilePdf, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faMugHot } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";




export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-center text-center md:text-left min-h-screen px-6 md:px-16">
        
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 space-y-4" data-aos="fade-right">
          <h1 className="text-5xl md:text-7xl font-bold">
            Hello, It&apos;s Me <br />
            <span className="text-cyan-400">Krish Thakar</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            And I&apos;m a <span className="text-cyan-400 font-semibold">Frontend Developer</span>
          </p>
          <p className="text-lg text-gray-400">
            Specializing in <strong>React.js, Next.js, Tailwind CSS</strong>, and <strong>JavaScript</strong>, I build modern, interactive, and scalable web applications.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <Link href="#" className="text-cyan-400 hover:text-white transition">
              <i className="fab fa-github text-2xl"></i>
            </Link>
            <Link href="#" className="text-cyan-400 hover:text-white transition">
              <i className="fab fa-linkedin text-2xl"></i>
            </Link>
            <Link href="#" className="text-cyan-400 hover:text-white transition">
              <i className="fab fa-twitter text-2xl"></i>
            </Link>
          </div>

          {/* Download CV Button */}
          <Link href="/Krish_Resume.pdf" download className="mt-6 inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg text-lg font-semibold transition-all">
            Download CV
          </Link>
        </div>

        {/* Right Side - Hexagon Profile Image */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative" data-aos="fade-left">
          <div className="relative">
            <div className="absolute inset-0 w-full h-full bg-cyan-500 rounded-xl blur-3xl opacity-50"></div>
            <div className="relative border-4 border-cyan-400 p-2 rounded-lg">
              <Image
                src="/homepage.jpg"
                alt="Krish Thakar"
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-12 lg:px-20 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          
          {/* Left Side - Hexagon Image */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <div className="relative">
              <div className="absolute inset-0 w-full h-full bg-cyan-500 rounded-xl blur-3xl opacity-50"></div>
              <div className="relative border-4 border-cyan-400 p-2 rounded-lg">
                <Image 
                  src="/about.jpg"
                  alt="Krish Thakar"
                  width={350}
                  height={350}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Side - About Content */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10">
            <h2 className="text-4xl font-bold text-white mb-4">
              About <span className="text-cyan-400">Me</span>
            </h2>
            <p className="text-lg text-gray-300">
              I am a <strong>Frontend Developer</strong> with a passion for crafting interactive and user-friendly digital experiences.
              I have expertise in <strong>React, Next.js, and Tailwind CSS</strong>, and I love building sleek and modern UI/UX.
            </p>
            <p className="text-lg text-gray-400 mt-2">
              Currently, I am expanding my knowledge in <strong>Cybersecurity, DevOps, and Cloud Technologies</strong>.
            </p>

            {/* Read More Button */}
            <Link href="/about" className="mt-6 inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg text-lg font-semibold transition-all">
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-6" data-aos="fade-up">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Frontend */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-cyan-400" data-aos="fade-up">
            <h3 className="text-xl font-bold flex items-center text-cyan-400">⚛️ Frontend</h3>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li>🟨 JavaScript</li>
              <li>🟦 TypeScript</li>
              <li>⚛️ React.js</li>
              <li>🎨 Tailwind CSS</li>
              <li>🎭 UI/UX Design</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-green-400" data-aos="fade-up">
            <h3 className="text-xl font-bold flex items-center text-green-400">🖥️ Backend</h3>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li>🌱 Node.js</li>
              <li>🚀 Express.js</li>
              <li>🛢️ MongoDB</li>
              <li>🔗 REST APIs</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-yellow-400" data-aos="fade-up">
            <h3 className="text-xl font-bold flex items-center text-yellow-400">🛠️ Tools</h3>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li>📮 Postman</li>
              <li>💻 IntelliJ IDEA</li>
              <li>🎨 Figma</li>
              <li>🖌️ Adobe XD</li>
            </ul>
          </div>

          {/* DevOps & Cybersecurity */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-purple-400" data-aos="fade-up">
            <h3 className="text-xl font-bold flex items-center text-purple-400">☁️ DevOps & Cybersecurity</h3>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li>🐳 Docker</li>
              <li>☁️ AWS</li>
              <li>⚙️ CI/CD Pipelines</li>
              <li>🔐 Cybersecurity Enthusiast</li>
            </ul>
          </div>

        </div>
      </section>
     
 {/* Projects Section */}
 <section id="projects" className="py-20 px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-purple-400 mb-6" data-aos="fade-up">
          My <span className="text-white">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* CarXchange Project */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-cyan-400" data-aos="fade-up">
            <Image 
              src="/carexchange.jpg" 
              alt="CarXchange Project"
              width={500}
              height={250}
              className="rounded-lg"
            />
            <h3 className="text-2xl font-bold text-cyan-400 mt-4">CarXchange - Vehicle Exchange Platform</h3>
            <p className="text-gray-400 mt-2">
              An interactive platform for users to buy, sell, and exchange vehicles with real-time updates. I worked on the frontend for this group project.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-3 py-1 bg-gray-700 text-sm rounded-md">React.js</span>
              <span className="px-3 py-1 bg-gray-700 text-sm rounded-md">Node.js</span>
              <span className="px-3 py-1 bg-gray-700 text-sm rounded-md">Express.js</span>
              <span className="px-3 py-1 bg-gray-700 text-sm rounded-md">MongoDB</span>
            </div>
            {/* GitHub & Live Link */}
            <div className="flex justify-between items-center mt-4">
              <Link href="https://github.com/yourgithub/carexchange" target="_blank" className="text-cyan-400 text-2xl">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link href="https://carexchange.live" target="_blank" className="text-cyan-400 text-xl">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </Link>
            </div>
          </div>

          {/* Weather Forecast App */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-blue-400" data-aos="fade-up">
            <Image 
              src="/OIP.jpg" 
              alt="Weather App"
              width={500}
              height={250}
              className="rounded-lg"
            />
            <h3 className="text-2xl font-bold text-blue-400 mt-4">Weather Forecast App</h3>
            <p className="text-gray-400 mt-2">
              A responsive weather forecast app powered by ReactJS and OpenWeatherMap API for real-time weather updates.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-3 py-1 bg-gray-700 text-sm rounded-md">React.js</span>
              <span className="px-3 py-1 bg-gray-700 text-sm rounded-md">OpenWeather API</span>
              <span className="px-3 py-1 bg-gray-700 text-sm rounded-md">CSS</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <Link href="https://github.com/Krishthakar/101413517_comp3123_labtest2.git" target="_blank" className="text-blue-400 text-2xl">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link href="https://weatherapp.live" target="_blank" className="text-blue-400 text-xl">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </Link>
            </div>
          </div>

          {/* Chatbot AI Project */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-purple-400" data-aos="fade-up">
            <Image 
              src="/chaatbot.jpg" 
              alt="Chatbot AI Project"
              width={500}
              height={250}
              className="rounded-lg"
            />
            <h3 className="text-2xl font-bold text-purple-400 mt-4">Chatbot AI</h3>
            <p className="text-gray-400 mt-2">
              A smart chatbot powered by AI that provides instant responses using Natural Language Processing (NLP).
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
        <span className="px-3 py-1 bg-gray-700 text-sm rounded-md">Next.js</span>
        <span className="px-3 py-1 bg-gray-700 text-sm rounded-md">OpenAI API</span>
        <span className="px-3 py-1 bg-gray-700 text-sm rounded-md">Tailwind CSS</span>
      </div>
            <div className="flex justify-between items-center mt-4">
              <Link href="https://github.com/Krishthakar/101413517_lab_test1_chat_app.git" target="_blank" className="text-purple-400 text-2xl">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link href="https://chatbotai.live" target="_blank" className="text-purple-400 text-xl">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </Link>
            </div>
          </div>

        </div>
      </section>
      <section id="personal-data" className="py-20 px-6 md:px-12 lg:px-20">
      <h2 className="text-4xl font-bold text-center text-purple-400 mb-6">
        My <span className="text-white">Personal Data</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Resume Section - Full Width on Small Screens, Half on Large Screens */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md md:col-span-2 border border-cyan-400">
          <h3 className="text-2xl font-bold flex items-center text-red-400">
            <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
            Resume
          </h3>
          <p className="text-gray-400 italic mt-2">
            "Your resume is your personal brand—make it compelling, make it powerful, and let it open doors to your dream job."
          </p>
          <Link 
            href="/Krish_Resume.pdf" 
            download 
            className="mt-4 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold transition-all flex items-center justify-center">
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            Download Resume
          </Link>
        </div>

        {/* Career Philosophy Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-purple-400">
          <h3 className="text-2xl font-bold text-purple-400">Career Philosophy</h3>
          <p className="text-gray-400 mt-2">
            Technology is the bridge between ideas and reality. I believe in building scalable, efficient, and impactful solutions that enhance human experiences.
          </p>
          <p className="text-gray-400 mt-2">
            With a passion for continuous learning and innovation, I strive to create software that not only solves problems but also inspires progress.
          </p>
        </div>

        {/* Hobbies Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-yellow-400">
          <h3 className="text-2xl font-bold text-yellow-400">Hobbies</h3>
          <p className="text-gray-400 mt-2">Here are some activities I enjoy:</p>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li>🏃 Running & Fitness</li>
            <li>🎵 Listening to Music</li>
            <li>📷 Photography</li>
            <li>✈️ Traveling</li>
            <li>🎮 Playing Video Games</li>
          </ul>
        </div>

      </div>
    </section>
{/* Connect Section */}
<section id="contact" className="py-20 px-6 md:px-12 lg:px-20">
  <h2 className="text-4xl font-bold text-center text-purple-400 mb-6" data-aos="fade-up">
    Let<span className="text-white">'s Connect</span>
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    
    {/* Email Me */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-blue-400 flex items-center space-x-3" data-aos="fade-up">
      <FontAwesomeIcon icon={faEnvelope} className="text-blue-400 text-3xl" />
      <div>
        <h3 className="text-xl font-bold text-white">Email Me</h3>
        <p className="text-gray-400 text-sm">Let&apos;s talk about your project</p>
        <Link href="mailto:krishthakar198@gmail.com" className="text-blue-400 text-sm hover:underline">
          krishthakar198@gmail.com
        </Link>
      </div>
    </div>

    {/* LinkedIn */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-blue-500 flex items-center space-x-3" data-aos="fade-up">
      <FontAwesomeIcon icon={faLinkedin} className="text-blue-500 text-3xl" />
      <div>
        <h3 className="text-xl font-bold text-white">LinkedIn</h3>
        <p className="text-gray-400 text-sm">Let&apos;s connect professionally</p>
        <Link href="https://www.linkedin.com/in/krish-thakar-489120244/" target="_blank" className="text-blue-400 text-sm hover:underline">
          View Profile
        </Link>
      </div>
    </div>

    {/* GitHub */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-400 flex items-center space-x-3" data-aos="fade-up">
      <FontAwesomeIcon icon={faGithub} className="text-white text-3xl" />
      <div>
        <h3 className="text-xl font-bold text-white">GitHub</h3>
        <p className="text-gray-400 text-sm">Check out my code</p>
        <Link href="https://github.com/Krishthakar" target="_blank" className="text-blue-400 text-sm hover:underline">
          View Projects
        </Link>
      </div>
    </div>

    {/* Let's Connect */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-yellow-400 flex items-center space-x-3" data-aos="fade-up">
      <FontAwesomeIcon icon={faMugHot} className="text-yellow-400 text-3xl" />
      <div>
        <h3 className="text-xl font-bold text-white">Let&apos;s Connect</h3>
        <p className="text-gray-400 text-sm">Let&apos;s discuss ideas over coffee</p>
        <Link 
         
        href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Meeting+with+Krish+Thakar&details=Let's+discuss+new+opportunities!&location=Google+Meet&dates=20250320T140000Z/20250320T150000Z" 
        target="_blank" 
        className="text-blue-400 text-sm hover:underline">
        Schedule a Meet
      
      
        </Link>
      </div>
    </div>

  </div>

  {/* Footer Call-to-Action */}
  <p className="text-center text-gray-400 mt-8">
  Innovation starts with a conversation! Whether it&apos;s a project, a discussion, or just a quick hello, I&apos;m always open to new possibilities.
  </p>

  <div className="flex justify-center mt-6">
    <Link 
      href="mailto:krishthakar198@gmail.com" 
      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold transition-all flex items-center justify-center">
      💬 Always happy to chat!
    </Link>
  </div>
</section>

    </div>
  );
}

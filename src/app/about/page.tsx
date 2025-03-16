import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
        
        {/* Left Section - Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src="/about.jpg"
            alt="Krish Thakar"
            width={320}
            height={320}
            className="rounded-xl shadow-lg brightness-110 border border-gray-700"
          />
        </div>

        {/* Right Section - Text */}
        <div className="w-full md:w-2/3 mt-8 md:mt-0 md:pl-10">
          <h2 className="text-4xl font-bold mb-6 text-blue-400">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            I'm a passionate <span className="text-blue-300 font-semibold">Front-End Developer</span> with expertise in 
            <span className="text-blue-300 font-semibold"> React.js, JavaScript, Node.js, and UI/UX design</span>. 
            My goal is to build <span className="text-blue-300 font-semibold">interactive and responsive web applications</span>.
          </p>
          <p className="mt-4 text-lg text-gray-300">
            🎓 Currently a <span className="text-blue-300 font-semibold">Final-year Computer Programming & Analysis student</span> at 
            <span className="text-blue-300 font-semibold"> George Brown College</span>, eager to apply my skills to <span className="text-blue-300 font-semibold">real-world projects</span> and
            develop <span className="text-blue-300 font-semibold">innovative solutions</span>.
          </p>

          {/* Skills Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-3 text-blue-400">🚀 Skills</h3>
            <ul className="text-lg space-y-2 text-gray-300">
              <li>🔹 <strong>Languages:</strong> JavaScript, Python, Java, C</li>
              <li>🔹 <strong>Web Development:</strong> React.js, Next.js, Node.js, HTML, CSS, MongoDB</li>
              <li>🔹 <strong>Cloud & Tools:</strong> AWS, Git, CI/CD, DevOps</li>
            </ul>
          </div>

          {/* Call-to-Action */}
          <div className="mt-8">
            <a
              href="/contact"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-800 rounded-lg text-lg font-semibold transition-all"
            >
              💬 Connect with Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import Navbar from "@/components/Navbar";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto p-10 text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-6">Let&apos;s Connect</h2>
        <p className="text-lg text-gray-300">
          Feel free to reach out via **email** or connect with me on **LinkedIn & GitHub**.
        </p>

        {/* Contact Links */}
        <div className="mt-6 flex flex-col gap-4 items-center">
          {/* Email */}
          <a
            href="mailto:krishthakar198@gmail.com"
            className="flex items-center gap-3 text-lg text-blue-400 hover:text-blue-500 hover:underline transition-all"
          >
            <FaEnvelope size={24} /> krishthakar198@gmail.com
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/krishthakar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg text-blue-400 hover:text-blue-500 hover:underline transition-all"
          >
            <FaLinkedin size={24} /> Connect on LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/krishthakar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg text-blue-400 hover:text-blue-500 hover:underline transition-all"
          >
            <FaGithub size={24} /> Visit GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}

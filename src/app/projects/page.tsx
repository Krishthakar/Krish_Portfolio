export default function Projects() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-12">
        <h2 className="text-4xl font-bold text-blue-400">Projects</h2>
        <p className="text-lg text-gray-300 mt-2">Some of my featured works</p>
  
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-xl font-semibold text-blue-300">Portfolio Website</h3>
            <p className="text-gray-300 mt-2">A modern portfolio built with Next.js & Tailwind CSS.</p>
            <a href="#" className="mt-4 inline-block text-blue-400 hover:text-blue-600">
              View Project →
            </a>
          </div>
  
          {/* Project 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-xl font-semibold text-blue-300">Chat Application</h3>
            <p className="text-gray-300 mt-2">A real-time chat app using Node.js, WebSockets, and MongoDB.</p>
            <a href="#" className="mt-4 inline-block text-blue-400 hover:text-blue-600">
              View Project →
            </a>
          </div>
  
          {/* Project 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-xl font-semibold text-blue-300">E-Commerce Platform</h3>
            <p className="text-gray-300 mt-2">An e-commerce store using React, Express, and Stripe for payments.</p>
            <a href="#" className="mt-4 inline-block text-blue-400 hover:text-blue-600">
              View Project →
            </a>
          </div>
        </div>
      </div>
    );
  }
  
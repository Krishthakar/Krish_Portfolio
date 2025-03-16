export default function Skills() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-12">
      <h2 className="text-4xl font-bold text-blue-400">My Skills</h2>
      <p className="text-lg text-gray-300 mt-2">Technologies I work with</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Frontend */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-64">
          <h3 className="text-xl font-semibold text-blue-300">Frontend</h3>
          <p className="text-gray-300 mt-2">React.js, Next.js, Tailwind CSS</p>
        </div>

        {/* Backend */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-64">
          <h3 className="text-xl font-semibold text-blue-300">Backend</h3>
          <p className="text-gray-300 mt-2">Node.js, Express, MongoDB</p>
        </div>

        {/* Cloud & Tools */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-64">
          <h3 className="text-xl font-semibold text-blue-300">Cloud & Tools</h3>
          <p className="text-gray-300 mt-2">AWS, Git, CI/CD</p>
        </div>
      </div>
    </div>
  );
}

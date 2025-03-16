import Navbar from "@/components/Navbar";

export default function AcademicWork() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto p-10">
        <h2 className="text-4xl font-bold mb-6 text-center">Academic Work</h2>

        {/* Capstone Project Section */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-400">Capstone Project</h3>
          <p className="mt-2 text-lg leading-relaxed">
            My final-year capstone project focused on developing a real-time chat application using 
            <span className="text-blue-300 font-semibold"> Next.js, Node.js, and MongoDB</span>.
          </p>
        </section>

        {/* Project Summary */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-400">Project Summary</h3>
          <p className="mt-2 text-lg leading-relaxed">
            The project aimed to build a real-time communication system with features such as:
          </p>
          <ul className="list-disc ml-6 mt-3 text-lg">
            <li>User Authentication & Secure Login</li>
            <li>Real-time Chat with WebSockets</li>
            <li>Dynamic Chat Rooms & File Sharing</li>
          </ul>
        </section>

        {/* Project Documents */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-400">Project Documents</h3>
          <ul className="list-disc ml-6 mt-3 text-lg">
            <li>
              <a href="/project-requirements.pdf" download className="text-blue-400 hover:underline">
                📜 Project Requirements
              </a>
            </li>
            <li>
              <a href="/wireframes.pdf" download className="text-blue-400 hover:underline">
                🖼 Wireframes & Mockups
              </a>
            </li>
            <li>
              <a href="/status-reports.pdf" download className="text-blue-400 hover:underline">
                📊 Status Reports
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

import Navbar from "@/components/Navbar";

export default function PersonalData() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto p-10">
        <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">
          Personal Data
        </h2>

        {/* Bio Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-300">Bio</h3>
          <p className="mt-2 text-lg text-gray-300">
            Hi, I'm <span className="text-blue-400 font-semibold">Krish Thakar</span>, a passionate full-stack developer with expertise in **JavaScript, TypeScript, React.js, and Node.js**.
          </p>
        </section>

        {/* Resume Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-300">Resume</h3>
          <a
            href="/resume.pdf"
            download
            className="text-blue-400 hover:text-blue-500 hover:underline flex items-center gap-2 mt-2"
          >
            📄 Download Resume
          </a>
        </section>

        {/* Cover Letter Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-300">Cover Letter</h3>
          <a
            href="/cover-letter.pdf"
            download
            className="text-blue-400 hover:text-blue-500 hover:underline flex items-center gap-2 mt-2"
          >
            📝 Download Cover Letter
          </a>
        </section>

        {/* Career Philosophy Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-300">Career Philosophy</h3>
          <p className="mt-2 text-lg italic text-gray-400">
            "We are the facilitators of our own creative evolution." – Bill Hicks
          </p>
          <p className="mt-4 text-gray-300">
            I believe in **continuous learning, problem-solving, and innovation**. My goal is to develop solutions that make technology more accessible and impactful.
          </p>
        </section>
      </div>
    </div>
  );
}

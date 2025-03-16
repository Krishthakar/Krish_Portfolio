import Navbar from "@/components/Navbar";

export default function ProfessionalSummary() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto p-10">
        <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">
          Professional Summary
        </h2>

        {/* Professional Work Samples */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-300">
            Professional Work Samples
          </h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a
                href="/project1.pdf"
                download
                className="text-blue-400 hover:underline hover:text-blue-500"
              >
                📌 E-Commerce Website
              </a>
            </li>
            <li>
              <a
                href="/project2.pdf"
                download
                className="text-blue-400 hover:underline hover:text-blue-500"
              >
                📌 Mobile App for Grocery Store
              </a>
            </li>
          </ul>
        </section>

        {/* Community Service */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-300">
            Community Service
          </h3>
          <p className="mt-2 text-lg text-gray-300">
            I actively contribute to open-source projects and mentor junior developers in coding communities.
          </p>
        </section>

        {/* Letters of Recommendation */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-300">
            Letters of Recommendation
          </h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a
                href="/recommendation1.pdf"
                download
                className="text-blue-400 hover:underline hover:text-blue-500"
              >
                📝 Letter from Professor
              </a>
            </li>
            <li>
              <a
                href="/recommendation2.pdf"
                download
                className="text-blue-400 hover:underline hover:text-blue-500"
              >
                📝 Letter from Employer
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

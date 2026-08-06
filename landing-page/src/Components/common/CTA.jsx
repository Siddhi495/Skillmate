import { FaRocket } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

function CTA() {
  return (
    <section className="mt-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-rfrom-indigo-50 via-white to-violet-50 border border-indigo-100 shadow-lg">

          {/* Background Blur */}
          <div className="absolute -top-16 -left-16 h-48 w-48 rounded-full bg-blue-600 opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-violet-300 opacity-20 blur-3xl"></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 px-10 py-10">

            {/* Left Side */}
            <div className="flex items-center gap-6">

              <div className="h-20 w-20 rounded-full bg-gradient-to-rfrom-blue-600 to-violet-600 text-white flex items-center justify-center text-3xl shadow-lg">
                <FaRocket />
              </div>

              <div>

                <h2 className="text-3xl font-bold text-gray-900">
                  Ready to Start Your Learning Journey?
                </h2>

                <p className="mt-3 text-gray-600 max-w-xl leading-7">
                  Join thousands of students exchanging skills, earning
                  achievements, and growing together through AI-powered
                  collaborative learning.
                </p>

              </div>

            </div>

            {/* Right Side */}

            <button className="group bg-gradient-to-rfrom-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center gap-3">

              Get Started for Free

              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />

            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CTA;
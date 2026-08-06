import { FaArrowRight } from "react-icons/fa";

function FeatureCard({ feature }) {
  return (
    <div className="group bg-white rounded-3xl border border-gray-100 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-500 relative overflow-hidden">

      {/* Number */}
      <div className="absolute right-6 top-6">
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-bold">
          {feature.number}
        </span>
      </div>

      {/* Badge */}
      <div className="absolute left-8 top-8">
        <span className="bg-blue-600 text-violet-600 text-xs px-3 py-1 rounded-full font-semibold">
          {feature.badge}
        </span>
      </div>

      {/* Icon */}
      <div
        className={`mt-10 w-20 h-20 rounded-3xl bg-gradient-to-r ${feature.color}
        text-white flex items-center justify-center text-4xl shadow-lg`}
      >
        {feature.icon}
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold mt-8">
        {feature.title}
      </h2>

      {/* Description */}
      <p className="text-gray-500 mt-5 leading-7">
        {feature.description}
      </p>

      {/* Preview Area */}
      <div className="bg-gray-50 rounded-2xl p-5 mt-8 border min-h-220px">

        {/* AI Mentor Replay */}
        {feature.type === "mentor" && (
          <div className="space-y-3">
            <div className="bg-white rounded-xl p-3 shadow">
              <h3 className="font-semibold">Session Replay</h3>
              <p className="text-sm text-gray-500">
                React Session • 45 min
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-violet-100 rounded-lg p-2 text-center">
                📝 Notes
              </div>

              <div className="bg-blue-100 rounded-lg p-2 text-center">
                📄 Summary
              </div>

              <div className="bg-green-100 rounded-lg p-2 text-center">
                ❓ Quiz
              </div>

              <div className="bg-pink-100 rounded-lg p-2 text-center">
                🧠 Mind Map
              </div>

              <div className="bg-yellow-100 rounded-lg p-2 text-center col-span-2">
                📅 Action Plan
              </div>
            </div>
          </div>
        )}

        {/* Flashcards */}
        {feature.type === "flashcard" && (
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">

            <p className="text-xs text-gray-400">
              FRONT
            </p>

            <h3 className="font-semibold text-lg mt-6">
              What is React Hook?
            </h3>

            <button className="mt-8 px-4 py-2 rounded-lg bg-blue-600 text-white">
              Tap to Flip
            </button>

          </div>
        )}

        {/* Mind Map */}
        {feature.type === "mindmap" && (
          <div className="flex flex-wrap gap-3 justify-center">

            <span className="bg-blue-100 px-4 py-2 rounded-full">
              React
            </span>

            <span className="bg-pink-100 px-4 py-2 rounded-full">
              Hooks
            </span>

            <span className="bg-green-100 px-4 py-2 rounded-full">
              JSX
            </span>

            <span className="bg-yellow-100 px-4 py-2 rounded-full">
              State
            </span>

            <span className="bg-purple-100 px-4 py-2 rounded-full">
              Props
            </span>

          </div>
        )}

        {/* Quiz */}
        {feature.type === "quiz" && (
          <div>

            <h3 className="font-semibold">
              Which hook updates state?
            </h3>

            <div className="space-y-2 mt-4">

              <div className="border rounded-lg p-2 hover:bg-green-100 cursor-pointer">
                useState
              </div>

              <div className="border rounded-lg p-2">
                useMemo
              </div>

              <div className="border rounded-lg p-2">
                useRef
              </div>

            </div>

          </div>
        )}

        {/* Growth Timeline */}
        {feature.type === "timeline" && (
          <div>

            <div className="grid grid-cols-7 gap-1">

              {[
                1,1,0,1,1,1,0,
                0,1,1,0,1,1,1,
                1,1,1,0,0,1,1,
                1,0,1,1,1,1,0,
                1,1,0,1,0,1,1,
                1,1,1,0,1,1,0
              ].map((cell, index) => (

                <div
                  key={index}
                  className={`h-4 rounded ${
                    cell
                      ? "bg-green-500"
                      : "bg-green-100"
                  }`}
                />

              ))}

            </div>

          </div>
        )}

        {/* Skill Quest */}
        {feature.type === "quest" && (
          <div>

            <h3 className="font-semibold">
              Teach 3 Students
            </h3>

            <div className="w-full bg-gray-200 rounded-full h-3 mt-5">

              <div className="bg-yellow-500 w-2/3 h-3 rounded-full"></div>

            </div>

            <div className="flex justify-between mt-4">

              <span>Reward</span>

              <span className="font-bold text-yellow-600">
                100 XP
              </span>

            </div>

          </div>
        )}

      </div>

      {/* Learn More */}
      <button className="flex items-center gap-2 mt-8 font-semibold text-indigo-600 group-hover:gap-4 duration-300">
        Learn More
        <FaArrowRight />
      </button>

    </div>
  );
}

export default FeatureCard;
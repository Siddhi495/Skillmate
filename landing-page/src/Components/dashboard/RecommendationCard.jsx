import {
  FaLightbulb,
  FaArrowRight,
  FaRocket,
  FaClock,
  FaChartLine,
  FaCheckCircle,
  FaServer,
  FaCode,
} from "react-icons/fa";

function RecommendationCard() {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between">

      {/* Header */}
      <div className="flex justify-between items-start">

        <div className="flex items-center gap-3">

          <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center">
            <FaLightbulb className="text-yellow-500 text-2xl" />
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              AI Recommendation
            </h2>

            <p className="text-gray-500">
              Personalized for you
            </p>
          </div>

        </div>

       

      </div>

      {/* Banner */}
     

      {/* Recommendation */}
      <div className="mt-6">

        <h3 className="text-2xl font-bold">
          Learn Node.js
        </h3>

        <p className="text-gray-500 mt-2 leading-7">
          Since you've already started learning
          <span className="font-semibold text-blue-600">
            {" "}React
          </span>,
          Node.js is the ideal next step to become a
          <span className="font-semibold text-green-600">
            {" "}Full Stack Developer
          </span>.
        </p>

      </div>

      {/* Benefits */}
      <div className="grid grid-cols-2 gap-3 mt-6">

        <div className="bg-gray-50 rounded-xl p-4 text-center">
          <FaServer className="mx-auto text-blue-600 text-xl mb-2" />
          <p className="font-semibold">Backend APIs</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 text-center">
          <FaRocket className="mx-auto text-green-600 text-xl mb-2" />
          <p className="font-semibold">Career Growth</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 text-center">
          <FaCode className="mx-auto text-purple-600 text-xl mb-2" />
          <p className="font-semibold">Express.js</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 text-center">
          <FaChartLine className="mx-auto text-orange-500 text-xl mb-2" />
          <p className="font-semibold">High Demand</p>
        </div>

      </div>

      {/* Why Recommended */}
   

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mt-6">

        <div className="bg-gray-100 rounded-xl p-3 text-center">

          <FaClock className="mx-auto text-gray-500 mb-2" />

          <p className="text-xs text-gray-500">
            Duration
          </p>

          <p className="font-bold">
            3 Weeks
          </p>

        </div>

        <div className="bg-gray-100 rounded-xl p-3 text-center">

          <FaChartLine className="mx-auto text-purple-600 mb-2" />

          <p className="text-xs text-gray-500">
            Level
          </p>

          <p className="font-bold">
            Intermediate
          </p>

        </div>

        <div className="bg-gray-100 rounded-xl p-3 text-center">

          🤖

          <p className="text-xs text-gray-500 mt-2">
            AI Match
          </p>

          <p className="font-bold text-green-600">
            96%
          </p>

        </div>

      </div>

      {/* Button */}
      <button
        className="
        mt-7
        w-full
        py-4
        rounded-2xl
        bg-gradient-to-r 
        from-yellow-500
        to-orange-500
        text-white
        font-semibold
        text-lg
        flex
        justify-center
        items-center
        gap-3
        hover:scale-[1.02]
        hover:shadow-xl
        transition-all
      "
      >
        Start Learning Journey

        <FaArrowRight />
      </button>

    </div>
  );
}

export default RecommendationCard;
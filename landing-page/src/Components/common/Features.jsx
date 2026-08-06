import React from "react";

import {
  FaRobot,
  FaBook,
  FaSitemap,
  FaClipboardCheck,
  FaChartLine,
  FaTrophy,
  FaArrowRight,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import FeatureCard from "./Featurecard";
import featureData from "./Featuredata";
import CTA from "./CTA";


function Features() {
  const features = [
    {
      number: "01",
      icon: <FaRobot />,
      title: "AI Mentor Replay",
      description:
        "Every live session is automatically converted into notes, summaries, quizzes and action plans.",
      color: "from-violet-500 to-blue-500",
      badge: "NEW",
    },

    {
      number: "02",
      icon: <FaBook />,
      title: "AI Flashcards",
      description:
        "SkillMate instantly creates smart flashcards from every lesson for effortless revision.",
      color: "from-pink-500 to-purple-500",
      badge: "AI",
    },

    {
      number: "03",
      icon: <FaSitemap />,
      title: "AI Mind Maps",
      description:
        "Visualize difficult concepts automatically with AI-generated concept maps.",
      color: "from-green-400 to-emerald-500",
      badge: "NEW",
    },

    {
      number: "04",
      icon: <FaClipboardCheck />,
      title: "AI Quiz Generator",
      description:
        "Practice immediately after every session using personalized AI-generated quizzes.",
      color: "from-orange-400 to-red-400",
      badge: "SMART",
    },

    {
      number: "05",
      icon: <FaChartLine />,
      title: "Growth Timeline",
      description:
        "Track every skill you learn, teach and master with your personal learning timeline.",
      color: "from-cyan-400 to-blue-500",
      badge: "PRO",
    },

    {
      number: "06",
      icon: <FaTrophy />,
      title: "Skill Quest",
      description:
        "Complete daily learning quests, earn XP, unlock badges and level up your profile.",
      color: "from-yellow-400 to-orange-500",
      badge: "XP",
    },
  ];

  return (
    <section className="mt-7 py-24 bg-[#EEF4FF] via-white to-[#f7f8ff]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="px-5 py-2 text-3xl bg-indigo-100 text-indigo-600 rounded-full font-semibold tracking-wide">
            FEATURES
          </span>

          <h1 className="text-5xl font-bold mt-8 leading-tight">

            Everything You Need to{" "}

 <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600   to-blue-500">
              Learn, Teach & Grow
            </span>

          </h1>

          <p className="text-gray-500 text-lg mt-6 max-w-3xl mx-auto leading-8">
            SkillMate transforms every learning session into an AI-powered
            learning experience.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

          {features.map((feature) => (

            <div
              key={feature.number}
              className="group bg-white rounded-3xl border border-gray-100 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-500 relative overflow-hidden"
            >

              {/* Number */}

              <div className="absolute right-6 top-6">

                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-bold">
                  {feature.number}
                </span>

              </div>

              {/* Badge */}

              <div className="absolute left-8 top-8">

                <span className="bg-violet-100 text-violet-600 text-xs px-3 py-1 rounded-full font-semibold">
                  {feature.badge}
                </span>

              </div>

              {/* Icon */}

              <div
                className={`mt-10 w-20 h-20 rounded-3xl bg-gradient-to-r ${feature.color} text-white flex items-center justify-center text-4xl shadow-lg`}
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

              {/* Preview */}

              <div className="bg-gray-50 rounded-2xl p-5 mt-8 border-b-blue-600">

                {feature.number === "01" && (
                  <div className="space-y-2">
                    <p>📝 AI Notes</p>
                    <p>📄 Summary</p>
                    <p>🧠 Mind Map</p>
                    <p>❓ Quiz</p>
                    <p>📅 Action Plan</p>
                  </div>
                )}

                {feature.number === "02" && (
                  <div className="bg-white rounded-xl shadow p-4 text-center">
                    <p className="text-xs text-gray-400">FRONT</p>

                    <h3 className="font-semibold mt-3">
                      What is React Hook?
                    </h3>

                    <button className="mt-5 text-blue-600 font-semibold">
                      Tap to Flip
                    </button>
                  </div>
                )}

                {feature.number === "03" && (
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 px-3 py-1 rounded-full">
                      React
                    </span>

                    <span className="bg-pink-100 px-3 py-1 rounded-full">
                      Hooks
                    </span>

                    <span className="bg-green-100 px-3 py-1 rounded-full">
                      JSX
                    </span>

                    <span className="bg-yellow-100 px-3 py-1 rounded-full">
                      State
                    </span>
                  </div>
                )}

                {feature.number === "04" && (
                  <div>

                    <p className="font-semibold">
                      Which hook updates state?
                    </p>

                    <div className="space-y-2 mt-3">

                      <div className="border rounded-lg p-2">useState</div>

                      <div className="border rounded-lg p-2">useMemo</div>

                      <div className="border rounded-lg p-2">useEffect</div>

                    </div>

                  </div>
                )}

                {feature.number === "05" && (
                  <div>

                    <div className="grid grid-cols-7 gap-1">

                      {Array.from({ length: 42 }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-4 rounded ${
                            Math.random() > 0.4
                              ? "bg-green-400"
                              : "bg-green-100"
                          }`}
                        />
                      ))}

                    </div>

                  </div>
                )}

                {feature.number === "06" && (
                  <div>

                    <p className="font-semibold">
                      Teach 3 Students
                    </p>

                    <div className="w-full bg-gray-200 rounded-full h-3 mt-4">

                      <div className="bg-yellow-500 h-3 rounded-full w-2/3"></div>

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

              {/* Button */}

              <button className="flex items-center gap-2 mt-8 font-semibold text-indigo-600 group-hover:gap-4 duration-300">
                Learn More
                <FaArrowRight />
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;
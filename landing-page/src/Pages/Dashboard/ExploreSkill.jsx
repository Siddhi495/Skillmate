
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import { useRef } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MentorProfile from "./MentorProfile";
import SkillCard from "./SkillCard";
import skills from "./skillData";
function ExploreSkill() {
  
  const prevRef = useRef(null);
const nextRef = useRef(null);

 const mentors = [
  {
    id: 4,
    name: "Rahul Sharma",
    role: "Frontend Developer",
    skill: "React.js",
    experience: "4 years",
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "AI Engineer",
    skill: "Machine Learning",
    experience: "5 years",
  },
  {
    id: 6,
    name: "Amit Verma",
    role: "UI/UX Designer",
    skill: "Figma",
    experience: "3 years",
  },
  {
    id: 7,
    name: "Sneha Reddy",
    role: "Backend Developer",
    skill: "Node.js",
    experience: "6 years",
  },
  {
    id: 8,
    name: "Arjun Mehta",
    role: "Full Stack Developer",
    skill: "MERN Stack",
    experience: "5 years",
  },
  {
    id: 9,
    name: "Neha Kapoor",
    role: "Data Scientist",
    skill: "Python",
    experience: "7 years",
  },
  {
    id: 10,
    name: "Karan Singh",
    role: "Cloud Engineer",
    skill: "AWS",
    experience: "4 years",
  },
  {
    id: 11,
    name: "Ananya Gupta",
    role: "Mobile App Developer",
    skill: "Flutter",
    experience: "3 years",
  },
  {
    id: 12,
    name: "Rohan Desai",
    role: "DevOps Engineer",
    skill: "Docker & Kubernetes",
    experience: "6 years",
  },
  {
    id: 13,
    name: "Meera Iyer",
    role: "Cybersecurity Analyst",
    skill: "Ethical Hacking",
    experience: "5 years",
  },
];

  return (
    <div className="space-y-10">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold line text-gray-900">
          Explore Skills
        </h1>
        <p className="text-gray-500 mt-2">
          Discover new skills, connect with expert mentors, and start your learning journey.
        </p>
      </div>

      {/* Search Section */}
      <section className="bg-white rounded-2xl shadow-md p-6">

        <div className="flex flex-col lg:flex-row gap-4">

          <input
            type="text"
            placeholder="🔍 Search skills, mentors or technologies..."
            className="flex-1 border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />


          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition">
            Search
          </button>

        </div>

      </section>

      {/* Categories */}
      <section>

        <h2 className="text-2xl font-semibold mb-6">
          Browse Categories
        </h2>

        <div className="grid grid-cols-2 outline-0 border-b-blue-500 md:grid-cols-4 lg:grid-cols-8 gap-4">

          {[
            "Technology",
            "Design",
            "Business",
            "Languages",
            "AI & ML",
            "Photography",
            "Music",
            "Academic",
          ].map((category) => (
            <div
              key={category}
              className="bg-white rounded-xl shadow hover:shadow-lg cursor-pointer transition p-5 text-center"
            >
              <p className="font-medium">{category}</p>
            </div>
          ))}

        </div>

      </section>

      {/* Skills */}
      <section>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">
            Popular Skills
          </h2>

          <button className="text-blue-600 hover:underline">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Placeholder Cards */}

{skills.map((skill) => (
  <SkillCard
    key={skill.id}
    title={skill.title}
    image={skill.image}
    level={skill.level}
    color={skill.color}
  />
))}

        </div>

      </section>


      {/* Mentors */}

      <section>
        


        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-semibold">
            Recommended Mentors
          </h2>

      <div className="flex items-center gap-3">
  <button
    ref={prevRef}
    className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition"
  >
    <FaArrowLeft size={14} />
  </button>

  <button
    ref={nextRef}
    className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition"
  >
    <FaArrowRight size={14} />
  </button>
</div>

        </div>

     <Swiper
  modules={[ Navigation , Pagination]}
  
  pagination={{ clickable: true }}
  spaceBetween={20}
    onBeforeInit={(swiper) => {
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
  }}
  navigation={{
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  }}
  breakpoints={{
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  }}
>
  {mentors.map((mentor) => (
    <SwiperSlide key={mentor.id}>
      <MentorProfile mentor={mentor} />
    </SwiperSlide>
  ))}
</Swiper>

      </section>

    </div>
  );
}

export default ExploreSkill;
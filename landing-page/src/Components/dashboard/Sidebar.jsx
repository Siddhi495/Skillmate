import {
  FaHome,
  FaCompass,
  FaRobot,
  FaLightbulb,
  FaCheckSquare,
  FaDownload,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
  FaChevronDown,
} from "react-icons/fa";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const menuItems = [
  {
    title: "Dashboard",
    icon: <FaHome />,
   
    path: "/dashboard",
  },

 {
  title: "Explore Skills",
  icon: <FaCompass />,
  path: "/dashboard/explore",
},
  {
    title: "AI Learning",
    icon: <FaRobot />,
    dropdown: true,

    children: [
      "AI Mentor Replay",
      "AI Flashcards",
      "AI Mind Maps",
      "AI Quiz Generator",
      "AI Chat",
    ],
  },

  {
    title: "Downloads",
    icon: <FaDownload />,
  },

  {
    title: "To-Do List",
    icon: <FaCheckSquare />,
  },

  {
    title: "Project Ideas",
    icon: <FaLightbulb />,
  },

  {
  title: "Profile",
  icon: <FaUserCircle />,
  path: "/profile/edit",
},

  {
    title: "Settings",
    icon: <FaCog />,
  },
];

function Sidebar() {
  const [openAI, setOpenAI] = useState(false);

  return (
    <aside className="
fixed
top-0
left-0

w-72
h-screen
bg-gradient-to-b
from-[#D6E8FF]
to-[#BDD7FF]
border-r
border-blue-300
shadow-xl
...
">
      {/* Logo */}

      <div>
        <div className="px-7 py-8 border-b border-blue-200">
          <h1 className="text-4xl font-extrabold tracking-tight">
            <span className="text-slate-900">Skill</span>
            <span className="text-blue-600">Mate</span>
          </h1>

          <p className="text-gray-600 mt-2 text-sm">
            Learn Smarter with AI
          </p>
        </div>

        {/* Menu */}

       <nav className="mt-6 px-3">
  {menuItems.map((item) => (
    <div key={item.title}>
      {item.dropdown ? (
        // Dropdown Button
        <button
          onClick={() => setOpenAI(!openAI)}
          className="
            w-full
            flex
            items-center
            justify-between
            px-5
            py-3.5
            rounded-2xl
            mb-2
            transition-all
            duration-300
            text-slate-700
            hover:bg-white/70
            hover:shadow-md
            hover:translate-x-1
          "
        >
          <div className="flex items-center gap-4">
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.title}</span>
          </div>

          <FaChevronDown
            className={`transition-transform duration-300 ${
              openAI ? "rotate-180" : ""
            }`}
          />
        </button>
      ) : (
        // Normal Navigation Links
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `
            w-full
            flex
            items-center
            gap-4
            px-5
            py-3.5
            rounded-2xl
            mb-2
            transition-all
            duration-300
            ${
              isActive
                ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg"
                : "text-slate-700 hover:bg-white/70 hover:shadow-md hover:translate-x-1"
            }
          `
          }
        >
          <span className="text-lg">{item.icon}</span>
          <span className="font-medium">{item.title}</span>
        </NavLink>
      )}

      {/* AI Learning Dropdown */}
      {item.dropdown && openAI && (
        <div className="ml-14 mb-3 space-y-2">
          {item.children.map((child) => (
            <button
              key={child}
              className="
                block
                text-sm
                text-slate-600
                hover:text-blue-600
                hover:translate-x-1
                transition-all
              "
            >
              {child}
            </button>
          ))}
        </div>
      )}
    </div>
  ))}
</nav>
      </div>


      {/* Logout */}

      <div className="border-t border-blue-200 p-6">
        <button
          className="
          flex
          items-center
          gap-4
          text-red-500
          hover:text-red-600
          transition
          "
        >
          <FaSignOutAlt className="text-lg" />

          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
import {
  FaBell,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

function Topbar() {
  return (
    <header className="h-20 bg-white shadow-sm border-b border-gray-200 px-8 flex items-center justify-between">

      {/* Left Section */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome Back 👋
        </h1>

        <p className="text-gray-500 text-sm mt-1">
          Continue your learning journey with SkillMate
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">

        {/* Search Bar */}
     

        {/* Notification Button */}
        <button className="relative p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition">

          <FaBell className="text-gray-700 text-xl" />

          <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-red-500"></span>

        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 cursor-pointer">

          <FaUserCircle className="text-4xl text-blue-600" />

          <div>
            <h2 className="font-semibold text-gray-800">
              Siddhi
            </h2>

            <p className="text-sm text-gray-500">
              Student
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;
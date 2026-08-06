import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col md:flex-row gap-4 items-center">

      {/* Search Input */}
      <div className="flex items-center flex-1 border rounded-xl px-4 py-3">
        <FaSearch className="text-gray-400 mr-3" />

        <input
          type="text"
          placeholder="Search skills, mentors or technologies..."
          className="w-full outline-none"
        />
      </div>

      {/* Category */}
      <select className="border rounded-xl px-4 py-3">
        <option>All Categories</option>
        <option>Web Development</option>
        <option>AI & ML</option>
        <option>Data Science</option>
        <option>Cloud</option>
        <option>UI/UX</option>
      </select>

      {/* Button */}
      <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
        Search
      </button>

    </div>
  );
}

export default SearchBar;
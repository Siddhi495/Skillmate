import { FaArrowRight } from "react-icons/fa";

function SkillCard({
  title,
  level,
  image,
  color = "bg-blue-100",
}) {
  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer fit-content">

      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 h-44 flex items-center justify-center">

        <img
          src={image}
          alt={title}
          className="w-24 h-24 object-contain group-hover:scale-110 transition"
        />

      </div>

      <div className="p-5">

        <h3 className="text-xl font-bold text-gray-800">
          {title}
        </h3>

        <div className="flex justify-between items-center mt-5">

          <span className={`px-4 py-2 rounded-full text-sm font-semibold ${color}`}>
            {level}
          </span>

          <button className="w-11 h-11 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition flex items-center justify-center">
            <FaArrowRight />
          </button>

        </div>

      </div>

    </div>
  );
}

export default SkillCard;
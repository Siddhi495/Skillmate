import { FaStar, FaBriefcase } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function MentorProfile({ mentor }) {
   const navigate = useNavigate();
   const handleStartLearning = () => {
  navigate(`/chat/${mentor.id}`, {
    state: { mentor },
  });
};
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 h-[380px] flex flex-col hover:shadow-xl transition duration-300  mb-9">

      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-600">
          {mentor.name.charAt(0)}
        </div>

        <div>
          <h2 className="text-xl font-bold">{mentor.name}</h2>
          <p className="text-gray-500">{mentor.role}</p>
        </div>
      </div>

      {/* Details */}
      <div className="mt-6 space-y-4">
        <p>
          <span className="font-semibold">Skill:</span> {mentor.skill}
        </p>

        <p className="flex items-center gap-2 text-gray-700">
          <FaBriefcase className="text-blue-600" />
          {mentor.experience}
        </p>

        <p className="flex items-center gap-2 text-gray-700">
          <FaStar className="text-yellow-500" />
          4.8 Rating
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-auto flex gap-3 pt-6">
       <button
  onClick={handleStartLearning}
  className="flex-1 bg-blue-600 text-white py-2.5 rounded-xl font-medium hover:bg-blue-700 transition"
>
  Start Learning
</button>

        <button className="flex-1 border border-blue-600 text-blue-600 py-2.5 rounded-xl font-medium hover:bg-blue-50 transition">
          View Profile
        </button>
      </div>

    </div>
  );
}

export default MentorProfile;
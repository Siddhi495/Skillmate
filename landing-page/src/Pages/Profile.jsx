import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Profile Page</h1>

      <button 
        onClick={() => navigate("/profile/edit")}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Edit Profile
      </button>
    </div>
  );
}

export default Profile;
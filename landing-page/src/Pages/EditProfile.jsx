import { useState } from "react";

function EditProfile() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    college: "",
    skill: "",
    experience: "",
    bio: "",
    github: "",
    linkedin: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Later we'll send data to backend
    console.log(formData);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-6">
        Edit Profile
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          name="college"
          placeholder="College"
          value={formData.college}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          name="skill"
          placeholder="Skills"
          value={formData.skill}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          name="bio"
          placeholder="Tell us about yourself..."
          value={formData.bio}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="url"
          name="github"
          placeholder="GitHub Profile"
          value={formData.github}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="url"
          name="linkedin"
          placeholder="LinkedIn Profile"
          value={formData.linkedin}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Save Changes
        </button>

      </form>
    </div>
  );
}

export default EditProfile;
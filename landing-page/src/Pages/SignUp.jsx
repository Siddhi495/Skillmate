import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
const [city, setCity] = useState("");
const [college, setCollege] = useState("");
const [skill, setSkill] = useState("");
const [experience, setExperience] = useState("");
const [bio, setBio] = useState("");
const [linkedin, setLinkedin] = useState("");
const [github, setGithub] = useState("");


  const handleSignup = async (e) => {
    e.preventDefault();

    try {
const res=await axios.post("http://localhost:5000/signup", {
  name,
  email,
  password,
  phone,
  city,
  college,
  skill,
  experience,
  bio,
  linkedin,
  github,
 
});

      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded-xl shadow-lg w-[400px]"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded-lg mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

       <input
  type="password"
  placeholder="Password"
  autoComplete="new-password"
  className="w-full border p-3 rounded-lg mb-6"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
/>
   
        <button className="w-full bg-green-600 text-white py-3 rounded-lg">
          Sign Up
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
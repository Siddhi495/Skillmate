import image from "../../assets/image.png"
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">

     <div className="max-w-7xl mx-auto flex justify-between items-center h-25 px-16 py-6 ">

        <div className="w-[9%] flex gap-3">
          <img src={image}  />
        
        <h1 className="text-4xl font-bold text-blue-600 mt-3">
          SkillMate
        </h1>
</div>
      <ul className="flex items-center gap-10 text-xl">
        <li className="text-2xl hover:text-blue-600">
          <a href="#home">Home</a>
        </li>

        <li className="text-2xl hover:text-blue-600">
          <a href="#features">Features</a>
        </li>

        <li className="text-2xl hover:text-blue-600">
          <a href="#about">HowItWorks</a>
        </li>

        <li>
          <Link to="/login" >
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-xl hover:bg-blue-700 transition">
              login
            </button>
            </Link>
        </li>

        <li>
          <Link to="/signup" >
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl text-xl hover:bg-blue-600 hover:text-white transition">
              Sign up
            </button>
            </Link>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
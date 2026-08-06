import skill3 from "../../assets/skill3.png";

import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  return (

    <section
      id="home"
      className="min-h-screen bg-[#EEF4FF] flex items-center pt-12"
    >
      
      <div className="max-w-7xl mx-auto px-16 flex items-center justify-between w-full">

        {/* Left Side */}
<div className="w-[65%]">
            <h1 className="text-5xl mt-7 font-bold text-blue-600 leading-tight">
            Learn. Teach. Grow  <br />
            <span />
          
            Together.
          </h1>

          <p className="mt-4 text-xl text-gray-700 leading-10">
            A platform where students exchange skills with each other.
            <br />
            Teach what you know, learn what you love,and build
            <br />
            meaningful connections.
          </p>

          <div className="mt-10 flex gap-6">
            <button
  onClick={() => navigate("/dashboard")}
  className="bg-blue-600 text-white px-8 py-4 rounded-xl text-xl hover:bg-blue-700 transition"
>
  Get Started
</button>

            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl text-xl hover:bg-blue-600 hover:text-white transition">
              Explore Skills
            </button>
          </div>
        </div>

        {/* Right Side */}
<div className=" w-[75%] h-70% flex justify-end mt-14 ml-14">
            <img 
            src={skill3}
           className="w-[170%] h-[70%]"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
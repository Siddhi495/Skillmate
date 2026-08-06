import StatsCard from "../../Components/dashboard/StatsCard";
import SkillCard from "../../Pages/Dashboard/SkillCard";
import RecommendationCard from "../../Components/dashboard/RecommendationCard";
import ProgressCard from "../../Components/dashboard/ProgressCard";
import ActivityCard from "../../Components/dashboard/ActivityCard";
import LearningHours from "../../Components/dashboard/LearningHours";
import { FaBookOpen, FaCheckCircle, FaClock } from "react-icons/fa";
function Dashboard() {
  return (
    <div className="space-y-8">

      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500">
          Track your learning progress.
        </p>
      </div>

      {/* STEP 1 GOES HERE */}
      <div className="grid grid-cols-3 gap-6 ">

        <StatsCard
          icon={<FaBookOpen />}
          title="Courses"
          value="12"
        />

        <StatsCard
          icon={<FaCheckCircle />}
          title="Completed"
          value="5"
          color="bg-green-500"
        />

        <StatsCard
          icon={<FaClock />}
          title="Hours"
          value="96"
          color="bg-purple-500"
        />

      </div>

      {/* STEP 2 GOES HERE */}
      <div className="grid lg:grid-cols-3 gap-6 mt-17">

        <SkillCard
          title="React.js"
          category="Frontend Development"
          level="Intermediate"
          progress={65}
          duration="12 Hours"
          
        />

        <RecommendationCard />

       

        
       

      <LearningHours />

      {/* Other cards */}
      
  

      </div>

      STEP 3 GOES HERE
      <ActivityCard />

     

    </div>
  );
}

export default Dashboard;
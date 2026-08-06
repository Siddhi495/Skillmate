import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts";

import {
  FaClock,
  FaFire,
  FaChartLine
} from "react-icons/fa";


function LearningHours() {


  const hoursData = [
    { day: "Mon", hours: 2 },
    { day: "Tue", hours: 4 },
    { day: "Wed", hours: 1 },
    { day: "Thu", hours: 5 },
    { day: "Fri", hours: 3 },
    { day: "Sat", hours: 6 },
    { day: "Sun", hours: 2 },
  ];


  // Total hours of the week
  const totalHours = hoursData.reduce(
    (sum, item) => sum + item.hours,
    0
  );


  // Average learning per day
  const averageHours = (
    totalHours / hoursData.length
  ).toFixed(1);



  return (
<div className="bg-white rounded-2xl shadow-md 
hover:shadow-xl transition-all duration-300 
p-4 w-full max-w-sm">


      {/* Header */}

      <div className="flex items-center gap-3 mb-5">

        <div className="w-10 h-10 rounded-xl 
        bg-purple-100 flex items-center justify-center">

          <FaClock className="text-purple-600 text-lg"/>

        </div>


        <h2 className="text-lg font-semibold text-gray-800">
          Learning Activity
        </h2>

      </div>




      {/* Circular Chart */}

      <div className="relative h-36">


        <ResponsiveContainer>

          <PieChart>


            <Pie

              data={[
                {
                  name: "Learned",
                  value: totalHours
                },
                {
                  name: "Remaining",
                  value: 25
                }
              ]}

              dataKey="value"

              innerRadius={50}

              outerRadius={65}

              startAngle={90}

              endAngle={-270}

              cornerRadius={12}

              paddingAngle={3}

            >


              <Cell fill="#9333ea"/>

              <Cell fill="#ede9fe"/>


            </Pie>


          </PieChart>


        </ResponsiveContainer>



        {/* Center Text */}

        <div className="absolute inset-0 
        flex flex-col items-center justify-center">


          <h1 className="text-3xl font-bold text-gray-900">
            {totalHours}
          </h1>


          <p className="text-gray-500 text-sm">
            hrs this week
          </p>


        </div>


      </div>




      {/* Learning Insights */}


      <div className="grid grid-cols-2 gap-3 mt-3">


        {/* Streak */}

        <div className="bg-orange-50 rounded-xl p-2">

          <div className="flex items-center gap-2">

            <FaFire className="text-orange-500"/>

            <p className="text-sm text-gray-600">
              Streak
            </p>

          </div>


          <h3 className="text-xl font-bold mt-1">
            5 Days
          </h3>


        </div>




        {/* Average */}

        <div className="bg-blue-50 rounded-xl p-3">


          <div className="flex items-center gap-2">

            <FaChartLine className="text-blue-500"/>

            <p className="text-sm text-gray-600">
              Average
            </p>

          </div>


          <h3 className="text-xl font-bold mt-1">
            {averageHours} hrs
          </h3>


        </div>


      </div>





      {/* Daily Hours */}


      <div className="mt-3 space-y-2">


        {
          hoursData.map((item)=>(

            <div key={item.day}>


              <div className="flex justify-between mb-1">


                <span className="text-sm text-gray-500">
                  {item.day}
                </span>


                <span className="text-sm font-semibold">
                  {item.hours} hrs
                </span>


              </div>




              <div className="h-2 bg-gray-100 rounded-full">


                <div

                  className="h-2 bg-purple-500 rounded-full"

                  style={{
                    width:`${item.hours * 15}%`
                  }}

                >

                </div>


              </div>


            </div>

          ))
        }


      </div>



    </div>

  );
}


export default LearningHours;
import { FaCheckCircle } from "react-icons/fa";

function ActivityCard() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

      <h2 className="text-xl font-bold">
        Recent Activity
      </h2>

      <div className="mt-6 space-y-5">

        <div className="flex items-center gap-4">

          <FaCheckCircle className="text-green-500" />

          <div>

            <h3 className="font-semibold">
              Completed React Hooks
            </h3>

            <p className="text-gray-500 text-sm">
              2 hours ago
            </p>

          </div>

        </div>

        <div className="flex items-center gap-4">

          <FaCheckCircle className="text-green-500" />

          <div>

            <h3 className="font-semibold">
              Finished JavaScript Quiz
            </h3>

            <p className="text-gray-500 text-sm">
              Yesterday
            </p>

          </div>

        </div>

        <div className="flex items-center gap-4">

          <FaCheckCircle className="text-green-500" />

          <div>

            <h3 className="font-semibold">
              Started Node.js Roadmap
            </h3>

            <p className="text-gray-500 text-sm">
              3 days ago
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ActivityCard;
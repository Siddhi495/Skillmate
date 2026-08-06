function ProgressCard() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

      <h2 className="text-xl font-bold">
        Weekly Progress
      </h2>

      <p className="text-gray-500 mt-1">
        Keep it up!
      </p>

      <div className="mt-8">

        <div className="flex justify-between">
          <span>Learning Goal</span>
          <span>75%</span>
        </div>

        <div className="w-full bg-gray-200 h-3 rounded-full mt-2">

          <div className="bg-green-500 h-3 rounded-full w-3/4"></div>

        </div>

      </div>

      <div className="mt-8 flex justify-between">

        <div>

          <h3 className="font-bold text-2xl">
            18
          </h3>

          <p className="text-gray-500">
            Hours
          </p>

        </div>

        <div>

          <h3 className="font-bold text-2xl">
            7
          </h3>

          <p className="text-gray-500">
            Days
          </p>

        </div>

      </div>

    </div>
  );
}

export default ProgressCard;
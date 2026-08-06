function StatsCard({
  title,
  value,
  icon,
  color = "bg-blue-500",
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

      <div className={`w-12 h-12 ${color} rounded-xl`}>
        <div className="flex items-center justify-center h-full">
          {icon }
      </div>
</div>
      <h3 className="text-gray-500 mt-5">
        {title}
      </h3>

      <h1 className="text-4xl font-bold mt-2">
        {value}
      </h1>

    </div>
  );
}

export default StatsCard;
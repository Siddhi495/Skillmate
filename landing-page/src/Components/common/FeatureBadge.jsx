function FeatureBadge({ feature }) {
  const Icon = feature.icon;

  return (
    <div
      className={`group bg-white rounded-2xl border border-gray-100 shadow-md
      hover:shadow-xl transition-all duration-300 p-6 flex items-center gap-4
      hover:-translate-y-2`}
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color}
        flex items-center justify-center text-white text-2xl shadow-lg`}
      >
        <Icon />
      </div>

      {/* Content */}
      <div>
        <h3 className="font-bold text-gray-900">
          {feature.title}
        </h3>

        <p className="text-gray-500 text-sm mt-1 leading-6">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

export default FeatureBadge;
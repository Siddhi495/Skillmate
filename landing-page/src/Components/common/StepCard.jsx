import { FaArrowRight } from "react-icons/fa";

function StepCard({ step }) {
  const Icon = step.icon;

  return (
    <div className="relative flex flex-col items-center text-center group">

      {/* Step Number */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
        <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center shadow-md">
          {step.id}
        </div>
      </div>

      {/* Circle Icon */}
      <div
        className="w-28 h-28 rounded-full bg-white border-2 border-blue-100 shadow-lg
        flex items-center justify-center text-5xl text-blue-600
        transition-all duration-300
        group-hover:scale-110
        group-hover:shadow-2xl"
      >
        <Icon />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-xl font-bold text-gray-900">
        {step.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-gray-500 text-sm leading-6
       max-w-180px">
        {step.description}
      </p>

      {/* Arrow (Desktop Only) */}
      {!step.last && (
        <div className="hidden lg:flex absolute top-12 -right-10 text-blue-400 text-2xl">
          <FaArrowRight />
        </div>
      )}
    </div>
  );
}

export default StepCard;
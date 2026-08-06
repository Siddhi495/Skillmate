import StepCard from "./StepCard.jsx";
import howItWorksData from "./HowItWorksData";

import FeatureBadge from "./FeatureBadge";
import featureBadgeData from "./featureBadgeData";

function HowItWorks() {
  return (
    <section className="py-24 bg-[#EEF4FF] ">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="px-5 text-3xl py-2 rounded-full bg-indigo-100 text-indigo-600 font-semibold">
            HOW IT WORKS
          </span>

          
          <p className="text-gray-500 text-lg mt-5 max-w-2xl mx-auto">
            SkillMate makes learning and teaching simple with AI-powered
            matching and collaborative learning.
          </p>

        </div>

        {/* Steps */}

        <div className="relative mt-24">

          {/* Desktop connecting line */}

          <div className="hidden lg:block absolute top-14 left-20 right-20 h-[2px] bg-gradient-to-r from-blue-300 via-indigo-400 to-violet-400"></div>

          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-10 relative z-10">

            {howItWorksData.map((step) => (

              <StepCard
                key={step.id}
                step={step}
              />

            ))}

          </div>

        </div>

        {/* Bottom Feature Cards */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-24">

          {featureBadgeData.map((feature) => (

            <FeatureBadge
              key={feature.id}
              feature={feature}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;
import Image from "next/image";
import { Icon } from "@iconify/react";

const features = [
  { label: "Strategic Career Guidance" },
  { label: "Leadership Development" },
  { label: "CV Development" },
  { label: "Sustainability Leadership" },
  { label: "Communication Skills" },
  { label: "Business Model" },
];

export default function Schedule() {
  return (
    <section className="w-full bg-white py-8" id="transformation-hub">
      <div className="max-w-content mx-auto px-8">
        <div className="bg-[#fce8ed] rounded-2xl px-6 lg:px-10 py-10 lg:py-12 flex flex-col gap-8">

          {/* Header */}
          <div className="flex flex-col gap-2">
            <p className="font-nunito-sans text-body-lg text-[#1671D9] font-semibold text-primary italic">
              Learning With Our CEO:
            </p>
            <h2 className="font-nunito text-h3 lg:text-h2 font-bold text-[#571244] text-neutral-950 leading-tight italic">
              Transformation Hub With Jite Newton
            </h2>
          </div>

          {/* Description */}
          <p className="font-nunito-sans text-body text-neutral-900 leading-relaxed">
            Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO,
            Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities,
            this exclusive event offers invaluable insights and strategies for personal and
            professional growth. Whether you&apos;re seeking to advance your career or enhance your
            leadership skills, the Transformation Hub provides a transformative learning experience
            to unlock your full potential and drive success in your endeavours.
          </p>

          {/* ── Mobile layout: image → single-col features → button ── */}
          <div className="flex flex-col gap-6 lg:hidden">
            {/* Image full width */}
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/transformation-hub.jpg"
                alt="Transformation Hub with Jite Newton"
                fill
                className="object-cover"
              />
            </div>

            {/* Single-column feature list */}
            <div className="flex flex-col gap-3">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-3 px-4 py-4 rounded-xl bg-white shadow-sm"
                >
                  <Icon
                    icon="tabler:bolt-filled"
                    width={20}
                    height={20}
                    className="text-primary shrink-0"
                  />
                  <span className="font-nunito-sans text-body text-neutral-900">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-nunito-sans font-semibold text-body rounded-lg hover:bg-primary-darkest transition-colors w-fit">
              Learn More
              <Icon icon="heroicons:arrow-up-right" width={18} height={18} />
            </button>
          </div>

          {/* ── Desktop layout: image left + 2-col grid right ── */}
          <div className="hidden lg:flex flex-col lg:flex-row gap-8 bg-[#FFFFFF4d] items-start">
            {/* Image */}
            <div className="w-full lg:w-[45%] relative aspect-[5/3] rounded-xl overflow-hidden shrink-0">
              <Image
                src="/images/transformation-hub.jpg"
                alt="Transformation Hub with Jite Newton"
                fill
                className="object-cover"
              />
            </div>

            {/* Feature grid + CTA */}
            <div className="w-full lg:w-[55%] mt-8  flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-3 ">
                {features.map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center gap-3 px-4 py-4 rounded-xl bg-white shadow-sm"
                  >
                    <Icon
                      icon="tabler:bolt-filled"
                      width={20}
                      height={20}
                      className="text-primary shrink-0"
                    />
                    <span className="font-nunito-sans text-body text-neutral-900">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-nunito-sans font-semibold text-body rounded-lg hover:bg-primary-darkest transition-colors w-fit">
                Learn More
                <Icon icon="heroicons:arrow-up-right" width={18} height={18} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
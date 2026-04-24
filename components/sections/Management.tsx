import Image from "next/image";
import { Icon } from "@iconify/react";

const features = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];

export default function Management() {
  return (
    <section className="w-full bg-white mt-8 py-8" id="management">
      <div className="max-w-content mx-auto px-8">
        <div className="bg-primary-deeper rounded-2xl overflow-hidden">

          {/* ── Mobile layout ── */}
          <div className="flex flex-col lg:hidden px-6 py-8 gap-6">
            {/* Title */}
            <h2 className="font-nunito text-h3 font-bold text-white leading-tight">
              Management Development Program
            </h2>

            {/* Image full width */}
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/management-development.jpg"
                alt="Management development program"
                fill
                className="object-cover"
              />
            </div>

            {/* Paragraphs */}
            <p className="font-nunito-sans text-body text-white/80 leading-relaxed">
              Tobams Group offers a comprehensive Management Development Program designed
              to equip corporate organisations with the high-performing leaders they need
              to thrive.
            </p>
            <p className="font-nunito-sans text-body text-white/80 leading-relaxed">
              Our program includes workshops, seminars, coaching sessions, online courses,
              and experiential learning opportunities designed to improve leadership,
              strategic thinking, communication, and other essential managerial
              competencies for corporate organisations.
            </p>

            {/* Feature pills */}
            <div className="flex flex-col gap-3">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 px-5 py-3.5 rounded-lg bg-white/10 border border-white/10"
                >
                  <Icon
                    icon="tabler:bolt-filled"
                    width={20}
                    height={20}
                    className="text-lavender shrink-0"
                  />
                  <span className="font-nunito-sans text-body font-semibold text-white">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Desktop layout: image left, content right ── */}
          <div className="hidden lg:flex items-stretch">
            {/* Image */}
            <div className="w-[48%] relative min-h-[520px]">
              <Image
                src="/images/management-development.jpg"
                alt="Management development program"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="w-[52%] flex flex-col justify-center gap-6 px-10 py-12">
              <h2 className="font-nunito text-h2 font-bold text-white leading-tight">
                Management Development Program
              </h2>
              <p className="font-nunito-sans text-body text-white/80 leading-relaxed">
                Tobams Group offers a comprehensive Management Development Program designed
                to equip corporate organisations with the high-performing leaders they need
                to thrive.
              </p>
              <p className="font-nunito-sans text-body text-white/80 leading-relaxed">
                Our program includes workshops, seminars, coaching sessions, online courses,
                and experiential learning opportunities designed to improve leadership,
                strategic thinking, communication, and other essential managerial
                competencies for corporate organisations.
              </p>
              <div className="flex flex-col gap-3 mt-2">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 px-5 py-3.5 rounded-lg bg-white/10 border border-white/10"
                  >
                    <Icon
                      icon="tabler:bolt-filled"
                      width={20}
                      height={20}
                      className="text-lavender shrink-0"
                    />
                    <span className="font-nunito-sans text-body font-semibold text-white">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import { Icon } from "@iconify/react";

const courses = [
  "Business Analysis",
  "Design Thinking",
  "Effective Communication",
  "Entrepreneurship",
  "Career Development",
  "Business Model",
];

export default function LMSBlock() {
  return (
    <section className="w-full bg-[#5712441A] py-20 border-t border-[#ddd0da]" id="lms">
      <div className="max-w-content mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Circular image */}
          <div className="w-full lg:w-[42%] flex items-center justify-center lg:justify-start shrink-0">
            {/* Mobile: responsive circle using aspect-ratio trick */}
            <div className="relative w-[75vw] max-w-[320px] lg:hidden aspect-square rounded-full overflow-hidden shadow-md">
              <Image
                src="/images/lms-team.jpg"
                alt="TG Academy team members"
                fill
                className="object-cover"
              />
            </div>
            {/* Desktop: fixed size circle */}
            <div className="relative hidden lg:block w-[380px] h-[380px] rounded-full overflow-hidden shadow-md">
              <Image
                src="/images/lms-team.jpg"
                alt="TG Academy team members"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-[58%] flex flex-col gap-6">

            <h2 className="font-nunito text-h3 lg:text-[40px] font-bold text-primary leading-tight">
              Learning Management System
            </h2>

            {/* Description card */}
            <div className="bg-[#ddd0e6] rounded-xl p-5 lg:p-6 flex flex-col gap-5">
              <p className="font-nunito-sans text-body text-neutral-900 leading-[1.7]">
                TG Academy is a hub of knowledge and skill-building resources designed to
                empower tech talents on their learning journey. From technical courses
                covering the latest programming languages and development frameworks to
                soft skills training in leadership, effective communication and project
                management, TG Academy offers a wide range of courses to cater to diverse
                learning needs. With accessible and interactive learning materials, individuals
                can enhance their skills and stay ahead in today&apos;s competitive tech landscape.
              </p>

              <div className="flex flex-col gap-3">
                <p className="font-nunito-sans text-body font-bold text-primary">
                  Some of our courses include:
                </p>

                {/* Mobile: single column */}
                <ul className="flex flex-col gap-2 lg:hidden">
                  {courses.map((course) => (
                    <li key={course} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0" />
                      <span className="font-nunito-sans text-body-sm text-neutral-900">
                        {course}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Desktop: 3-column grid */}
                <div className="hidden lg:grid grid-cols-3 gap-x-4 gap-y-2">
                  {courses.map((course) => (
                    <div key={course} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0" />
                      <span className="font-nunito-sans text-body-sm text-neutral-900">
                        {course}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-nunito-sans font-semibold text-body rounded hover:bg-primary-darkest transition-colors w-fit">
              Learn More
              <Icon icon="heroicons:arrow-up-right" width={18} height={18} />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
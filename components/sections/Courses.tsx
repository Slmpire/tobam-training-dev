import Image from "next/image";
import { Icon } from "@iconify/react";

const corporateItems = [
  "Leadership Training",
  "Strategic Planning and Implementation",
  "Project Management",
  "Sustainability Training",
  "Customised Training",
];

const individualItems = [
  "Leadership Development",
  "Soft Skills Development",
  "Industry Specific Knowledge",
  "Technical Skills Enhancement",
  "Time Management and Productivity",
  "Career Development",
];

const capacityItems = [
  "Tailored Training Programs",
  "Expert-Led Workshops",
  "Personalized Mentorship",
  "Technical Skills Enhancement",
  "Collaborative Learning Environment",
  "Ongoing Support and Resources",
];

function BulletItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <Icon
        icon="tabler:bolt-filled"
        width={20}
        height={20}
        className="text-primary shrink-0"
      />
      <span className="font-nunito-sans text-body text-neutral-900">{text}</span>
    </li>
  );
}

export default function Courses() {
  return (
    <section className="w-full bg-white py-20" id="courses">
      <div className="max-w-content mx-auto px-8 flex flex-col gap-24">

        {/* 1. Corporate Trainings — text left, image right */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="font-nunito text-h2 font-bold text-neutral-950 leading-tight">
              Corporate Trainings
            </h2>
            <p className="font-nunito-sans text-body text-neutral-600 leading-relaxed">
              Empower your team with our customised Corporate Training programs designed
              to address the unique needs and objectives of your organisation. Our expert
              facilitators work closely with your team to deliver tailored learning
              experiences that align with your company&apos;s goals and values.
            </p>
            <ul className="flex flex-col gap-3">
              {corporateItems.map((item) => (
                <BulletItem key={item} text={item} />
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/corporate-training.jpg"
                alt="Corporate training session"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>


        {/* 2. Personalised Individual Training — image left, text right */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/individual-training.jpg"
                alt="Individual training session"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="font-nunito text-h2 font-bold text-neutral-950 leading-tight">
              Personalised Individual Training
            </h2>
            <p className="font-nunito-sans text-body text-neutral-600 leading-relaxed">
              Begin a journey of lifelong learning and professional development with
              Tobams Group&apos;s diverse range of training programs for individuals.
              From technical skills mastery to soft skills enhancement, our courses cover
              a wide spectrum of topics to meet the evolving needs of today&apos;s professionals.
            </p>
            <ul className="flex flex-col gap-3">
              {individualItems.map((item) => (
                <BulletItem key={item} text={item} />
              ))}
            </ul>
          </div>
        </div>

        {/* 3. Capacity Development — text left, image right */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="font-nunito text-h2 font-bold text-neutral-950 leading-tight">
              Capacity Development
            </h2>
            <p className="font-nunito-sans text-body text-neutral-600 leading-relaxed">
              At Tobams Group, we empower individuals and organizations through tailored
              training programs, expert-led workshops, and personalized mentorship. We are
              committed to your success and growth. We are dedicated to providing a
              comprehensive suite of benefits designed to foster your development and success:
            </p>
            <ul className="flex flex-col gap-3">
              {capacityItems.map((item) => (
                <BulletItem key={item} text={item} />
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/capacity-development.jpg"
                alt="Capacity development workshop"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
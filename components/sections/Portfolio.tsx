import { Icon } from "@iconify/react";

const features = [
  {
    title: "Expert-Led Learning",
    desc: "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
  },
  {
    title: "Interactive Workshops",
    desc: "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
  },
  {
    title: "Comprehensive Curriculum",
    desc: "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  },
  {
    title: "Global Recognition",
    desc: "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
  },
];

export default function Portfolio() {
  return (
    <section className="w-full bg-lavender py-20" id="training-consultant">
      <div className="max-w-content mx-auto px-8 flex flex-col gap-8">

        {/* Header */}
        <div className="flex flex-col gap-3">
          <h2 className="font-nunito text-h2 text-[#571244] font-semibold text-neutral-950 leading-tight">
            Training The Consultant
          </h2>
          <p className="font-nunito-sans text-body text-[#571244] font-semibold text-primary">
            Maximise Your Potential as a Certified Trainer:
          </p>
          <p className="font-nunito-sans text-body text-[#151515] text-neutral-900 leading-relaxed max-w-5xl">
            With the help of our Training Consultants program, take a revolutionary step toward
            becoming a distinguished certified training consultant. Learn from professionals in the
            field, immerse yourself in a thorough curriculum, and hone your training methods through
            interactive workshops. Participating in our program will enable you to gain expertise in
            diverse courses while also developing the abilities to mentor and encourage others in
            their career advancement.
          </p>
        </div>

        {/* 2x2 Feature Grid Card */}
        <div className=" bg-[#571244] rounded-xl grid grid-cols-1 md:grid-cols-2 gap-1 overflow-hidden">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`p-8 flex flex-col gap-1 ${
                i < 2 ? "" : ""
              } ${i % 2 === 0 ? "md:" : ""}`}
            >
              <h3 className="font-nunito-sans text-body-lg font-bold text-white">
                {feature.title}
              </h3>
              <p className="font-nunito-sans text-body-lg text-white/75 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div>
          <button className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-nunito-sans font-semibold text-body rounded hover:bg-primary-darkest transition-colors">
            Learn More
            <Icon icon="heroicons:arrow-up-right" width={18} height={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
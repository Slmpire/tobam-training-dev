"use client";
import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO of Tech Innovations Inc.",
    avatar: "/images/testimonial-1.jpg",
    quote:
      "Tobams Group is a true partner in our journey to digital excellence. Their creativity and technical expertise have propelled our projects to new heights. Their work is top-notch, and the results speak for themselves. I can't recommend them enough!",
  },
  {
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    avatar: "/images/testimonial-2.jpg",
    quote:
      "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
  },
  {
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    avatar: "/images/testimonial-3.jpg",
    quote:
      "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    avatar: "/images/testimonial-4.jpg",
    quote:
      "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(testimonials.length - 1, i + 1));

  // Desktop: show 3 at a time, clamp so we don't go past end
  const desktopStart = Math.min(index, testimonials.length - 3);
  const visibleDesktop = testimonials.slice(desktopStart, desktopStart + 3);

  // Mobile: show 1 at a time
  const t = testimonials[index];

  return (
    <>
      {/* CTA Banner */}
      <section className="w-full bg-neutral-50 py-12">
        <div className="max-w-content mx-auto px-8">
          <div className="bg-[#571244] rounded-xl px-12 py-10 flex flex-col items-center text-center gap-7 max-w-5xl mx-auto">
            <p className="font-nunito text-h4 font-semibold text-white leading-snug max-w-2xl">
              Want to accelerate professional growth and development at your organisation?
              See how we can help.
            </p>
            <button className="px-8 py-3 bg-white text-primary font-nunito-sans font-semibold text-body rounded hover:bg-lavender transition-colors">
              Book a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-neutral-50 py-16" id="testimonials">
        <div className="max-w-content mx-auto px-8 flex flex-col gap-12">

          <h2 className="font-nunito text-h2 font-bold text-neutral-950 text-center">
            Testimonials
          </h2>

          {/* ── Mobile: 1 card at a time ── */}
          <div className="flex flex-col gap-6 md:hidden">
            <TestimonialCard item={t} />
            <Arrows
              onPrev={prev}
              onNext={next}
              prevDisabled={index === 0}
              nextDisabled={index === testimonials.length - 1}
            />
          </div>

          {/* ── Desktop: 3 cards at a time ── */}
          <div className="hidden md:flex flex-col gap-6">
            <div className="grid grid-cols-3 gap-6">
              {visibleDesktop.map((item) => (
                <TestimonialCard key={item.name} item={item} />
              ))}
            </div>
            <Arrows
              onPrev={prev}
              onNext={next}
              prevDisabled={desktopStart === 0}
              nextDisabled={desktopStart >= testimonials.length - 3}
            />
          </div>

        </div>
      </section>
    </>
  );
}

function TestimonialCard({
  item,
}: {
  item: { name: string; role: string; avatar: string; quote: string };
}) {
  return (
    <div className="bg-white rounded-xl p-6 flex flex-col gap-4 border-l-4 border-accent-red shadow-sm">
      <div className="flex items-center gap-3">
        <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
          <Image src={item.avatar} alt={item.name} fill className="object-cover" />
        </div>
        <div>
          <p className="font-nunito-sans text-body font-semibold text-neutral-900">
            {item.name}
          </p>
          <p className="font-nunito-sans text-caption text-neutral-600">{item.role}</p>
        </div>
      </div>
      <p className="font-nunito-sans text-body-sm text-neutral-900 leading-relaxed">
        {item.quote}
      </p>
    </div>
  );
}

function Arrows({
  onPrev,
  onNext,
  prevDisabled,
  nextDisabled,
}: {
  onPrev: () => void;
  onNext: () => void;
  prevDisabled: boolean;
  nextDisabled: boolean;
}) {
  return (
    <div className="flex justify-end gap-3">
      <button
        onClick={onPrev}
        disabled={prevDisabled}
        className="w-10 h-10 rounded-full border border-accent-red flex items-center justify-center text-accent-red hover:bg-accent-red hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <Icon icon="heroicons:chevron-left" width={18} height={18} />
      </button>
      <button
        onClick={onNext}
        disabled={nextDisabled}
        className="w-10 h-10 rounded-full border border-accent-red flex items-center justify-center text-accent-red hover:bg-accent-red hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <Icon icon="heroicons:chevron-right" width={18} height={18} />
      </button>
    </div>
  );
}
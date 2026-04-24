import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full relative min-h-[511px] mb-8 flex items-center justify-center">

      {/* Background image */}
      <Image
        src="/images/hero.jpg"
        alt="Training and development background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content — centered */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto gap-6">

        {/* Badge pill */}
        <span className="inline-flex items-center px-6 py-2 rounded-full bg-[#FFFFFF]/10 text-white font-nunito-sans font-semibold text-body tracking-widest uppercase border border-white/20">
          What We Do
        </span>

        {/* Heading */}
        <h1 className="font-nunito text-4xl md:text-5xl lg:text-display font-bold text-white leading-tight">
          Training and Development
        </h1>

        {/* Subtext */}
        <p className="font-nunito-sans text-body-lg text-white/80 max-w-2xl">
          Our comprehensive range of programs and resources is designed to enhance skills,
          broaden knowledge, and propel careers forward in today&apos;s ever-evolving landscape.
        </p>

        {/* CTA Button */}
        <button className="px-8 py-3 bg-primary text-white font-nunito-sans font-semibold text-body rounded hover:bg-primary-darkest transition-colors">
          Book a Consultation
        </button>

      </div>
    </section>
  );
}
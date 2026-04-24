import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const whatWeDo = [
  "Sustainability Services",
  "Strategy Planning and Implementation",
  "Tech Talent Solutions",
  "Training and Development",
  "IT Consulting Services",
  "Social Impact",
  "Talent Recruitment",
];

const company = [
  "About",
  "Jobs",
  "Projects",
  "Our Founder",
  "Business Model",
  "The Team",
  "Contact Us",
  "Blog",
  "FAQs",
  "Testimonials",
];

const solution = [
  "Tobams Group Academy",
  "Help a Tech Talent",
  "Campus Ambassadors Program",
  "Join Our Platform",
  "Pricing",
  "Book a Consultation",
  "Join Our Slack Community",
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#11040E]" id="footer">

      {/* CTA bar */}
      <div className="max-w-full bg-[#1D0617] border-b-[1.5px] border-white ">
      <div className="max-w-content mx-auto px-8 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/10 bg-[#1D0617]">
        <div className="flex flex-col gap-1">
          <p className="font-nunito-sans text-body text-white/80">
            Ready to be a part of something extraordinary?
          </p>
          <h3 className="font-nunito text-h3 font-bold text-white leading-tight">
            Let&apos;s work together to create a difference
          </h3>
        </div>
        <button className="shrink-0 px-6 py-3 bg-primary text-white font-nunito-sans font-semibold text-body rounded hover:bg-primary-darkest transition-colors whitespace-nowrap">
          Get In Touch
        </button>
      </div>
      </div>

      {/* Main footer columns */}
      <div className="max-w-content mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand col */}
        <div className="flex flex-col gap-6">
          <Link href="/">
            <Image
              src="/images/logo-white.png"
              alt="Tobams Group"
              width={140}
              height={48}
              className="object-contain"
            />
          </Link>
          <p className="font-nunito-sans text-body-sm text-white/80 leading-relaxed">
            Tobams Group is an innovative consultancy firm reshaping the future of tech talent
            development in Africa, specializing in talent acquisition, internships, and skill
            development with a global perspective.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              { icon: "ri:linkedin-fill", href: "#" },
              { icon: "ri:instagram-line", href: "#" },
              { icon: "ri:twitter-x-fill", href: "#" },
            ].map(({ icon, href }) => (
              <a
                key={icon}
                href={href}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-black bg-white text-neutral-950 transition-colors"
              >
                <Icon icon={icon} width={18} height={18} />
              </a>
            ))}
          </div>
        </div>

        {/* What We Do */}
        <div className="flex flex-col gap-4">
          <h4 className="font-nunito-sans text-body font-bold text-white">What We Do</h4>
          <ul className="flex flex-col gap-3">
            {whatWeDo.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="font-nunito-sans text-body-sm text-white/80 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-4">
          <h4 className="font-nunito-sans text-body font-bold text-white">Company</h4>
          <ul className="flex flex-col gap-3">
            {company.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="font-nunito-sans text-body-sm text-white/80 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Solution */}
        <div className="flex flex-col gap-4">
          <h4 className="font-nunito-sans text-body font-bold text-white">Solution</h4>
          <ul className="flex flex-col gap-3">
            {solution.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="font-nunito-sans text-body-sm text-white/80 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Registered Offices + Contact */}
      <div className="max-w-content mx-auto px-8 pb-12">
        <div className="rounded-xl border border-white/10 grid grid-cols-1 md:grid-cols-3 overflow-hidden bg-[rgba(255,255,255,0.06)]">

          {/* UK Office */}
          <div className="p-6 border-b md:border-b-0 md:border-r border-white/10 flex flex-col gap-2">
            <h5 className="font-nunito-sans text-body font-bold text-white mb-1">
              Registered Offices
            </h5>
            <p className="font-nunito-sans text-body-sm font-semibold text-accent-red">
              United Kingdom
            </p>
            <p className="font-nunito-sans text-body-sm text-white/100 leading-relaxed">
              07451196 (Registered by Company House)<br />
              Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA
            </p>
          </div>

          {/* Nigeria Office */}
          <div className="p-6 border-b md:border-b-0 md:border-r border-white/10 flex flex-col gap-2 justify-end">
            <p className="font-nunito-sans text-body-sm font-semibold text-accent-red">
              Nigeria
            </p>
            <p className="font-nunito-sans text-body-sm text-white/100 leading-relaxed">
              RC 1048722 (Registered by the Corporate Affairs Commission)<br />
              4, Muaz Close, Angwar-Rimi
            </p>
          </div>

          {/* Contact */}
          <div className="p-6 flex flex-col gap-4 justify-center">
            <h5 className="font-nunito-sans text-body font-bold text-white">
              Contact Information
            </h5>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent-red/10 flex items-center justify-center shrink-0">
                <Icon icon="ri:mail-fill" width={16} height={16} className="text-accent-red" />
              </div>
              <span className="font-nunito-sans text-body-sm text-white/100">
                theteam@tobamsgroup.com
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent-red/10 flex items-center justify-center shrink-0">
                <Icon icon="ri:phone-fill" width={16} height={16} className="text-accent-red" />
              </div>
              <span className="font-nunito-sans text-body-sm text-white/100">
                +447886600748
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
  <div className="max-w-content mx-auto px-8 py-5 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
    <p className="font-nunito-sans text-body-sm text-white/80 text-center md:text-left">
      Copyright © Tobams Group, 2024. All rights reserved.
    </p>
    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
      {["Privacy Policy", "Cookies Policy", "Terms and Conditions"].map((item) => (
        <Link
          key={item}
          href="#"
          className="font-nunito-sans text-body-sm text-white/80 hover:text-white transition-colors"
        >
          {item}
        </Link>
      ))}
    </div>
  </div>
</div>
    </footer>
  );
}
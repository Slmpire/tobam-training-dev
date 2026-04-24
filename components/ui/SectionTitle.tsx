interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  center = false,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`flex flex-col gap-3 ${center ? "items-center text-center" : ""} ${className}`}>
      {badge && (
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold font-nunito-sans tracking-wide w-fit">
          {badge}
        </span>
      )}
      <h2 className="font-nunito text-3xl lg:text-h2 font-bold text-neutral-950 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="font-nunito-sans text-body-lg text-neutral-600 max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
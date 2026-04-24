interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-caption font-semibold font-nunito-sans tracking-wide ${className}`}
    >
      {children}
    </span>
  );
}
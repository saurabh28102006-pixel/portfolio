import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  href?: string;
  target?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  href,
  target,
  ...props
}: ButtonProps) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 select-none group cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400/50';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5'
  }[size];

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-600/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 border border-cyan-400/30',
    secondary:
      'bg-[#061426] hover:bg-[#0A1B32] text-slate-200 hover:text-white border border-blue-500/30 hover:border-cyan-400/60 shadow-md hover:-translate-y-0.5',
    outline:
      'bg-transparent hover:bg-blue-950/30 text-cyan-300 hover:text-cyan-200 border border-cyan-500/40 hover:border-cyan-400 shadow-sm hover:-translate-y-0.5',
    ghost:
      'bg-transparent hover:bg-white/5 text-slate-300 hover:text-white'
  }[variant];

  const content = (
    <>
      <span>{children}</span>
      {icon && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noreferrer' : undefined}
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
}

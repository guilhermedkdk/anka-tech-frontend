import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'danger';
  className?: string;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ children, variant = 'success', className = '', ...props }, ref) => {
    const baseClasses =
      'inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium';

    const variantClasses = {
      success: 'bg-[#D4FFCE] text-success dark:bg-[#5A7057] dark:text-success',
      danger:
        'bg-[#FFB4B4] text-[#A74B4B] dark:bg-[#503C3C] dark:text-[#FF6363]',
    };

    return (
      <div
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Badge.displayName = 'Badge';

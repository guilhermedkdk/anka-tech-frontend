'use client';

import { ArrowUp, ArrowDown } from 'lucide-react';

interface GrowthIndicatorProps {
  value: string;
  positive?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function GrowthIndicator({
  value,
  positive = true,
  size = 'md',
}: GrowthIndicatorProps) {
  const sizeClasses = {
    sm: {
      circle: 'w-5 h-5',
      icon: 'w-2.5 h-2.5',
      text: 'text-sm',
    },
    md: {
      circle: 'w-6 h-6',
      icon: 'w-3 h-3',
      text: 'text-base',
    },
    lg: {
      circle: 'w-6 h-6',
      icon: 'w-3.5 h-3.5',
      text: 'text-base',
    },
  };

  const colors = positive
    ? {
        circle: 'bg-[#C3FCBB] dark:bg-[#53894B]',
        icon: 'text-success',
        text: 'text-success',
      }
    : {
        circle: 'bg-red-100 dark:bg-red-900',
        icon: 'text-red-600 dark:text-red-400',
        text: 'text-red-600 dark:text-red-400',
      };

  const Icon = positive ? ArrowUp : ArrowDown;

  return (
    <div className="flex items-center justify-center gap-[6px] flex-wrap">
      <div
        className={`${sizeClasses[size].circle} ${colors.circle} rounded-full flex items-center justify-center`}
      >
        <Icon className={`${sizeClasses[size].icon} ${colors.icon}`} />
      </div>
      <span className={`${sizeClasses[size].text} font-medium ${colors.text}`}>
        {value}
      </span>
    </div>
  );
}

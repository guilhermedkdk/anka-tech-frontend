import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface MoneyCardProps {
  backgroundColor?: string;
  textColor?: string;
  secondaryTextColor?: string;
  borderColor?: string;
  title: string;
  amount: string;
  period: string;
  growthValue?: string;
  isPositive?: boolean;
  growthCircleColor?: string;
  growthTextColor?: string;
}

export default function MoneyCard({
  backgroundColor = '#ffffff',
  textColor = '#1c1b1b',
  secondaryTextColor = '#8f8f8f',
  borderColor = '#d9d9d9',
  title,
  amount,
  period,
  growthValue,
  isPositive = true,
  growthCircleColor,
  growthTextColor,
}: MoneyCardProps) {
  return (
    <Card
      className={cn(
        'relative w-80 rounded-3xl border shadow-sm overflow-hidden p-0'
      )}
      style={{
        background: backgroundColor,
        borderColor: borderColor,
      }}
    >
      <CardContent className="px-8 py-10 flex flex-col justify-center items-start h-full">
        <div className="text-left space-y-0 w-full">
          <h3
            className="text-lg font-medium leading-tight"
            style={{ color: textColor }}
          >
            {title}
          </h3>
          <div className="flex items-baseline gap-6 flex-nowrap">
            <p
              className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight whitespace-nowrap"
              style={{ color: textColor }}
            >
              {amount}
            </p>
            {growthValue && (
              <div
                className="flex items-center gap-[6px] flex-nowrap transform -translate-y-1"
                style={
                  {
                    '--growth-circle-color': growthCircleColor,
                    '--growth-text-color': growthTextColor,
                  } as React.CSSProperties
                }
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor:
                      growthCircleColor || (isPositive ? '#C3FCBB' : '#FECACA'),
                  }}
                >
                  {isPositive ? (
                    <ArrowUp
                      className="w-3.5 h-3.5"
                      style={{ color: growthTextColor || '#0d8701' }}
                    />
                  ) : (
                    <ArrowDown
                      className="w-3.5 h-3.5"
                      style={{ color: growthTextColor || '#dc2626' }}
                    />
                  )}
                </div>
                <span
                  className="text-base font-medium"
                  style={{
                    color:
                      growthTextColor || (isPositive ? '#0d8701' : '#dc2626'),
                  }}
                >
                  {growthValue}
                </span>
              </div>
            )}
          </div>
          <p
            className="text-base leading-tight"
            style={{ color: secondaryTextColor }}
          >
            {period}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

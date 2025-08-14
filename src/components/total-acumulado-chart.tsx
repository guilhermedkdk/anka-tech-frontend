'use client';

import { Card } from '@/components/ui/card';
import { ResponsiveContainer, AreaChart, Area, YAxis, Tooltip } from 'recharts';

// Sample data that creates the wavy pattern similar to the image
const data = [
  { month: 1, value: 25 },
  { month: 2, value: 32 },
  { month: 3, value: 38 },
  { month: 4, value: 42 },
  { month: 5, value: 35 },
  { month: 6, value: 28 },
  { month: 7, value: 22 },
  { month: 8, value: 18 },
  { month: 9, value: 25 },
  { month: 10, value: 35 },
  { month: 11, value: 38 },
  { month: 12, value: 42 },
];

const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ value: number }>;
}) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    return (
      <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-lg">
        <p className="text-sm font-medium text-foreground">
          R$ {value.toLocaleString('pt-BR')} M
        </p>
      </div>
    );
  }
  return null;
};

export function TotalAcumuladoChart() {
  return (
    <Card className="rounded-[26px] border shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-0">
        <h3 className="text-lg font-medium text-foreground pl-5">
          Total Acumulado
        </h3>
        <div className="text-lg font-bold bg-gradient-to-r from-[#3A95FC] to-[#C01EE8] bg-clip-text text-transparent whitespace-nowrap">
          R$ 1.4 B
        </div>
      </div>

      {/* Chart Area */}
      <div className="h-[160px] w-full px-6 pb-0 pt-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 0, right: 0, left: 40, bottom: 0 }}
          >
            <defs>
              {/* Glow filter for the stroke */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Gradient for the area fill */}
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#13C4F1" stopOpacity={0.3} />
                <stop offset="50%" stopColor="#13C4F1" stopOpacity={0.1} />
                <stop offset="100%" stopColor="#13C4F1" stopOpacity={0} />
              </linearGradient>
            </defs>

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 14, fill: 'var(--text-small)' }}
              tickFormatter={(value) => `R$${value}M`}
              domain={[0, 50]}
              ticks={[10, 20, 30, 40]}
              width={35}
            />

            <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#13C4F1"
              strokeWidth={3}
              strokeLinecap="round"
              fill="url(#areaGradient)"
              filter="url(#glow)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

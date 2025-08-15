import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { ArrowUp } from 'lucide-react';

const data = [
  { name: 'Reinaldo', value: 24, currency: 880_000, color: '#94A3B8' },
  { name: 'Joseph', value: 34, currency: 990_000, color: '#4F46E5' },
  { name: 'Marina', value: 20, currency: 850_000, color: '#06B6D4' },
  { name: 'Renata', value: 22, currency: 900_000, color: '#F59E0B' },
];

function formatCurrency(value: number): string {
  if (value >= 1_000_000) {
    return `R$ ${Math.round(value / 1_000_000)} M`;
  }
  if (value >= 1_000) {
    return `R$ ${Math.round(value / 1_000)} K`;
  }
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(value);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderLabel = (entry: any) => {
  const RADIAN = Math.PI / 180;
  const radius = (entry.innerRadius + entry.outerRadius) / 2;
  const x = entry.cx + radius * Math.cos(-entry.midAngle * RADIAN);
  const y = entry.cy + radius * Math.sin(-entry.midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize="16"
      fontWeight="bold"
    >
      {`${entry.value}%`}
    </text>
  );
};

export default function RevenueDonutChart() {
  return (
    <Card className="bg-card border border-border rounded-2xl shadow-sm w-[350px] h-[670px]">
      <CardHeader className="pb-2">
        <CardTitle className="text-[20px] font-medium text-card-foreground">
          Receita por Assessor (%)
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2 h-full">
        <div className="flex flex-col items-center space-y-6 h-full justify-start -mt-8">
          {/* Donut Chart */}
          <div className="w-full h-96 relative flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <defs>
                  <filter
                    id="drop-shadow"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                  >
                    <feDropShadow
                      dx="0"
                      dy="4"
                      stdDeviation="8"
                      floodOpacity="0.1"
                    />
                  </filter>
                </defs>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderLabel}
                  outerRadius={140}
                  innerRadius={70}
                  paddingAngle={6}
                  cornerRadius={0}
                  stroke="none"
                  filter="url(#drop-shadow)"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="w-full space-y-3">
            {data.map((item, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="flex items-center gap-[32px]">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm font-medium text-card-foreground">
                    {item.name}
                  </span>
                  <span className="text-sm font-semibold text-success">
                    {formatCurrency(item.currency)}
                  </span>
                  <div className="w-5 h-5 bg-[#C3FCBB] dark:bg-[#53894B] rounded-full flex items-center justify-center">
                    <ArrowUp className="w-3 h-3 text-success" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

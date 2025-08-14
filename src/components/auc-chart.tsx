'use client';

import { useState } from 'react';
import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const weeklyData = [
  { month: 'Seg', value: 5000000, label: 'Segunda' },
  { month: 'Ter', value: 8000000, label: 'Terça' },
  { month: 'Qua', value: 12000000, label: 'Quarta' },
  { month: 'Qui', value: 15000000, label: 'Quinta' },
  { month: 'Sex', value: 18000000, label: 'Sexta' },
  { month: 'Sáb', value: 10000000, label: 'Sábado' },
  { month: 'Dom', value: 6000000, label: 'Domingo' },
];

const monthlyData = [
  { month: 'Jan', value: 8000000, label: 'Janeiro' },
  { month: 'Fev', value: 15000000, label: 'Fevereiro' },
  { month: 'Mar', value: 22000000, label: 'Março' },
  { month: 'Abr', value: 18000000, label: 'Abril' },
  { month: 'Mai', value: 25000000, label: 'Maio' },
  { month: 'Jun', value: 30000000, label: 'Junho' },
  { month: 'Jul', value: 28000000, label: 'Julho' },
  { month: 'Ago', value: 32000000, label: 'Agosto' },
  { month: 'Set', value: 35000000, label: 'Setembro' },
  { month: 'Out', value: 38000000, label: 'Outubro' },
  { month: 'Nov', value: 40000000, label: 'Novembro' },
  { month: 'Dez', value: 42000000, label: 'Dezembro' },
];

const yearData = [
  { month: 'Jan', value: 1000000, label: 'Janeiro' },
  { month: 'Fev', value: 2000000, label: 'Fevereiro' },
  { month: 'Mar', value: 10000000, label: 'Março' },
  { month: 'Abr', value: 17000000, label: 'Abril' },
  { month: 'Mai', value: 18000000, label: 'Maio' },
  { month: 'Jun', value: 22000000, label: 'Junho' },
  { month: 'Jul', value: 22000000, label: 'Julho' },
  { month: 'Ago', value: 22000000, label: 'Agosto' },
  { month: 'Set', value: 25000000, label: 'Setembro' },
  { month: 'Out', value: 35000000, label: 'Outubro' },
  { month: 'Nov', value: 38000000, label: 'Novembro' },
  { month: 'Dez', value: 39500000, label: 'Dezembro' },
];

const maxData = [
  { month: 'Jan', value: 15000000, label: 'Janeiro' },
  { month: 'Fev', value: 25000000, label: 'Fevereiro' },
  { month: 'Mar', value: 35000000, label: 'Março' },
  { month: 'Abr', value: 40000000, label: 'Abril' },
  { month: 'Mai', value: 45000000, label: 'Maio' },
  { month: 'Jun', value: 50000000, label: 'Junho' },
  { month: 'Jul', value: 48000000, label: 'Julho' },
  { month: 'Ago', value: 52000000, label: 'Agosto' },
  { month: 'Set', value: 55000000, label: 'Setembro' },
  { month: 'Out', value: 58000000, label: 'Outubro' },
  { month: 'Nov', value: 60000000, label: 'Novembro' },
  { month: 'Dez', value: 62000000, label: 'Dezembro' },
];

// Função para formatar valores em milhões
const formatValue = (value: number) => {
  if (value >= 1000000000) {
    return `R$ ${(value / 1000000000).toFixed(1)} B`;
  } else if (value >= 1000000) {
    return `R$ ${(value / 1000000).toFixed(0)}M`;
  }
  return `R$ ${value.toLocaleString('pt-BR')}`;
};

// Componente customizado para o tooltip
const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card p-3 border border-border rounded-lg shadow-lg">
        <p className="text-sm font-medium text-card-foreground">{label}</p>
        <p className="text-sm text-purple-600">
          {formatValue(payload[0].value)}
        </p>
      </div>
    );
  }
  return null;
};

type FilterType = 'semanal' | 'mensal' | '2024' | 'max';

export default function AucChart() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('2024');

  const getChartData = () => {
    switch (activeFilter) {
      case 'semanal':
        return weeklyData;
      case 'mensal':
        return monthlyData;
      case '2024':
        return yearData;
      case 'max':
        return maxData;
      default:
        return monthlyData;
    }
  };

  const chartData = getChartData();
  const maxValue = Math.max(...chartData.map((item) => item.value));

  // Valores totais específicos para cada período
  const getTotalValue = () => {
    switch (activeFilter) {
      case 'semanal':
        return 75000000; // R$ 75M
      case 'mensal':
        return 320000000; // R$ 320M
      case '2024':
        return 1400000000; // R$ 1.4B
      case 'max':
        return 1800000000; // R$ 1.8B
      default:
        return 1400000000;
    }
  };

  const totalValue = getTotalValue();

  return (
    <Card className="w-full bg-card shadow-sm border border-border">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-sm font-medium text-muted-foreground mb-1">
              AuC
            </CardTitle>
            <div className="text-2xl font-bold text-success">
              {formatValue(totalValue)}
            </div>
          </div>
          <div className="flex gap-6">
            <button
              onClick={() => setActiveFilter('semanal')}
              className={`pb-2 px-1 text-sm font-medium transition-all duration-200 cursor-pointer hover:scale-105 ${
                activeFilter === 'semanal'
                  ? 'text-foreground border-b-2 border-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Semanal
            </button>
            <button
              onClick={() => setActiveFilter('mensal')}
              className={`pb-2 px-1 text-sm font-medium transition-all duration-200 cursor-pointer hover:scale-105 ${
                activeFilter === 'mensal'
                  ? 'text-foreground border-b-2 border-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setActiveFilter('2024')}
              className={`pb-2 px-1 text-sm font-medium transition-all duration-200 cursor-pointer hover:scale-105 ${
                activeFilter === '2024'
                  ? 'text-foreground border-b-2 border-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              2024
            </button>
            <button
              onClick={() => setActiveFilter('max')}
              className={`pb-2 px-1 text-sm font-medium transition-all duration-200 cursor-pointer hover:scale-105 ${
                activeFilter === 'max'
                  ? 'text-foreground border-b-2 border-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Máx
            </button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{
                top: 10,
                right: 10,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D946EF" stopOpacity={0.15} />
                  <stop offset="50%" stopColor="#A855F7" stopOpacity={0.15} />
                  <stop offset="100%" stopColor="#A855F7" stopOpacity={0.15} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="none"
                stroke="var(--muted)"
                horizontal={true}
                vertical={false}
              />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: 'var(--muted-foreground)' }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: 'var(--muted-foreground)' }}
                tickFormatter={formatValue}
                domain={[0, maxValue]}
                ticks={[
                  0,
                  maxValue * 0.25,
                  maxValue * 0.5,
                  maxValue * 0.75,
                  maxValue,
                ]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#D946EF"
                strokeWidth={2}
                fill="url(#colorGradient)"
                activeDot={{
                  r: 6,
                  fill: '#D946EF',
                  stroke: '#fff',
                  strokeWidth: 2,
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

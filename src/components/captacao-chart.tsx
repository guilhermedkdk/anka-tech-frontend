'use client';

import { useState } from 'react';
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const chartDataSets = {
  diario: [
    { month: 'Seg', value: 2000000, label: 'Seg' },
    { month: 'Ter', value: 3500000, label: 'Ter' },
    { month: 'Qua', value: 1800000, label: 'Qua' },
    { month: 'Qui', value: 4200000, label: 'Qui' },
    { month: 'Sex', value: 5100000, label: 'Sex' },
    { month: 'Sáb', value: 1200000, label: 'Sáb' },
    { month: 'Dom', value: 800000, label: 'Dom' },
  ],
  semanal: [
    { month: 'S1', value: 8000000, label: 'Sem 1' },
    { month: 'S2', value: 12000000, label: 'Sem 2' },
    { month: 'S3', value: 18000000, label: 'Sem 3' },
    { month: 'S4', value: 15000000, label: 'Sem 4' },
    { month: 'S5', value: 22000000, label: 'Sem 5' },
  ],
  '2024': [
    { month: 'Jan', value: 5000000, label: 'Jan' },
    { month: 'Fev', value: 15000000, label: 'Fev' },
    { month: 'Mar', value: 25000000, label: 'Mar' },
    { month: 'Abr', value: 20000000, label: 'Abr' },
    { month: 'Mai', value: 12000000, label: 'Mai' },
    { month: 'Jun', value: 25000000, label: 'Jun' },
    { month: 'Jul', value: 8000000, label: 'Jul' },
  ],
};

// Função para formatar valores monetários
const formatCurrency = (value: number) => {
  if (value >= 1000000) {
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
        <p className="text-sm text-blue-600">
          {formatCurrency(payload[0].value)}
        </p>
      </div>
    );
  }
  return null;
};

export default function CaptacaoChart() {
  const [activeFilter, setActiveFilter] = useState('2024');

  const filters = [
    { id: 'diario', label: 'Diário' },
    { id: 'semanal', label: 'Semanal' },
    { id: '2024', label: '2024' },
  ];

  const currentData = chartDataSets[activeFilter as keyof typeof chartDataSets];

  return (
    <Card className="w-full max-w-sm bg-card border-border">
      <CardHeader className="pb-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-card-foreground">
            Captação
          </CardTitle>
          <div className="flex gap-6">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`pb-2 px-1 text-sm font-medium transition-all duration-200 cursor-pointer hover:scale-105 ${
                  activeFilter === filter.id
                    ? 'text-foreground border-b-2 border-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-[430px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={currentData}
              margin={{
                top: 0,
                right: 10,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid
                strokeDasharray="0"
                stroke="var(--muted)"
                horizontal={true}
                vertical={false}
              />
              <XAxis
                dataKey="label"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: 'var(--muted-foreground)' }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: 'var(--muted-foreground)' }}
                tickFormatter={formatCurrency}
                domain={[0, 40000000]}
                ticks={[0, 1000000, 10000000, 20000000, 30000000, 40000000]}
                width={70}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="value"
                fill="#00BFFF"
                radius={[8, 8, 0, 0]}
                maxBarSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

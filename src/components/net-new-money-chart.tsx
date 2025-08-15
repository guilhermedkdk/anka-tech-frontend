'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface DotPlotData {
  period: string;
  value: number;
  month: string;
}

interface DotPlotChartProps {
  title?: string;
  data?: DotPlotData[];
  dotColor?: string;
  dotSize?: number;
  unitValue?: number; // Valor que cada bolinha representa (ex: 4 = R$ 4M)
  maxValue?: number;
  tooltipFormatter?: (value: number) => string;
  className?: string;
}

// Dados de exemplo para 26 quinzenas do ano (valores randomizados entre 5 e 40)
const defaultData: DotPlotData[] = [
  { period: 'Q1', value: 20, month: 'Jan' },
  { period: 'Q2', value: 24, month: 'Jan' },
  { period: 'Q3', value: 32, month: 'Fev' },
  { period: 'Q4', value: 17, month: 'Fev' },
  { period: 'Q5', value: 30, month: 'Mar' },
  { period: 'Q6', value: 8, month: 'Mar' },
  { period: 'Q7', value: 11, month: 'Abr' },
  { period: 'Q8', value: 16, month: 'Abr' },
  { period: 'Q9', value: 27, month: 'Mai' },
  { period: 'Q10', value: 20, month: 'Mai' },
  { period: 'Q11', value: 34, month: 'Jun' },
  { period: 'Q12', value: 29, month: 'Jun' },
  { period: 'Q13', value: 23, month: 'Jul' },
  { period: 'Q14', value: 27, month: 'Jul' },
  { period: 'Q15', value: 18, month: 'Ago' },
  { period: 'Q16', value: 14, month: 'Ago' },
  { period: 'Q17', value: 35, month: 'Set' },
  { period: 'Q18', value: 22, month: 'Set' },
  { period: 'Q19', value: 14, month: 'Out' },
  { period: 'Q20', value: 25, month: 'Out' },
  { period: 'Q21', value: 28, month: 'Nov' },
  { period: 'Q22', value: 9, month: 'Nov' },
  { period: 'Q23', value: 7, month: 'Dez' },
  { period: 'Q24', value: 21, month: 'Dez' },
  { period: 'Q25', value: 18, month: 'Dez' },
  { period: 'Q26', value: 26, month: 'Dez' },
];

export function NetNewMoneyChart({
  title = 'Net New Money',
  data = defaultData,
  dotColor = '#13C4F1',
  dotSize = 32, // Increased from 24 to 32 for larger dots
  unitValue = 5, // Each dot represents R$ 5M
  maxValue = 40,
  tooltipFormatter = (value) => `R$ ${value} M`,
  className = '',
}: DotPlotChartProps) {
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      if (typeof window !== 'undefined') {
        setIsDark(document.documentElement.classList.contains('dark'));
      }
    };

    checkTheme();

    // Observer para mudanças no tema
    if (typeof window !== 'undefined') {
      const observer = new MutationObserver(checkTheme);
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
      });

      return () => observer.disconnect();
    }
  }, []);

  // Gerar marcações do eixo Y
  const yAxisLabels = [];
  for (let i = 10; i <= maxValue; i += 10) {
    yAxisLabels.push(i);
  }

  const monthPositions = [
    { month: 'Jan', position: 1.5 },
    { month: 'Fev', position: 3.5 },
    { month: 'Mar', position: 5.5 },
    { month: 'Abr', position: 7.5 },
    { month: 'Mai', position: 9.5 },
    { month: 'Jun', position: 11.5 },
    { month: 'Jul', position: 13.5 },
    { month: 'Ago', position: 15.5 },
    { month: 'Set', position: 17.5 },
    { month: 'Out', position: 19.5 },
    { month: 'Nov', position: 21.5 },
    { month: 'Dez', position: 24.5 },
  ];

  // Função para calcular quantas bolinhas devem ser exibidas baseado na divisão por 5
  const calculateDotCount = (value: number): number => {
    return Math.ceil(value / unitValue);
  };

  const renderDots = (value: number, columnIndex: number) => {
    const dots = [];
    const numDots = calculateDotCount(value);
    const maxDotsPerColumn = Math.floor(maxValue / unitValue);
    const actualDots = Math.min(numDots, maxDotsPerColumn);

    const dotColorTheme = isDark ? '#5269D1' : dotColor;

    for (let i = 0; i < actualDots; i++) {
      dots.push(
        <div
          key={i}
          className="rounded-full transition-all duration-200 hover:scale-105 flex-shrink-0"
          style={{
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            backgroundColor:
              hoveredColumn === columnIndex ? '#1D4ED8' : dotColorTheme,
            marginBottom: '0',
            boxShadow:
              hoveredColumn === columnIndex
                ? '0 2px 8px rgba(59, 130, 246, 0.3)'
                : 'none',
          }}
        />
      );
    }
    return dots;
  };

  return (
    <Card className={`rounded-[26px] border shadow-sm ${className}`}>
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        <div className="flex space-x-[18px]">
          <button className="pb-2 px-1 text-sm font-medium transition-all duration-200 cursor-pointer hover:scale-105 text-muted-foreground hover:text-foreground">
            2024
          </button>
          <button className="pb-2 px-1 text-sm font-medium transition-all duration-200 cursor-pointer hover:scale-105 text-muted-foreground hover:text-foreground">
            Semestral
          </button>
          <button className="pb-2 px-1 text-sm font-medium transition-all duration-200 cursor-pointer hover:scale-105 text-foreground border-b-2 border-foreground">
            Mensal
          </button>
        </div>
      </CardHeader>
      <CardContent className="px-9 pb-9 pt-0">
        <div className="relative">
          {/* Container principal do gráfico */}
          <div
            className="flex items-end justify-between relative"
            style={{ height: '260px' }}
          >
            {/* Eixo Y */}
            <div
              className="absolute left-0 flex flex-col justify-between text-sm text-muted-foreground pr-4 z-10"
              style={{ top: '-20px', height: 'calc(100% - 40px)' }}
            >
              {yAxisLabels.reverse().map((label) => (
                <div key={label} className="flex items-center">
                  <span className="bg-card pr-2">R$ {label} M</span>
                </div>
              ))}
            </div>

            <div className="flex items-end justify-between w-full ml-16">
              <TooltipProvider>
                {data.map((item, index) => {
                  const columnHeight = Math.max(
                    (item.value / maxValue) * 100,
                    8
                  );

                  return (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <div
                          className="flex flex-col items-center justify-end cursor-pointer transition-all duration-200 rounded-sm px-0 py-1"
                          style={{
                            height: `${columnHeight}%`,
                            width: `${100 / data.length}%`,
                            maxWidth: '32px',
                            minWidth: '24px',
                          }}
                          onMouseEnter={() => setHoveredColumn(index)}
                          onMouseLeave={() => setHoveredColumn(null)}
                        >
                          <div className="flex flex-col items-center justify-end gap-0 h-full overflow-hidden">
                            {renderDots(item.value, index)}
                          </div>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        className="bg-card border border-border shadow-lg rounded-lg"
                        style={{
                          padding: '12px',
                          fontSize: '14px',
                          color: isDark ? '#91D88A' : '#0D8701',
                        }}
                      >
                        <p className="font-medium">
                          {tooltipFormatter(item.value)}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </TooltipProvider>
            </div>
          </div>

          <div className="relative -mt-1 ml-16">
            <div className="flex justify-between text-base text-foreground">
              {monthPositions.map((item, index) => (
                <div
                  key={index}
                  className="absolute text-center transform -translate-x-1/2"
                  style={{
                    left: `${(item.position / 26) * 100}%`,
                  }}
                >
                  <span>{item.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

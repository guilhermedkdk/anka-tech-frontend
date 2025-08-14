'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

// Somente frontend: dados estáticos internos e estilização com Tailwind + shadcn/ui

const DATA: { rank: number; name: string; avatar?: string; value: number }[] = [
  {
    rank: 1,
    name: 'Carlos Mendes',
    avatar: '/imgs/avatar1.png',
    value: 1200000,
  },
  {
    rank: 2,
    name: 'Beatriz Lima',
    avatar: '/imgs/avatar2.png',
    value: 1000000,
  },
  {
    rank: 3,
    name: 'João Santos',
    avatar: '/imgs/avatar3.png',
    value: 900000,
  },
  {
    rank: 4,
    name: 'Marcos Silva',
    avatar: '/imgs/avatar4.png',
    value: 890000,
  },
  {
    rank: 5,
    name: 'Paulo Costa',
    avatar: '/imgs/avatar5.png',
    value: 850000,
  },
  {
    rank: 6,
    name: 'Gabriela Rocha',
    avatar: '/imgs/avatar2.png',
    value: 840000,
  },
  {
    rank: 7,
    name: 'Ricardo Alves',
    avatar: '/imgs/avatar6.png',
    value: 810000,
  },
  {
    rank: 8,
    name: 'André Nunes',
    avatar: '/imgs/avatar4.png',
    value: 790000,
  },
  {
    rank: 9,
    name: 'Victor Prado',
    avatar: '/imgs/avatar1.png',
    value: 500000,
  },
  {
    rank: 10,
    name: 'Lucas Teixeira',
    avatar: '/imgs/avatar5.png',
    value: 100000,
  },
];

function formatAbbrevBRL(value: number) {
  const abs = Math.abs(value);
  if (abs >= 1_000_000_000) return `R$ ${(value / 1_000_000_000).toFixed(1)} B`;
  if (abs >= 1_000_000) return `R$ ${(value / 1_000_000).toFixed(1)} M`;
  if (abs >= 1_000) return `R$ ${(value / 1_000).toFixed(0)} K`;
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(value);
}

const fillColorByRank = (rank: number) => {
  if (rank === 1) return 'bg-[#EDEEBD] dark:bg-[#DADC75]'; // primeira barra
  if (rank === 2) return 'bg-[#E2E2E2] dark:bg-[#BABABA]'; // segunda barra
  if (rank === 3) return 'bg-[#F2DFC9] dark:bg-[#F1AE62]'; // terceira barra
  return 'bg-[#BEE5BA] dark:bg-[#679663]'; // resto das barras
};

export default function TopRevenueAdvisors() {
  const max = React.useMemo(() => Math.max(...DATA.map((d) => d.value)), []);

  return (
    <Card className="bg-card border border-border rounded-2xl shadow-sm gap-0">
      <CardHeader className="pb-[26px] gap-0">
        <CardTitle className="text-[20px] font-medium text-card-foreground">
          Top 10 Assessores Geradores de Receita
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <TooltipProvider delayDuration={150}>
          <div className="space-y-6">
            {DATA.map((item) => {
              const pct = Math.max(
                0,
                Math.min(100, Math.round((item.value / max) * 100))
              );
              const chipLeft =
                item.rank === 1
                  ? `min(calc(${pct}% + 12px), calc(100% - 68px))` // primeira barra: mais à direita
                  : `min(calc(${pct}% + 8px), calc(100% - 80px))`; // outras barras: evita overflow
              return (
                <div
                  key={item.rank}
                  className="grid items-center grid-cols-[20px_35px_1fr] gap-4"
                  style={{ gap: '16px 23px' }}
                >
                  <div className="text-[20px] text-foreground justify-self-start">
                    {item.rank}
                  </div>
                  <Avatar
                    className={`h-[35px] w-[35px] bg-[#D9D9D9] dark:bg-[#1B1B1B] ${
                      item.rank === 1
                        ? 'ring-[3px] ring-[#FFC043] ring-inset'
                        : item.rank === 2
                        ? 'ring-[3px] ring-[#7A7A7A] ring-inset'
                        : item.rank === 3
                        ? 'ring-[3px] ring-[#FF8C53] ring-inset'
                        : ''
                    }`}
                  >
                    <AvatarImage src={item.avatar} alt={item.name} />
                    <AvatarFallback>
                      {item.name.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>

                  <div className="relative w-full select-none">
                    {/* trilha */}
                    <div className="h-[12px] w-full rounded-full bg-muted" />
                    {/* preenchimento */}
                    <div
                      className={`absolute left-0 top-0 h-[12px] rounded-full ${fillColorByRank(
                        item.rank
                      )} transition-all`}
                      style={{
                        width:
                          item.rank === 1 ? `${pct}%` : `calc(${pct}% + 12px)`,
                      }}
                    />

                    {/* chip de valor */}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div
                          className="absolute top-0 rounded-md border border-border bg-card text-[14px] font-medium text-card-foreground shadow-sm z-10"
                          style={{
                            left: chipLeft,
                            padding: '6px',
                            lineHeight: '1',
                            height: 'fit-content',
                            transform: 'translateY(-50%)',
                            top: '50%',
                          }}
                        >
                          {formatAbbrevBRL(item.value)}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        align="center"
                        className="bg-card border border-border rounded-lg shadow-lg p-3 text-center"
                        sideOffset={5}
                      >
                        <div className="space-y-1">
                          <div className="font-semibold text-sm text-card-foreground">
                            {item.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {new Intl.NumberFormat('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                            }).format(item.value)}
                          </div>
                        </div>
                      </TooltipContent>
                    </Tooltip>

                    {/* borda arredondada no fim da trilha (decorativo) */}
                    <div className="absolute right-0 top-0 h-[12px] w-3 rounded-full bg-background" />
                  </div>
                </div>
              );
            })}
          </div>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
}

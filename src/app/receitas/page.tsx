'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import TopRevenueAdvisors from '@/components/top-revenue-advisors';
import RevenueDonutChart from '@/components/revenue-donut-chart';
import { GrowthIndicator } from '@/components/growth-indicator';
import { ArrowUp } from 'lucide-react';

export default function ReceitasPage() {
  return (
    <div className="main-page-padding pb-4">
      {/* Header do Dashboard */}
      <div className="mb-4 mt-4 flex-shrink-0">
        {/* Seletor de mês */}
        <div className="mb-2">
          <Select defaultValue="janeiro">
            <SelectTrigger className="w-32 bg-card rounded-2xl border-border flex items-center justify-center text-center text-sm font-normal py-2 text-foreground focus:!border-primary focus:!ring-0 cursor-pointer">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-card/80 backdrop-blur-sm border-border shadow-lg">
              <SelectItem
                value="janeiro"
                className="cursor-pointer hover:bg-muted"
              >
                Janeiro
              </SelectItem>
              <SelectItem
                value="fevereiro"
                className="cursor-pointer hover:bg-muted"
              >
                Fevereiro
              </SelectItem>
              <SelectItem
                value="marco"
                className="cursor-pointer hover:bg-muted"
              >
                Março
              </SelectItem>
              <SelectItem
                value="abril"
                className="cursor-pointer hover:bg-muted"
              >
                Abril
              </SelectItem>
              <SelectItem
                value="maio"
                className="cursor-pointer hover:bg-muted"
              >
                Maio
              </SelectItem>
              <SelectItem
                value="junho"
                className="cursor-pointer hover:bg-muted"
              >
                Junho
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Título e valores */}
        <div className="flex-1 min-w-0 mb-[16px]">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-1 truncate mt-[25px]">
                Receita Total em Janeiro
              </h1>
              <div className="flex items-center gap-[13px] flex-wrap">
                <span className="text-4xl font-bold bg-gradient-to-r from-[#3A95FC] to-[#C01EE8] bg-clip-text text-transparent break-words">
                  R$ 7.160.000
                </span>
                <div className="flex items-center">
                  <GrowthIndicator value="37.8%" positive={true} size="lg" />
                </div>
              </div>
            </div>

            {/* Total de Assessores Card */}
            <Card className="bg-card border border-border rounded-2xl shadow-sm w-[350px] gap-0 mr-[70px] pl-[70px]">
              <CardHeader className="pb-[8px] gap-0">
                <CardTitle className="text-[16px] font-medium text-card-foreground">
                  Total de Assessores
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center gap-[12px]">
                  <span className="text-[30px] font-medium text-card-foreground">
                    30
                  </span>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 bg-[#C3FCBB] dark:bg-[#53894B] rounded-full flex items-center justify-center">
                      <ArrowUp className="w-3.5 h-3.5 text-success" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="flex-shrink-0 -mt-1">
        <div className="flex gap-6">
          {/* Left Column - Top 10 Assessores */}
          <div>
            <div className="w-[670px]">
              <TopRevenueAdvisors />
            </div>
          </div>

          {/* Right Column */}
          <div>
            <RevenueDonutChart />
          </div>
        </div>
      </div>
    </div>
  );
}

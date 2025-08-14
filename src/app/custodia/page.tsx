'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MetricsCards } from '@/components/metrics-cards';
import { GrowthIndicator } from '@/components/growth-indicator';
import DateCardInput from '@/components/date-card-input';
import AucChart from '@/components/auc-chart';
import CaptacaoChart from '@/components/captacao-chart';

export default function CustodiaPage() {
  const [activeTab, setActiveTab] = useState('escritorio');
  const [startDate, setStartDate] = useState<Date | null>(new Date(2024, 0, 1));
  const [endDate, setEndDate] = useState<Date | null>(new Date(2025, 0, 1));

  const tabs = [
    { id: 'escritorio', label: 'Visão Escritório' },
    { id: 'assessores', label: 'Visão Assessores' },
    { id: 'cliente', label: 'Visão Cliente' },
  ];

  return (
    <div className="main-page-padding pb-4">
      {/* Cabeçalho com Abas */}
      <div className="mb-4 mt-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-[54px]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-2 px-1 text-sm font-medium transition-all duration-200 cursor-pointer hover:scale-105 ${
                  activeTab === tab.id
                    ? 'text-foreground border-b-2 border-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Seletores de Data */}
        <div className="flex gap-4 w-fit">
          <div className="w-64">
            <DateCardInput
              label="Data inicial"
              value={startDate}
              onChange={setStartDate}
              className="p-0"
            />
          </div>
          <div className="w-64">
            <DateCardInput
              label="Data final"
              value={endDate}
              onChange={setEndDate}
              className="p-0"
            />
          </div>
        </div>
      </div>

      {/* Cartões de Métricas Principais */}
      <div className="bg-card rounded-[26px] border mb-4">
        <div className="grid grid-cols-3 divide-x divide-border">
          <div className="px-8 py-6 flex flex-col justify-center">
            <div className="text-base font-medium text-large mb-3 leading-none">
              Início do Período
            </div>
            <div className="flex items-center gap-3 leading-none">
              <span className="text-3xl font-medium">R$ 1.155 B</span>
              <GrowthIndicator value="24.3%" positive={true} size="lg" />
            </div>
          </div>
          <div className="px-8 py-6 flex flex-col justify-center">
            <div className="text-base font-medium text-large mb-3 leading-none">
              Fim do Período
            </div>
            <div className="flex items-center gap-3 leading-none">
              <span className="text-3xl font-medium">R$ 1.400 B</span>
              <GrowthIndicator value="17.5%" positive={true} size="lg" />
            </div>
          </div>
          <div className="px-8 py-6">
            <div className="flex items-center gap-3 mb-1 leading-none">
              <div className="text-lg font-medium text-large">
                Variação Total
              </div>
              <GrowthIndicator value="36.8%" positive={true} size="lg" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  Captação total
                </span>
                <GrowthIndicator value="17.5%" positive={true} size="sm" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  Rentabilidade total
                </span>
                <GrowthIndicator value="19.65%" positive={true} size="sm" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <AucChart />
        </div>
        <div className="lg:col-span-1">
          <CaptacaoChart />
        </div>
      </div>
    </div>
  );
}

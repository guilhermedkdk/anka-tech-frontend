'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import MoneyCard from '@/components/money-card';
import { NetNewMoneyChart } from '@/components/net-new-money-chart';
import { TotalAcumuladoChart } from '@/components/total-acumulado-chart';

export default function NetNewMoneyPage() {
  const [activeTab, setActiveTab] = useState('escritorio');

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
      </div>

      {/* Cards de Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4 w-full max-w-6xl mx-auto">
        <MoneyCard
          title="NNM 2024"
          amount="R$ 157 M"
          period="Desde ontem"
          growthValue="17.5%"
          isPositive={true}
          growthCircleColor="rgba(255, 255, 255, 0.2)"
          growthTextColor="#FFFFFF"
          backgroundColor="linear-gradient(to right, #304FE0 0%, #8B5CF6 100%)"
          textColor="#FFFFFF"
          secondaryTextColor="#E5E7EB"
          borderColor="rgba(255, 255, 255, 0.2)"
        />
        <MoneyCard
          title="NNM Semestral"
          amount="R$ 78 M"
          period="Desde o mês passado"
          growthValue="17.5%"
          isPositive={false}
          backgroundColor="var(--card)"
          textColor="var(--foreground)"
          secondaryTextColor="var(--muted-foreground)"
          borderColor="var(--border)"
        />
        <MoneyCard
          title="NNM Mensal"
          amount="R$ 12.7 M"
          period="Desde o ano passado"
          growthValue="9.3%"
          isPositive={true}
          backgroundColor="var(--card)"
          textColor="var(--foreground)"
          secondaryTextColor="var(--muted-foreground)"
          borderColor="var(--border)"
        />
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 gap-4">
        <NetNewMoneyChart />
        <TotalAcumuladoChart />
      </div>
    </div>
  );
}

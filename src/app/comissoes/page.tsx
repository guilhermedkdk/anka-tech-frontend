'use client';

import MoneyCard from '@/components/money-card';
import { DataTable } from '@/components/data-table';

export default function ComissoesPage() {
  const assessors = [
    {
      name: 'Jane Cooper',
      receitaLiquida: 'R$ 477.075,23',
      comissaoTotal: 'R$ 150.075,23',
      meta: 'Cumprida',
    },
    {
      name: 'Math Smith',
      receitaLiquida: 'R$ 417.075,23',
      comissaoTotal: 'R$ 137.075,21',
      meta: 'Cumprida',
    },
    {
      name: 'Philip Wave',
      receitaLiquida: 'R$ 388.075,23',
      comissaoTotal: 'R$ 110.075,22',
      meta: 'Cumprida',
    },
    {
      name: 'Tim Pines',
      receitaLiquida: 'R$ 224.075,24',
      comissaoTotal: 'R$ 98.075,27',
      meta: 'Não atingiu',
    },
    {
      name: 'Carol Stevens',
      receitaLiquida: 'R$ 203.075,23',
      comissaoTotal: 'R$ 94.075,27',
      meta: 'Não atingiu',
    },
    {
      name: 'Amelia Parker',
      receitaLiquida: 'R$ 111.075,23',
      comissaoTotal: 'R$ 12.075,27',
      meta: 'Cumprida',
    },
    {
      name: "Michael O'Valey",
      receitaLiquida: 'R$ 107.075,23',
      comissaoTotal: 'R$ 10.075,23',
      meta: 'Cumprida',
    },
    {
      name: 'Owen Tompson',
      receitaLiquida: 'R$ 10.075,23',
      comissaoTotal: 'R$ 09.075,23',
      meta: 'Não atingiu',
    },
    {
      name: 'Sarah Wilson',
      receitaLiquida: 'R$ 125.0 M',
      comissaoTotal: 'R$ 186.50 %',
      meta: 'Cumprida',
    },
    {
      name: 'David Brown',
      receitaLiquida: 'R$ 142.0 M',
      comissaoTotal: 'R$ 195.20 %',
      meta: 'Cumprida',
    },
    {
      name: 'Emma Johnson',
      receitaLiquida: 'R$ 108.0 M',
      comissaoTotal: 'R$ 212.10 %',
      meta: 'Cumprida',
    },
    {
      name: 'Robert Davis',
      receitaLiquida: 'R$ 156.0 M',
      comissaoTotal: 'R$ 158.70 %',
      meta: 'Cumprida',
    },
    {
      name: 'Lisa Thompson',
      receitaLiquida: 'R$ 119.0 M',
      comissaoTotal: 'R$ 201.50 %',
      meta: 'Cumprida',
    },
    {
      name: 'Mark Anderson',
      receitaLiquida: 'R$ 133.0 M',
      comissaoTotal: 'R$ 174.80 %',
      meta: 'Cumprida',
    },
    {
      name: 'Jennifer White',
      receitaLiquida: 'R$ 111.0 M',
      comissaoTotal: 'R$ 167.90 %',
      meta: 'Cumprida',
    },
    {
      name: 'Kevin Martinez',
      receitaLiquida: 'R$ 148.0 M',
      comissaoTotal: 'R$ 192.40 %',
      meta: 'Cumprida',
    },
    {
      name: 'Michelle Garcia',
      receitaLiquida: 'R$ 95.0 M',
      comissaoTotal: 'R$ 156.30 %',
      meta: 'Cumprida',
    },
    {
      name: 'Steven Rodriguez',
      receitaLiquida: 'R$ 128.0 M',
      comissaoTotal: 'R$ 183.60 %',
      meta: 'Cumprida',
    },
    {
      name: 'Amanda Wilson',
      receitaLiquida: 'R$ 114.0 M',
      comissaoTotal: 'R$ 171.20 %',
      meta: 'Cumprida',
    },
    {
      name: 'Daniel Lee',
      receitaLiquida: 'R$ 137.0 M',
      comissaoTotal: 'R$ 189.70 %',
      meta: 'Cumprida',
    },
    {
      name: 'Jessica Taylor',
      receitaLiquida: 'R$ 102.0 M',
      comissaoTotal: 'R$ 162.80 %',
      meta: 'Cumprida',
    },
    {
      name: 'Christopher Moore',
      receitaLiquida: 'R$ 121.0 M',
      comissaoTotal: 'R$ 178.50 %',
      meta: 'Cumprida',
    },
    {
      name: 'Laura Jackson',
      receitaLiquida: 'R$ 153.0 M',
      comissaoTotal: 'R$ 204.90 %',
      meta: 'Cumprida',
    },
  ];

  const columns = [
    { key: 'name', label: 'Nome', className: 'font-medium' },
    {
      key: 'receitaLiquida',
      label: 'Receita Líquida',
    },
    {
      key: 'comissaoTotal',
      label: 'Comissão Total',
      className: 'text-success',
    },
    { key: 'meta', label: 'Meta' },
  ];

  return (
    <div className="main-page-padding">
      {/* Cards de Money no topo */}
      <div className="flex justify-center items-center gap-6 mb-4 mt-16 flex-wrap w-full">
        <MoneyCard
          title="Receita Bruta"
          amount="R$ 1.8 M"
          period="Essa semana"
          growthValue="17.5%"
          isPositive={true}
          growthCircleColor="rgba(230, 230, 230, 0.25)"
          growthTextColor="#FFFFFF"
          backgroundColor="linear-gradient(to right, #304FE0 0%, #259AC1 100%)"
          textColor="#FFFFFF"
          secondaryTextColor="#E5E7EB"
          borderColor="rgba(255, 255, 255, 0.2)"
        />
        <MoneyCard
          title="Receita Líquida"
          amount="R$ 1.7 M"
          period="Desde o ano passado"
          growthValue="9.3%"
          isPositive={true}
          backgroundColor="var(--card)"
          textColor="var(--foreground)"
          secondaryTextColor="var(--muted-foreground)"
          borderColor="var(--border)"
        />
        <MoneyCard
          title="Comissão total"
          amount="R$ 980 K"
          period="Desde o ano passado"
          growthValue="9.3%"
          isPositive={true}
          backgroundColor="var(--card)"
          textColor="var(--foreground)"
          secondaryTextColor="var(--muted-foreground)"
          borderColor="var(--border)"
        />
      </div>

      {/* Tabela de Assessores */}
      <div>
        <DataTable
          title="Detalhes por assessor"
          subtitle="Assessores ativos"
          columns={columns}
          data={assessors}
          searchPlaceholder="Buscar"
          itemsPerPage={8}
        />
      </div>
    </div>
  );
}

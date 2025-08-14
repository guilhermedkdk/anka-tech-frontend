'use client';

import MoneyCard from '@/components/money-card';
import { DataTable } from '@/components/data-table';

export default function ComissoesPage() {
  const assessors = [
    {
      name: 'Jane Cooper',
      metaAnual: 'R$ 45.0 M',
      captadoAnual: 'R$ 135.0 M',
      indiceSemestral: 'R$ 225.43 %',
      metaMensal: 'R$ 5.0 M',
      captadoMensal: 'R$ 18.0 M',
      percMensal: 'R$ 105.23 %',
    },
    {
      name: 'Math Smith',
      metaAnual: 'R$ 40.0 M',
      captadoAnual: 'R$ 130.0 M',
      indiceSemestral: 'R$ 225.43 %',
      metaMensal: 'R$ 5.0 M',
      captadoMensal: 'R$ 18.2 M',
      percMensal: 'R$ 245.00 %',
    },
    {
      name: 'Philip West',
      metaAnual: 'R$ 39.0 M',
      captadoAnual: 'R$ 90.0 M',
      indiceSemestral: 'R$ 200.54 %',
      metaMensal: 'R$ 3.8 M',
      captadoMensal: 'R$ 16.7 M',
      percMensal: 'R$ 398.23 %',
    },
    {
      name: 'Tim Rines',
      metaAnual: 'R$ 35.0 M',
      captadoAnual: 'R$ 98.0 M',
      indiceSemestral: 'R$ 179.00 %',
      metaMensal: 'R$ 5.0 M',
      captadoMensal: 'R$ 18.2 M',
      percMensal: 'R$ 180.00 %',
    },
    {
      name: 'Carol Stevens',
      metaAnual: 'R$ 30.0 M',
      captadoAnual: 'R$ 135.0 M',
      indiceSemestral: 'R$ 200.54 %',
      metaMensal: 'R$ 3.0 M',
      captadoMensal: 'R$ 18.2 M',
      percMensal: 'R$ 220.23 %',
    },
    {
      name: 'Amelia Parker',
      metaAnual: 'R$ 28.0 M',
      captadoAnual: 'R$ 120.0 M',
      indiceSemestral: 'R$ 225.43 %',
      metaMensal: 'R$ 4.0 M',
      captadoMensal: 'R$ 20.2 M',
      percMensal: 'R$ 178.23 %',
    },
    {
      name: "Michael O'Vally",
      metaAnual: 'R$ 27.5 M',
      captadoAnual: 'R$ 100.0 M',
      indiceSemestral: 'R$ 200.20 %',
      metaMensal: 'R$ 5.0 M',
      captadoMensal: 'R$ 17.2 M',
      percMensal: 'R$ 245.00 %',
    },
    {
      name: 'Owen Tompson',
      metaAnual: 'R$ 25.0 M',
      captadoAnual: 'R$ 135.0 M',
      indiceSemestral: 'R$ 190.50 %',
      metaMensal: 'R$ 5.0 M',
      captadoMensal: 'R$ 22.0 M',
      percMensal: 'R$ 99.8 %',
    },
    {
      name: 'Sarah Wilson',
      metaAnual: 'R$ 42.0 M',
      captadoAnual: 'R$ 125.0 M',
      indiceSemestral: 'R$ 198.50 %',
      metaMensal: 'R$ 4.5 M',
      captadoMensal: 'R$ 19.8 M',
      percMensal: 'R$ 186.50 %',
    },
    {
      name: 'David Brown',
      metaAnual: 'R$ 38.5 M',
      captadoAnual: 'R$ 142.0 M',
      indiceSemestral: 'R$ 210.30 %',
      metaMensal: 'R$ 3.2 M',
      captadoMensal: 'R$ 16.5 M',
      percMensal: 'R$ 195.20 %',
    },
    {
      name: 'Emma Johnson',
      metaAnual: 'R$ 33.0 M',
      captadoAnual: 'R$ 108.0 M',
      indiceSemestral: 'R$ 175.80 %',
      metaMensal: 'R$ 4.2 M',
      captadoMensal: 'R$ 21.5 M',
      percMensal: 'R$ 212.10 %',
    },
    {
      name: 'Robert Davis',
      metaAnual: 'R$ 41.0 M',
      captadoAnual: 'R$ 156.0 M',
      indiceSemestral: 'R$ 230.40 %',
      metaMensal: 'R$ 3.8 M',
      captadoMensal: 'R$ 18.9 M',
      percMensal: 'R$ 158.70 %',
    },
    {
      name: 'Lisa Thompson',
      metaAnual: 'R$ 29.5 M',
      captadoAnual: 'R$ 119.0 M',
      indiceSemestral: 'R$ 188.90 %',
      metaMensal: 'R$ 5.2 M',
      captadoMensal: 'R$ 23.1 M',
      percMensal: 'R$ 201.50 %',
    },
    {
      name: 'Mark Anderson',
      metaAnual: 'R$ 36.0 M',
      captadoAnual: 'R$ 133.0 M',
      indiceSemestral: 'R$ 195.70 %',
      metaMensal: 'R$ 4.0 M',
      captadoMensal: 'R$ 17.8 M',
      percMensal: 'R$ 174.80 %',
    },
    {
      name: 'Jennifer White',
      metaAnual: 'R$ 31.0 M',
      captadoAnual: 'R$ 111.0 M',
      indiceSemestral: 'R$ 182.60 %',
      metaMensal: 'R$ 3.5 M',
      captadoMensal: 'R$ 15.2 M',
      percMensal: 'R$ 167.90 %',
    },
    {
      name: 'Kevin Martinez',
      metaAnual: 'R$ 44.5 M',
      captadoAnual: 'R$ 148.0 M',
      indiceSemestral: 'R$ 218.50 %',
      metaMensal: 'R$ 4.8 M',
      captadoMensal: 'R$ 20.3 M',
      percMensal: 'R$ 192.40 %',
    },
    {
      name: 'Michelle Garcia',
      metaAnual: 'R$ 26.5 M',
      captadoAnual: 'R$ 95.0 M',
      indiceSemestral: 'R$ 165.40 %',
      metaMensal: 'R$ 3.0 M',
      captadoMensal: 'R$ 14.7 M',
      percMensal: 'R$ 156.30 %',
    },
    {
      name: 'Steven Rodriguez',
      metaAnual: 'R$ 37.5 M',
      captadoAnual: 'R$ 128.0 M',
      indiceSemestral: 'R$ 203.20 %',
      metaMensal: 'R$ 4.1 M',
      captadoMensal: 'R$ 19.1 M',
      percMensal: 'R$ 183.60 %',
    },
    {
      name: 'Amanda Wilson',
      metaAnual: 'R$ 32.0 M',
      captadoAnual: 'R$ 114.0 M',
      indiceSemestral: 'R$ 177.30 %',
      metaMensal: 'R$ 3.7 M',
      captadoMensal: 'R$ 16.8 M',
      percMensal: 'R$ 171.20 %',
    },
    {
      name: 'Daniel Lee',
      metaAnual: 'R$ 40.0 M',
      captadoAnual: 'R$ 137.0 M',
      indiceSemestral: 'R$ 207.80 %',
      metaMensal: 'R$ 4.3 M',
      captadoMensal: 'R$ 18.4 M',
      percMensal: 'R$ 189.70 %',
    },
    {
      name: 'Jessica Taylor',
      metaAnual: 'R$ 28.0 M',
      captadoAnual: 'R$ 102.0 M',
      indiceSemestral: 'R$ 169.50 %',
      metaMensal: 'R$ 3.3 M',
      captadoMensal: 'R$ 15.9 M',
      percMensal: 'R$ 162.80 %',
    },
    {
      name: 'Christopher Moore',
      metaAnual: 'R$ 34.5 M',
      captadoAnual: 'R$ 121.0 M',
      indiceSemestral: 'R$ 184.90 %',
      metaMensal: 'R$ 3.9 M',
      captadoMensal: 'R$ 17.3 M',
      percMensal: 'R$ 178.50 %',
    },
    {
      name: 'Laura Jackson',
      metaAnual: 'R$ 43.0 M',
      captadoAnual: 'R$ 153.0 M',
      indiceSemestral: 'R$ 225.10 %',
      metaMensal: 'R$ 4.6 M',
      captadoMensal: 'R$ 21.8 M',
      percMensal: 'R$ 204.90 %',
    },
  ];

  const columns = [
    { key: 'name', label: 'Nome', className: 'font-medium' },
    {
      key: 'captadoAnual',
      label: 'Receita Líquida',
      className: 'text-success',
    },
    {
      key: 'percMensal',
      label: 'Comissão Total',
      className: 'text-success',
    },
    { key: 'metaAnual', label: 'Meta' },
  ];

  return (
    <div className="main-page-padding">
      {/* Cards de Money no topo */}
      <div className="flex justify-center items-center gap-6 mb-8 mt-16 flex-wrap w-full">
        <MoneyCard
          title="Receita Bruta"
          amount="R$ 1.8 M"
          period="Essa semana"
          growthValue="12.5%"
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
          growthValue="8.3%"
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
          growthValue="15.2%"
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

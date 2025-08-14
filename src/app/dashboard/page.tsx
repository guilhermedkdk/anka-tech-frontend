'use client';

import { MetricsCards } from '@/components/metrics-cards';
import { DataTable } from '@/components/data-table';
import { GrowthIndicator } from '@/components/growth-indicator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function DashboardPage() {
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
      metaAnual: 'R$ 40.9 M',
      captadoAnual: 'R$ 130.0 M',
      indiceSemestral: 'R$ 225.43 %',
      metaMensal: 'R$ 5.0 M',
      captadoMensal: 'R$ 18.2 M',
      percMensal: 'R$ 245.00 %',
    },
    {
      name: 'Philip Wave',
      metaAnual: 'R$ 39.0 M',
      captadoAnual: 'R$ 90.0 M',
      indiceSemestral: 'R$ 290.43 %',
      metaMensal: 'R$ 3.8 M',
      captadoMensal: 'R$ 16.7 M',
      percMensal: 'R$ 398.23 %',
    },
    {
      name: 'Tim Pines',
      metaAnual: 'R$ 35.0 M',
      captadoAnual: 'R$ 98.0 M',
      indiceSemestral: 'R$ 178.00 %',
      metaMensal: 'R$ 5.0 M',
      captadoMensal: 'R$ 18.2 M',
      percMensal: 'R$ 180.00 %',
    },
    {
      name: 'Carol Stevens',
      metaAnual: 'R$ 30.0 M',
      captadoAnual: 'R$ 135.0 M',
      indiceSemestral: 'R$ 200.43 %',
      metaMensal: 'R$ 3.0 M',
      captadoMensal: 'R$ 15.2 M',
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
      name: "Michael O'Valey",
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
      name: 'Alex Rodriguez',
      metaAnual: 'R$ 35.0 M',
      captadoAnual: 'R$ 28.0 M',
      indiceSemestral: 'R$ 80.00 %',
      metaMensal: 'R$ 4.0 M',
      captadoMensal: 'R$ 2.8 M',
      percMensal: 'R$ 70.00 %',
    },
    {
      name: 'Maria Silva',
      metaAnual: 'R$ 42.0 M',
      captadoAnual: 'R$ 31.5 M',
      indiceSemestral: 'R$ 75.00 %',
      metaMensal: 'R$ 4.5 M',
      captadoMensal: 'R$ 2.7 M',
      percMensal: 'R$ 60.00 %',
    },
    {
      name: 'Carlos Santos',
      metaAnual: 'R$ 38.0 M',
      captadoAnual: 'R$ 26.6 M',
      indiceSemestral: 'R$ 70.00 %',
      metaMensal: 'R$ 3.8 M',
      captadoMensal: 'R$ 2.3 M',
      percMensal: 'R$ 60.53 %',
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
    { key: 'metaAnual', label: 'Meta Anual' },
    {
      key: 'captadoAnual',
      label: 'Captado Anual',
      className: 'text-success',
    },
    {
      key: 'indiceSemestral',
      label: 'Índice Semestral',
      className: 'text-success',
    },
    { key: 'metaMensal', label: 'Meta Mensal' },
    {
      key: 'captadoMensal',
      label: 'Captado Mensal',
      className: 'text-success',
    },
    {
      key: 'percMensal',
      label: 'Perc Mensal',
      className: 'text-success',
    },
  ];

  return (
    <div className="main-page-padding flex flex-col h-full">
      {/* Header do Dashboard */}
      <div className="flex items-center justify-between mb-2 flex-shrink-0">
        <div className="flex-1 min-w-0">
          <h1 className="text-3xl font-bold mb-1 truncate">
            Captado Anual Total
          </h1>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-4xl font-bold bg-gradient-to-r from-[#3A95FC] to-[#C01EE8] bg-clip-text text-transparent break-words">
              R$ 355.000.000
            </span>
            <GrowthIndicator value="37.8%" positive={true} size="lg" />
          </div>
        </div>

        <div className="flex items-center gap-6 flex-shrink-0">
          {/* Espaço reservado para futuros controles */}
        </div>
      </div>

      {/* Seletor de mês */}
      <div className="flex justify-end mb-0">
        <Select defaultValue="janeiro">
          <SelectTrigger className="w-32 bg-card rounded-2xl border-border flex items-center justify-center text-center text-sm font-normal py-2 text-foreground focus:!border-primary focus:!ring-0 cursor-pointer transform -translate-y-4">
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
            <SelectItem value="marco" className="cursor-pointer hover:bg-muted">
              Março
            </SelectItem>
            <SelectItem value="abril" className="cursor-pointer hover:bg-muted">
              Abril
            </SelectItem>
            <SelectItem value="maio" className="cursor-pointer hover:bg-muted">
              Maio
            </SelectItem>
            <SelectItem value="junho" className="cursor-pointer hover:bg-muted">
              Junho
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Metrics Cards */}
      <div className="flex-shrink-0 -mt-1">
        <MetricsCards />
      </div>

      {/* Tabela de Assessores */}
      <div className="-mt-2">
        <DataTable
          title="Metas por assessor"
          subtitle="Assessores ativos"
          columns={columns}
          data={assessors}
          searchPlaceholder="Buscar"
          itemsPerPage={8}
          getCellClassName={(key, value, item) => {
            // Valores específicos que devem aparecer em vermelho
            if (
              String(item.name) === 'Philip Wave' &&
              (key === 'captadoAnual' || key === 'indiceSemestral')
            ) {
              return 'text-danger';
            }
            if (
              String(item.name) === 'Carol Stevens' &&
              (key === 'captadoMensal' || key === 'percMensal')
            ) {
              return 'text-danger';
            }
            // Novos assessores com valores baixos (vermelho)
            if (
              ['Alex Rodriguez', 'Maria Silva', 'Carlos Santos'].includes(
                String(item.name)
              ) &&
              (key === 'captadoAnual' ||
                key === 'indiceSemestral' ||
                key === 'captadoMensal' ||
                key === 'percMensal')
            ) {
              return 'text-danger';
            }
            return '';
          }}
        />
      </div>
    </div>
  );
}

'use client';

import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Column {
  key: string;
  label: string;
  className?: string;
}

interface DataTableProps {
  title: string;
  subtitle: string;
  columns: Column[];
  data: Record<string, string | number>[];
  searchPlaceholder?: string;
  itemsPerPage?: number;
  sortOptions?: { value: string; label: string }[];
}

export const DataTable = React.memo(function DataTable({
  title,
  subtitle,
  columns,
  data,
  searchPlaceholder = 'Buscar',
  itemsPerPage = 8,
  sortOptions = [
    { value: 'maior', label: 'Maior' },
    { value: 'menor', label: 'Menor' },
  ],
}: DataTableProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(sortOptions[0]?.value || '');
  const [currentPage, setCurrentPage] = useState(1);

  // Filtrar dados baseado na busca - memoizado para performance
  const filteredData = useMemo(
    () =>
      data.filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      ),
    [data, searchTerm]
  );

  // Calcular paginação - memoizado para performance
  const paginationData = useMemo(() => {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = filteredData.slice(startIndex, endIndex);

    return {
      totalPages,
      startIndex,
      endIndex,
      currentData,
    };
  }, [filteredData, currentPage, itemsPerPage]);

  return (
    <div className="bg-card rounded-[26px] border h-fit flex flex-col shadow-sm">
      {/* Header da tabela */}
      <div className="pt-4 px-6 pb-6 flex-shrink-0">
        {/* Títulos e controles na mesma linha */}
        <div className="flex items-center justify-between mb-6">
          {/* Títulos empilhados verticalmente */}
          <div>
            <h2 className="text-lg font-medium text-foreground mb-1">
              {title}
            </h2>
            <p className="text-sm text-success">{subtitle}</p>
          </div>

          {/* Controles alinhados à direita */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder={searchPlaceholder}
                className="pl-10 w-56 rounded-xl border-border bg-card text-foreground placeholder:text-small focus:!border-primary focus:!ring-0"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Filtrar por:
              </span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-24 rounded-[10px] border-border bg-card text-foreground focus:!border-primary focus:!ring-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card/80 backdrop-blur-sm border-border shadow-lg">
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Tabela */}
      <div className="overflow-auto px-6 -mt-9">
        <div className="relative w-full overflow-x-auto rounded-[15px] border border-border">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-b border-border">
                {columns.map((column) => (
                  <TableHead
                    key={column.key}
                    className="text-foreground font-medium h-12 px-4 bg-muted/30"
                  >
                    {column.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginationData.currentData.map((item, index) => (
                <TableRow
                  key={index}
                  className="hover:bg-muted/50 transition-colors border-b border-border/50 last:border-b-0"
                >
                  {columns.map((column) => (
                    <TableCell
                      key={column.key}
                      className={`px-4 py-3 text-foreground whitespace-nowrap ${
                        column.className || ''
                      }`}
                    >
                      {item[column.key]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Paginação */}
      <div className="p-6 pt-4 flex items-center justify-between flex-shrink-0">
        <span className="text-sm text-muted-foreground">
          Mostrando {paginationData.startIndex + 1} ao{' '}
          {Math.min(paginationData.endIndex, filteredData.length)} de{' '}
          {filteredData.length}
        </span>
        <div className="flex items-center gap-2">
          {/* Botão Anterior */}
          <Button
            variant="outline"
            size="sm"
            className="rounded-[8px] min-w-[32px] h-8 border-border text-foreground hover:bg-muted/50 disabled:opacity-50"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            ‹
          </Button>

          {/* Números das páginas */}
          {Array.from(
            { length: Math.min(paginationData.totalPages, 5) },
            (_, i) => {
              let pageNumber;
              if (paginationData.totalPages <= 5) {
                pageNumber = i + 1;
              } else {
                // Lógica para mostrar páginas relevantes ao redor da página atual
                if (currentPage <= 3) {
                  pageNumber = i + 1;
                } else if (currentPage >= paginationData.totalPages - 2) {
                  pageNumber = paginationData.totalPages - 4 + i;
                } else {
                  pageNumber = currentPage - 2 + i;
                }
              }

              return (
                <Button
                  key={pageNumber}
                  variant="outline"
                  size="sm"
                  className={`rounded-[8px] min-w-[32px] h-8 cursor-pointer !bg-transparent hover:!bg-transparent ${
                    currentPage === pageNumber
                      ? '!border-primary !text-primary hover:!border-primary hover:!text-primary'
                      : '!border-border !text-foreground hover:!border-border hover:!text-foreground'
                  }`}
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  {pageNumber}
                </Button>
              );
            }
          )}

          {/* Botão Próximo */}
          <Button
            variant="outline"
            size="sm"
            className="rounded-[8px] min-w-[32px] h-8 border-border text-foreground hover:bg-muted/50 disabled:opacity-50"
            onClick={() =>
              setCurrentPage(
                Math.min(paginationData.totalPages, currentPage + 1)
              )
            }
            disabled={currentPage === paginationData.totalPages}
          >
            ›
          </Button>
        </div>
      </div>
    </div>
  );
});

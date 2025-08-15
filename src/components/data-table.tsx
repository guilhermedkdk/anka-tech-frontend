'use client';

import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
  getCellClassName?: (
    key: string,
    value: string | number,
    item: Record<string, string | number>
  ) => string;
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
  getCellClassName,
}: DataTableProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(sortOptions[0]?.value || '');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(
    () =>
      data.filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      ),
    [data, searchTerm]
  );

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
      {/* Header */}
      <div className="pt-8 px-6 pb-6 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="pl-10">
            <h2 className="text-lg font-medium text-foreground mb-1">
              {title}
            </h2>
            <p className="text-sm text-success">
              {subtitle.includes('ativos')
                ? subtitle.split('ativos').map((part, index, array) =>
                    index === array.length - 1 ? (
                      part
                    ) : (
                      <span key={index}>
                        {part}
                        <span className="font-bold">ativos</span>
                      </span>
                    )
                  )
                : subtitle}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#818181] w-4 h-4" />
              <Input
                placeholder={searchPlaceholder}
                className="pl-10 w-56 rounded-xl border-border bg-background text-foreground placeholder:text-[#818181] focus:!border-primary focus:!ring-0"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-42 rounded-[10px] border-border bg-background text-foreground focus:!border-primary focus:!ring-0 cursor-pointer">
                  <span className="text-sm text-muted-foreground">
                    Filtrar por:
                  </span>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-background/80 backdrop-blur-sm border-border shadow-lg">
                  {sortOptions.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      className="cursor-pointer hover:bg-muted"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Área da tabela: sem bordas e linhas até a borda do card */}
      <div className="-mx-6 overflow-x-auto px-16">
        {/* A tabela ocupa toda a largura útil do card; o padding das células mantém o alinhamento */}
        <Table className="min-w-full">
          <TableHeader>
            <TableRow className="hover:bg-transparent border-border">
              {columns.map((column) => (
                <TableHead
                  key={column.key}
                  className="h-12 text-small font-medium bg-transparent"
                >
                  {column.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginationData.currentData.map((item, index) => (
              <TableRow key={index} className="hover:bg-muted/40 border-border">
                {columns.map((column) => (
                  <TableCell
                    key={column.key}
                    className={`whitespace-nowrap ${column.className || ''} ${
                      getCellClassName
                        ? getCellClassName(column.key, item[column.key], item)
                        : ''
                    }`}
                  >
                    {column.key === 'meta' ? (
                      <Badge
                        variant={
                          String(item[column.key]) === 'Cumprida'
                            ? 'success'
                            : 'danger'
                        }
                      >
                        {item[column.key]}
                      </Badge>
                    ) : (
                      item[column.key]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Paginação */}
      <div className="p-6 pt-4 flex items-center justify-between flex-shrink-0">
        <span className="text-sm text-muted-foreground pl-10">
          Mostrando {paginationData.startIndex + 1} ao{' '}
          {Math.min(paginationData.endIndex, filteredData.length)} de{' '}
          {filteredData.length}
        </span>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="rounded-[8px] min-w-[32px] h-8 border-border text-foreground hover:bg-muted/50 disabled:opacity-50"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            ‹
          </Button>

          {Array.from(
            { length: Math.min(paginationData.totalPages, 5) },
            (_, i) => {
              let pageNumber;
              if (paginationData.totalPages <= 5) {
                pageNumber = i + 1;
              } else if (currentPage <= 3) {
                pageNumber = i + 1;
              } else if (currentPage >= paginationData.totalPages - 2) {
                pageNumber = paginationData.totalPages - 4 + i;
              } else {
                pageNumber = currentPage - 2 + i;
              }

              return (
                <Button
                  key={pageNumber}
                  variant="outline"
                  size="sm"
                  className={`rounded-[8px] min-w-[32px] h-8 cursor-pointer !bg-transparent hover:!bg-transparent ${
                    currentPage === pageNumber
                      ? '!border-primary !text-primary'
                      : '!border-border !text-foreground'
                  }`}
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  {pageNumber}
                </Button>
              );
            }
          )}

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

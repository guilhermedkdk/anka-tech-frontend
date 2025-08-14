'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent } from '@/components/ui/card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface DateCardInputProps {
  label?: string;
  value?: Date | null;
  onChange: (date: Date | null) => void;
  className?: string;
}

export default function DateCardInput({
  label = 'Data final',
  value,
  onChange,
  className,
}: DateCardInputProps) {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  // Update input value when value prop changes
  React.useEffect(() => {
    if (value) {
      setInputValue(format(value, 'dd/MM/yyyy'));
    } else {
      setInputValue('');
    }
  }, [value]);

  // Format input as user types
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, ''); // Remove non-digits
    let formatted = '';

    if (input.length > 0) {
      formatted = input.substring(0, 2);
      if (input.length > 2) {
        formatted += '/' + input.substring(2, 4);
        if (input.length > 4) {
          formatted += '/' + input.substring(4, 8);
        }
      }
    }

    setInputValue(formatted);

    // Try to parse complete date
    if (formatted.length === 10) {
      const [day, month, year] = formatted.split('/').map(Number);
      const date = new Date(year, month - 1, day);

      // Validate date
      if (
        date.getDate() === day &&
        date.getMonth() === month - 1 &&
        date.getFullYear() === year
      ) {
        onChange(date);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && inputValue.length === 0) {
      onChange(null);
    }
  };

  const handleDateSelect = (date: Date | undefined) => {
    onChange(date || null);
    setOpen(false);
  };

  return (
    <div className={cn('w-full', className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Card className="cursor-pointer transition-all duration-200 hover:border-gray-300 focus-within:ring-2 focus-within:ring-gray-200 focus-within:ring-offset-2 w-full p-0 py-5 gap-0 rounded-2xl hover:cursor-pointer">
            <CardContent
              className="p-0 cursor-pointer"
              style={{ paddingLeft: '26px', paddingRight: '26px' }}
            >
              <div className="flex items-center justify-between p-0">
                <label
                  className="text-xs text-muted-foreground cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(true);
                  }}
                >
                  {label}
                </label>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-5 w-5 p-0 hover:bg-transparent cursor-pointer ml-[100px]"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setOpen(true);
                  }}
                >
                  <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                </Button>
              </div>
              <div
                className="relative p-0 flex items-center justify-between cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(true);
                }}
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="dd/mm/aaaa"
                  className="text-base font-semibold bg-transparent border-none outline-none placeholder:text-muted-foreground/50 cursor-pointer p-0"
                  maxLength={10}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(true);
                  }}
                />
                <div className="w-[100px]"></div>
              </div>
            </CardContent>
          </Card>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-md z-[9999]"
          align="start"
          sideOffset={4}
        >
          <Calendar
            mode="single"
            selected={value || undefined}
            onSelect={handleDateSelect}
            initialFocus
            locale={ptBR}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

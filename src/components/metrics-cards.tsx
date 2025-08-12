'use client';

import React, { useMemo } from 'react';
import { GrowthIndicator } from './growth-indicator';

export const MetricsCards = React.memo(function MetricsCards() {
  const metrics = useMemo(
    () => [
      {
        title: 'Captado Anual',
        value: 'R$ 196 M',
        change: '24.3%',
        positive: true,
      },
      {
        title: 'Captado Semestral',
        value: 'R$ 98 M',
        change: '17.5%',
        positive: true,
      },
      {
        title: 'Captado Mensal',
        value: 'R$ 12.4 M',
        change: '8.8%',
        positive: true,
      },
    ],
    []
  );

  return (
    <div className="bg-card rounded-[26px] border mb-8">
      <div className="grid grid-cols-3 divide-x divide-border">
        {metrics.map((metric) => (
          <div key={metric.title} className="px-8 py-6">
            <div className="text-base font-medium text-large mb-3 leading-none">
              {metric.title}
            </div>
            <div className="flex items-center gap-3 leading-none">
              <span className="text-2xl font-medium">{metric.value}</span>
              <GrowthIndicator
                value={metric.change}
                positive={metric.positive}
                size="lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

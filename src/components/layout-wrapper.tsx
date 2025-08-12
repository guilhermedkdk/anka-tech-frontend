'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Sidebar } from './sidebar';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const pathname = usePathname();

  // Páginas que não devem mostrar a sidebar
  const pagesWithoutSidebar = ['/', '/login', '/register'];
  const shouldShowSidebar = !pagesWithoutSidebar.includes(pathname);

  if (!shouldShowSidebar) {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isMinimized={isMinimized} setIsMinimized={setIsMinimized} />
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}

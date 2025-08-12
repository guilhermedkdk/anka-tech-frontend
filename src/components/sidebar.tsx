'use client';

import React, { useMemo } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface SidebarProps {
  isMinimized: boolean;
  setIsMinimized: (value: boolean) => void;
}

export const Sidebar = React.memo(function Sidebar({
  isMinimized,
  setIsMinimized,
}: SidebarProps) {
  const pathname = usePathname();

  const menuItems = useMemo(
    () => [
      {
        iconSrc: '/icons/dashboard.svg',
        label: 'Dashboard',
        href: '/dashboard',
        active: pathname === '/dashboard',
      },
      {
        iconSrc: '/icons/net-new-money.svg',
        label: 'Net New Money',
        href: null,
        active: false,
        disabled: true,
      },
      {
        iconSrc: '/icons/custodia.svg',
        label: 'Custódia',
        href: null,
        active: false,
        disabled: true,
      },
      {
        iconSrc: '/icons/receitas.svg',
        label: 'Receitas',
        href: null,
        active: false,
        disabled: true,
      },
      {
        iconSrc: '/icons/comissões.svg',
        label: 'Comissões',
        href: '/comissoes',
        active: pathname === '/comissoes',
      },
    ],
    [pathname]
  );

  const adjustItems = useMemo(
    () => [
      { iconSrc: '/icons/configurações.svg', label: 'Configurações' },
      { iconSrc: '/icons/ajuda.svg', label: 'Ajuda' },
      { iconSrc: '/icons/sair.svg', label: 'Sair' },
    ],
    []
  );

  const itemBaseClasses = `${
    isMinimized ? 'justify-center w-12 h-12 p-0' : 'justify-start w-full py-3'
  } rounded-xl gap-3 bg-transparent cursor-pointer text-sm`;

  return (
    <div
      className={`${
        isMinimized ? 'w-20' : 'w-64'
      } sidebar flex flex-col h-full transition-all duration-300 ease-in-out py-8 ${
        isMinimized ? 'px-0' : 'px-6'
      }`}
    >
      {/* Logo */}
      <div className={`p-0 ${isMinimized ? 'flex justify-center' : ''}`}>
        <Image
          src="/icon.svg"
          alt="Logo"
          width={48}
          height={48}
          className="flex-shrink-0"
          style={{
            width: '48px',
            height: '48px',
            minWidth: '48px',
            minHeight: '48px',
          }}
        />
      </div>

      {/* Menu Principal com botão de colapso */}
      <div className="px-0 mt-8">
        <div
          className={`${
            isMinimized
              ? 'w-full flex justify-center'
              : 'w-full flex items-center justify-between'
          } mb-4`}
        >
          {!isMinimized && <p className="text-small text-sm">Menu principal</p>}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMinimized(!isMinimized)}
            className={`${
              isMinimized ? 'w-10 h-10 p-0 justify-center' : 'p-0'
            } bg-transparent hover:bg-transparent dark:hover:bg-transparent cursor-pointer rounded-xl`}
          >
            <Image
              src="/icons/menu.svg"
              alt="Menu"
              width={20}
              height={20}
              className={`sidebar-icon transition-transform ${
                isMinimized ? 'rotate-180' : ''
              }`}
            />
          </Button>
        </div>
        <nav
          className={`flex flex-col gap-4 ${isMinimized ? 'items-center' : ''}`}
        >
          {menuItems.map((item) => {
            if (item.disabled) {
              return (
                <Button
                  key={item.label}
                  variant="ghost"
                  className={`w-full ${itemBaseClasses} text-foreground opacity-50 cursor-not-allowed ${
                    item.active
                      ? 'bg-[var(--sidebar-active)] hover:bg-[var(--sidebar-active)] dark:hover:bg-[var(--sidebar-active)]'
                      : 'hover:bg-transparent dark:hover:bg-transparent'
                  }`}
                  title={isMinimized ? item.label : undefined}
                  disabled
                >
                  <span
                    className="sidebar-icon-mask"
                    style={{
                      WebkitMask: `url(${item.iconSrc}) no-repeat center`,
                      mask: `url(${item.iconSrc}) no-repeat center`,
                      WebkitMaskSize: 'contain',
                      maskSize: 'contain',
                    }}
                    aria-hidden="true"
                  />
                  {!isMinimized && item.label}
                </Button>
              );
            }

            return (
              <Link key={item.label} href={item.href!}>
                <Button
                  variant="ghost"
                  className={`w-full ${itemBaseClasses} text-foreground ${
                    item.active
                      ? 'bg-[var(--sidebar-active)] hover:bg-[var(--sidebar-active)] dark:hover:bg-[var(--sidebar-active)]'
                      : 'hover:bg-transparent dark:hover:bg-transparent'
                  } hover:text-[var(--primary)]`}
                  title={isMinimized ? item.label : undefined}
                  aria-current={item.active ? 'page' : undefined}
                >
                  <span
                    className="sidebar-icon-mask"
                    style={{
                      WebkitMask: `url(${item.iconSrc}) no-repeat center`,
                      mask: `url(${item.iconSrc}) no-repeat center`,
                      WebkitMaskSize: 'contain',
                      maskSize: 'contain',
                    }}
                    aria-hidden="true"
                  />
                  {!isMinimized && item.label}
                </Button>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex-1"></div>

      {/* Seção de Ajustes no final da sidebar */}
      <div className="px-0 pb-6">
        {!isMinimized && <p className="text-small text-sm mb-4">Ajustes</p>}
        <nav
          className={`flex flex-col gap-4 ${isMinimized ? 'items-center' : ''}`}
        >
          {adjustItems.map((item) => {
            const isLogout = item.label === 'Sair';
            return (
              <Button
                key={item.label}
                variant="ghost"
                className={`w-full ${itemBaseClasses} ${
                  isLogout
                    ? 'text-[#DB8181] hover:text-[#DB8181] hover:bg-[#DB8181]/10 dark:hover:bg-[#DB8181]/10'
                    : 'text-foreground hover:text-[var(--primary)] hover:bg-transparent dark:hover:bg-transparent'
                }`}
                title={isMinimized ? item.label : undefined}
              >
                {isLogout ? (
                  <Image
                    src={item.iconSrc}
                    alt={item.label}
                    width={20}
                    height={20}
                    className={'sidebar-icon-fixed'}
                  />
                ) : (
                  <span
                    className="sidebar-icon-mask"
                    style={{
                      WebkitMask: `url(${item.iconSrc}) no-repeat center`,
                      mask: `url(${item.iconSrc}) no-repeat center`,
                      WebkitMaskSize: 'contain',
                      maskSize: 'contain',
                    }}
                    aria-hidden="true"
                  />
                )}
                {!isMinimized && item.label}
              </Button>
            );
          })}
        </nav>
      </div>
    </div>
  );
});

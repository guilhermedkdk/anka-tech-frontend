# Anka Tech — Frontend

Frontend do case Anka Tech, implementado em Next.js 14 (App Router) e TypeScript, com Shadcn/UI, TanStack Query, React-Hook-Form + Zod, Axios e tema claro/escuro.

> Para subir tudo via Docker (DB, Redis, Backend e Front), use o repo infra. Passos completos no README.md do repositório anka-tech-infra.

## 🏗 Stack principal

- Next.js 14 (App Router), TypeScript
- Shadcn/UI (Button, Card, Table etc.)
- TanStack Query (fetch/cache, invalidation)
- React-Hook-Form + Zod
- Axios (REST)
- Tailwind CSS, tema light/dark (toggle)

## 🚧 Autenticação & API
- Login via POST /auth/login (JWT).
  - Use o admin criado pela seed do backend (padrão):

```bash
email: admin@example.com
senha: changeme
```
- Axios com interceptors:
  - anexa Authorization: Bearer <token>
- TanStack Query:
  - cache por query keys

### Diagrama do fluxo

<img width="2613" height="1546" alt="mermaid-diagram-auth" src="https://github.com/user-attachments/assets/0ffcd3d4-a738-480f-85c5-a6dacfc01e6f" />

## 🧭 Telas & Navegação

- Após login/registro, o usuário cai em /dashboard.
- A sidebar é persistente em todas as páginas autenticadas e permite navegar entre os dashboards e fazer logout.
- O Theme Toggle (claro/escuro) aparece em todas as telas, incluindo /login e /register.

### Diagrama do fluxo

<img width="3840" height="3648" alt="mermaid-diagram-frontend" src="https://github.com/user-attachments/assets/0170b99d-7e59-439d-bc6b-498823664736" />

## 🗂️ Estrutura de pastas

```bash
src/
  app/               # App Router (páginas/rotas)
    login/
    register/
    dashboard/
  layout.tsx
  providers.tsx
  components/        # UI (shadcn + componentes próprios)
  lib/               # axios, utils
```

## 📝 Checklist do Case (PDF)

### Requisitos técnicos (frontend)

- Next.js 14 (App Router) + TypeScript ✔
- Shadcn/UI (componentes base) ✔
- TanStack Query (fetch/cache/invalidation) ✔
- React-Hook-Form + Zod (forms/validação) ✔
- Axios ✔
- Tema claro/escuro (toggle) ✔

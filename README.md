# Prueba técnica Grupo Patterson Frontend

## Iniciar proyecto

### Instalar dependencias

```bash
npm install
```

### Lanzar el proyecto en local

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abrir [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Estructura de carpetas del proyecto

```bash

├── .eslintrc.json
├── .gitignore
├── .next
├── README.md
app
│   ├── components
│   │   ├── characters-list
│   │   │   ├── character-card.tsx
│   │   │   ├── characters-list-layout.tsx
│   │   │   └── fetch-characters-list.ts
│   │   └── characters-shared-episodes
│   │       ├── characters-dropdown.tsx
│   │       ├── characters-shared-episode-layout.tsx
│   │       ├── fetch-episodes.ts
│   │       ├── get-shared-episodes.ts
│   │       └── shared-episode-list.tsx
│   ├── favicon.ico
│   ├── fonts
│   │   ├── GeistMonoVF.woff
│   │   └── GeistVF.woff
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

# Prueba técnica Grupo Patterson Frontend

Aplicación web basada en la serie de dibujos Rick & Morty. Se pueden consultar sus personajes así como también ver en que episodios coinciden.

## Iniciar proyecto

### Instalar dependencias

```bash
npm install
```

### Configurar el entorno

Hay que cambiar el archivo `.env.example` a `.env`.

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
.
├── .env
├── .env.example
├── .eslintrc.json
├── .gitignore
├── README.md
├── app
│   ├── characters
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── fonts
│   │   ├── GeistMonoVF.woff
│   │   └── GeistVF.woff
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── shared-appearances
│       └── page.tsx
├── components
│   ├── button
│   │   └── button.tsx
│   ├── card
│   │   └── card.tsx
│   ├── card-detail
│   │   └── card-detail.tsx
│   ├── characters-shared-episodes
│   │   ├── characters-shared-episode-layout.tsx
│   │   └── shared-episode-list.tsx
│   ├── dropdown
│   │   └── dropdown.tsx
│   ├── nav
│   │   ├── helpers.ts
│   │   ├── nav-links.tsx
│   │   └── nav.tsx
│   └── pagination
│       └── pagination.tsx
├── env.ts
├── lib
│   ├── fetch-data
│   │   ├── fetch-character-detail.ts
│   │   ├── fetch-characters-list.ts
│   │   ├── fetch-episodes.ts
│   │   ├── fetch-shared-episodes.ts
│   │   └── fetch-single-episode.ts
│   └── models
│       ├── character-model.tsx
│       └── episode-model.tsx
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Componentes clave

### Componente CharactersListLayout

Cuando se carga este componente se reciben los primeros 20 personajes de Rick & Morty. A partir de esa carga inicial, usando el hook useEffect(para hacer la petición de los personajes) y el hook useState(para guardar la lista de personajes), se puede navegar al detalle del personaje y también se pueden visualizar más personajes usando el componente de paginación.

### Componente de CharactersSharedEpisodeLayout

Cuando se carga este componente se vuelve a hacer una petición de la lista de personajes, para hidratar el componente dropdown, siguiendo el mismo método que en el componente mencionado anteriormente. Este componente además contiene la lógica para hidratar el segundo dropdown que permite a través del componente de paginación hidratarlo con personajes diferentes a los de la primer dropdown. Una vez seleccionados los dos personajes se deshabilita el botón y al pulsar se muestra la lista con los episodios en los que salen los dos personajes.

## Mejoras futuras

- Añadir funcionalidad de favoritos.
- Añadir visualización de planetas.
- Añadir visualización de todos los episodios.
- Añadir sistema de caché.
- Añadir buscador.

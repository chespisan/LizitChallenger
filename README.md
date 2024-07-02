## Descripción

Se desarrollo una app(web) con las tecnologias Tailwind, Nextjs, simulando un challenger de Lizit,
Consta de una vista de inventario, donde se listan todos los productos y se tienene acciones para ver, editar y eliminar productos, asi mismo cuenta con un sistema de modal para crear un poroducto y eliminar,
y una vista final donde muestra el detalle de un producto.

Se utilizaron las tecnologias mensionadas, con practicas enfocadas a clean code, escabilidad, mantenimiento y con una arquitectura basada en "Arquitectura Hexagonal" algunos patrones mas.

Asi mismo se utilizo Tailwind para todo el manejo de estilos y configuracion del design system, junto a Sass para mejorar
su lectura y escabilidad

## Tecnologías

- React 18
- Nextjs 14
- Dass 1.77
- Typescript 5

## Running the app

```bash
# Local Web
$ npm run dev

# build
$ npm run build

# Lint - Formatter
$ npm run lint
```

## Environments

Revisar el archivo .env.example, donde manejamos 2 env para este challenger,

- FAKESTOREAPI=https://fakestoreapi.com
- API_LOCAL=http://localhost:3000

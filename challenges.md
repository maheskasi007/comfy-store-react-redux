## Useful Project Resources

- [Complete Project](https://react-vite-comfy-store-v2.netlify.app/)
- [API DOCS](https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi)


## Initial Setup

- create vite project with tailwind[Tailwind Docs](https://tailwindcss.com/docs/guides/vite)

- setup vite project

```sh
npm create vite@latest comfy-store -- --template react
cd comfy-store
```

- add tailwind

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- rename to tailwind.config.cjs
- add following content

tailwind.config.cjs

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- remove App.css
- delete contents of index.css
- delete contents of App.jsx
- change title

```js
const App = () => {
  return <div>App</div>;
};
export default App;
```

- Add the Tailwind directives to your CSS

index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Tailwind directives are instructions that decide how Tailwind CSS creates the styles for your website. They control the global styles, component styles, and utility classes.

- start the project "npm run dev"
- setup first tailwind classes in App.jsx
- remove StrictMode

  App.jsx

```js
const App = () => {
  return <h1 className="text-7xl font-bold underline">Tailwind project</h1>;
};
export default App;
```

## Assets

- get project assets

## Setup DaisyUI

- [DaisyUI](https://daisyui.com/)

- add and configure daisyui to our project
- add TailwindCSS Typography plugin

```sh
npm i  -D daisyui@latest @tailwindcss/typography
```

tailwind.config.js

```js
{
 plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
```

## Install All Libraries

```sh
npm i axios@1.4.0 dayjs@1.11.9 @reduxjs/toolkit@1.9.5 @tanstack/react-query@4.32.6 @tanstack/react-query-devtools@4.32.6 react-icons@4.10.1 react-redux@8.1.2 react-router-dom@6.14.2 react-toastify@9.1.3
```

## Create All Pages

- create pages directory
- create all pages and export from index.js
- About, Cart, Checkout, Error,
  HomeLayout, Landing, Login, Orders,
  Products, Register, SingleProduct
- import in app.jsx


## React Router

- configure react router
- setup initial route structure
  hint : look for nested UI (basically navbar)
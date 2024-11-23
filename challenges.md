## Useful Project Resources

- [Complete Project](https://react-vite-comfy-store-v2.netlify.app/)
- [API DOCS](https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi)

***

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

================================================================================================================

## Create All Pages

- create pages directory
- create all pages and export from index.js
- About, Cart, Checkout, Error,
  HomeLayout, Landing, Login, Orders,
  Products, Register, SingleProduct
- import in app.jsx

================================================================================================================

## React Router

- configure react router
- setup initial route structure
  hint : look for nested UI (basically navbar)

1. Import Dependencies:

  - Import necessary modules from the 'react-router-dom' library.

2. Create Router Configuration:

   - Use the `createBrowserRouter` function to set up a router configuration.
   - Define an array of route objects, each representing a different route in your application.
   - Configure routes for different paths, including components like `HomeLayout`, `Landing`, `Products`, etc.

3. Create Router Instance:

   - Create a router instance using the `createBrowserRouter` function and pass in the defined route configuration.

4. Define App Component:

   - Create a functional component named `App`.
   - Return a `RouterProvider` component and pass in the created router instance as a prop.

5. Export App Component:
   - Export the `App` component as the default export of the module.

================================================================================================================

## Error Page

- complete error page
- create two returns
- first for 404 errors
- second for all other errors
- log the error
- add option to navigate home

### Error.jsx

1. Import Dependencies:

   - Import the necessary modules `useRouteError` and `Link` from the 'react-router-dom' library.

2. Create Error Component:

   - Define a functional component named `Error`.
   - Inside the component, use the `useRouteError` hook to get information about the route error.
   - Check the status of the error using `error.status`.

3. Conditional Rendering for 404 Error:

   - If the error status is 404, render a `main` element with a grid layout and centered content.
   - Display a large "404" text, a title "Page not found," and a description.
   - Include a link back to the home page using the `Link` component.

4. Conditional Rendering for Other Errors:

   - If the error status is not 404, render a `main` element with a grid layout and centered content.
   - Display a text message indicating that there was an error.

5. Export Error Component:
   - Export the `Error` component as the default export of the module.

================================================================================================================

## Input Field Component

- create components folder with index.js
- in daisyui
- find Text input component
- more specifically "With form-control and labels"
- set it as component (in my case FormInput.jsx)
- decide on props
- export from index.js
- test in login

### FormInput.jsx

1. Create FormInput Component:

   - Define a functional component named `FormInput`.
   - The component accepts the following props: `label`, `name`, `type`, and `defaultValue`.

2. FormInput Structure:

   - Inside the component, return a `div` element with the class `form-control`, which provides styling for form inputs.
   - Within this `div`, create a `label` element with the class `label`.
   - Inside the `label`, use the `label-text` class to display the capitalized label text provided through the props.

3. Input Element:

   - After the `label`, create an `input` element.
   - Set the `type` attribute of the `input` element to the value provided through the `type` prop.
   - Set the `name` attribute of the `input` element to the value provided through the `name` prop.
   - Use the `defaultValue` prop to set the initial value of the input element.
   - Apply the `input` and `input-bordered` classes to the `input` element for styling.

4. Export FormInput Component:
   - Export the `FormInput` component as the default export of the module.

================================================================================================================

## CLogin Page Structure

- setup structure for login page (use complete project as reference)
- check for loading state and disable submit button
- setup submit button in a separate component
- add loading spinner

### SubmitBtn.jsx

- Import Dependencies:

  - Import `useNavigation` from `'react-router-dom'`.

- Create the `SubmitBtn` Component:

  - Define a functional component named `SubmitBtn`.
  - Accept a prop `text`.

  - Inside the component, use the `useNavigation()` hook to access navigation state.
  - Determine whether the form is submitting by checking if `navigation.state` is equal to `'submitting'`.

  - Return a `button` element with the following attributes:

    - Type set to `'submit'`.
    - Class set to `'btn btn-primary btn-block'`.
    - Disabled attribute set to the value of `isSubmitting`.

    - Inside the `button` element, use a conditional rendering:
      - If `isSubmitting` is true:
        - Render a `span` element with class `'loading loading-spinner'`.
        - Render the text `'sending...'`.
      - If `isSubmitting` is false:
        - Render the `text` prop if provided, otherwise render `'submit'`.

### Login.jsx

- Import Dependencies:

  - Import `FormInput` and `SubmitBtn` components from the `'../components'` directory.
  - Import `Form` and `Link` from `'react-router-dom'`.

- Create the `Login` Component:

  - Define a functional component named `Login`.

  - Return a `section` element with class `'h-screen grid place-items-center'`.

    - Inside the `section` element, create a `Form` element with the following attributes:

      - `method` set to `'post'`.
      - Class set to `'card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'`.

      - Inside the `Form` element, create an `h4` element with class `'text-center text-3xl font-bold'` containing the text `'Login'`.

      - Use the `FormInput` component twice:

        - First, for an email input with type `'email'`, label `'email'`, name `'identifier'`, and defaultValue `'test@test.com'`.
        - Second, for a password input with type `'password'`, label `'password'`, name `'password'`, and defaultValue `'secret'`.

      - Create a `div` element with class `'mt-4'`.

        - Inside the `div` element, use the `SubmitBtn` component with a prop `text` set to `'login'`.

      - Create a `button` element with the following attributes:

        - Type set to `'button'`.
        - Class set to `'btn btn-secondary btn-block'`.
        - Text content set to `'guest user'`.

      - Create a `p` element with class `'text-center'`.

        - Inside the `p` element, display the text `'Not a member yet?'`.

        - Create a `Link` element with the following attributes:
          - `to` set to `'/register'`.
          - Class set to `'ml-2 link link-hover link-primary capitalize'`.
          - Text content set to `'register'`.

================================================================================================================

## Register Page Structure

- setup structure for register page (use complete project as reference)

### Register.jsx

- Import Dependencies:

  - Import `FormInput` and `SubmitBtn` components from the `'../components'` directory.
  - Import `Form` and `Link` from `'react-router-dom'`.

- Create the `Register` Component:

  - Define a functional component named `Register`.

  - Return a `section` element with class `'h-screen grid place-items-center'`.

    - Inside the `section` element, create a `Form` element with the following attributes:

      - `method` set to `'POST'`.
      - Class set to `'card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'`.

      - Inside the `Form` element, create an `h4` element with class `'text-center text-3xl font-bold'` containing the text `'Register'`.

      - Use the `FormInput` component three times:

        - First, for a text input with type `'text'`, label `'username'`, and name `'username'`.
        - Second, for an email input with type `'email'`, label `'email'`, and name `'email'`.
        - Third, for a password input with type `'password'`, label `'password'`, and name `'password'`.

      - Create a `div` element with class `'mt-4'`.

        - Inside the `div` element, use the `SubmitBtn` component with a prop `text` set to `'register'`.

      - Create a `p` element with class `'text-center'`.

        - Inside the `p` element, display the text `'Already a member?'`.

        - Create a `Link` element with the following attributes:
          - `to` set to `'/login'`.
          - Class set to `'ml-2 link link-hover link-primary capitalize'`.
          - Text content set to `'login'`.

================================================================================================================

## Custom Class

- create custom class
- align content
- add to HomeLayout Outlet component


## Challenge (10) - Header Component

- setup and render header component in HomeLayout
- add two links - Login and Register

### Header.jsx

- Import Dependencies:

  - Import `Link` from `'react-router-dom'`.

- Create the `Header` Component:

  - Define a functional component named `Header`.

  - Return a `header` element with classes `'bg-neutral py-2 text-neutral-content'`.

    - Inside the `header` element, create a `div` element with classes `'align-element flex justify-center sm:justify-end'`.

      - Inside the `div` element, create another `div` element with classes `'flex gap-x-6 justify-center items-center'`.

        - Use the `Link` component twice:

          - First, create a `Link` to `'/login'` with the following attributes:

            - Class set to `'link link-hover text-xs sm:text-sm'`.
            - Text content set to `'Sign in / Guest'`.

          - Second, create a `Link` to `'/register'` with the following attributes:
            - Class set to `'link link-hover text-xs sm:text-sm'`.
            - Text content set to `'Create an Account'`.

## Challenge (11) - Navbar Structure

- create components/Navbar.jsx
- setup initial structure
- use Daisy navbar component
- "# responsive (dropdown menu on small screen, center menu on large screen)"
- import icons from react-icons
- render in HomeLayout.jsx

### Navbar.jsx

- Import Dependencies:

  - Import icons `BsCart3`, `BsMoonFill`, `BsSunFill`, and `FaBarsStaggered` from their respective packages.
  - Import `NavLink` from `'react-router-dom'`.

- Create the `Navbar` Component:

  - Define a functional component named `Navbar`.

  - Return a `nav` element with class `'bg-base-200'`.

    - Inside the `nav` element, create a `div` element with class `'navbar align-element '`.

      - Inside the first `div` element, create another `div` element with class `'navbar-start'`.

        - Create a `NavLink` to `'/'` with the following attributes:

          - Class set to `'hidden lg:flex btn btn-primary text-3xl items-center '`.

        - Create a `div` element with class `'dropdown'`.

          - Create a `label` element with `tabIndex={0}` and class `'btn btn-ghost lg:hidden'`.

          - Create a `ul` element with `tabIndex={0}` and class `'menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'`.

      - Inside the second `div` element, create a `div` element with class `'navbar-center hidden lg:flex'`.

        - Create a `ul` element with class `'menu menu-horizontal '`.

      - Inside the third `div` element, create another `div` element with class `'navbar-end'`.

        - Create a `NavLink` to `'cart'` with the following attributes:

          - Class set to `'btn btn-ghost btn-circle btn-md ml-4'`.

          - Inside the `NavLink`, create a `div` element with class `'indicator'`.

            - Add the `BsCart3` icon component with class `'h-6 w-6'`.

            - Create a `span` element with classes `'badge badge-sm badge-primary indicator-item'` and text content `'8'`.

## Challenge (12) - NavLinks

- create NavLinks component
- setup an array of links
- iterate over and setup return

### Navbar.jsx

- Import Dependencies:

  - Import `NavLink` from `'react-router-dom'`.

- Create the NavLinks Component:

  - Define a functional component named `NavLinks`.

  - Return a fragment (`<>...</>`) to contain the list of navigation links.

    - Use the `.map()` function to iterate over the `links` array.

      - For each `link` object, extract the `id`, `url`, and `text`.

      - Create an `li` element with a `key` attribute set to `id`.

        - Inside the `li` element, create a `NavLink` with the following attributes:

          - Class set to `'capitalize'`.

          - `to` attribute set to the `url`.

          - Text content set to the `text`.


## Challenge (13) - Toggle Component

- add daisyui swap component

## Challenge (14) - Set Themes

- add few themes from daisyui
- test in index.html


## Challenge (15) - Change Theme

- change theme with toggle component

### Navbar.jsx

- Import Dependencies:

  - Import `useEffect` and `useState` from `'react'`.

- Theme Configuration:

  - Define a `themes` object with theme names as keys.

- Local Storage Theme Retrieval:

  - Create a function named `getThemeFromLocalStorage`.
    - Return the value of the `'theme'` key from `localStorage` or the default theme `'winter'`.

- Logic:

  - Create a state variable `theme` using the `useState` hook and initialize it with the result of `getThemeFromLocalStorage()`.
  - Define a function `handleTheme` that toggles between the `'winter'` and `'dracula'` themes based on the current theme.
  - Use the `useEffect` hook to apply the selected theme to the `document.documentElement` and store the theme value in `localStorage`.
  - ... (rest of the component implementation)


## Challenge (16) - About Page

- setup about page

### About.jsx

- About Component:
  - Define the `About` component.
    - Return a fragment containing the following elements:
      - A `div` with classes `flex`, `flex-wrap`, `gap-2`, `sm:gap-x-6`, `items-center`, and `justify-center`.
        - Inside the `div`, an `h1` with classes `text-4xl`, `font-bold`, `leading-none`, and `tracking-tight`, with the text "We love".
        - Inside the `div`, a `div` with classes `stats`, `bg-primary`, and `shadow`.
          - Inside the nested `div`, another `div` with class `stat`.
            - Inside this `div`, a `div` with classes `stat-title`, `text-primary-content`, `text-4xl`, `font-bold`, and `tracking-widest`, containing the text "comfy".
      - A `p` element with classes `mt-6`, `text-lg`, `leading-8`, `max-w-2xl`, and `mx-auto`, containing sample Lorem ipsum text.


## Challenge (17) - Hero Component

- setup hero component in landing page

### Hero.jsx

- Import Dependencies:

  - Import `Link` from `'react-router-dom'`.

- Hero Component:
  - Define the `Hero` component.
    - Create an array `carouselImages` containing imported image paths.
    - Return a `div` with classes `grid`, `grid-cols-1`, `lg:grid-cols-2`, `gap-24`, and `items-center`.
      - Inside this `div`, another `div`.
        - Inside this `div`, an `h1` with classes `max-w-2xl`, `text-4xl`, `font-bold`, and `tracking-tight`, containing the text "We’re changing the way people shop."
        - Next, a `p` element with classes `mt-8`, `max-w-xl`, `text-lg`, and `leading-8`, containing sample Lorem ipsum text.
        - Following that, a `div` with class `mt-10`.
          - Inside the `div`, a `Link` component with props `to='products'` and classes `btn` and `btn-primary`, containing the text "Our Products".
      - Another `div` with classes `hidden`, `h-[28rem]`, `lg:carousel`, `carousel-center`, `p-4`, `space-x-4`, `bg-neutral`, and `rounded-box`.
        - Inside this `div`, a JavaScript map function iterating over `carouselImages`.
          - For each image, a `div` with class `carousel-item`.
            - Inside the `div`, an `img` element with attributes `src` set to the image path and classes `rounded-box`, `h-full`, `w-80`, and `object-cover`.


## Challenge (18) - Axios Custom Instance

- explore api
- [API DOCS](https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi)
- create utils/index.js
- setup custom axios instance
- figure out the base url
- setup thunder client (optional)

## Challenge (19) - Landing Loader

- setup ErrorElement
- add to Loading Page
- setup a loader
- fetch only featured products
- return products

### ErrorElement.jsx

1. Create ErrorElement Component:

   - Define a functional component named `ErrorElement`.

2. Import Dependencies:

   - Import the `useRouteError` hook from `'react-router-dom'`.

3. Get Route Error:

   - Inside the component, use the `useRouteError` hook to retrieve the error information from the current route.

4. Display Error Message:

   - Return an `h4` element with the classes `font-bold` and `text-4xl`.
   - Set the content of the `h4` element to "there was an error..."

5. Export ErrorElement Component:
   - Export the `ErrorElement` component as the default export of the module.

## Challenge (20) - Featured Products

- create FeaturedProducts, SectionTitle and ProductsGrid components
- render SectionTitle and ProductsGrid in FeaturedProducts
- setup SectionTitle
- in ProductsGrid access and render products from loader

### SectionTitle.jsx

1. Create SectionTitle Component:

   - Define a functional component named `SectionTitle`.

2. Component Props:

   - The component should accept a prop named `text`.

3. Component Structure:

   - Return a `div` element with the classes `border-b border-base-300 pb-5`.
   - Inside the `div`, place an `h2` element with the classes `text-3xl`, `font-medium`, `tracking-wider`, and `capitalize`.
   - Set the content of the `h2` element to the value of the `text` prop.

4. Export SectionTitle Component:
   - Export the `SectionTitle` component as the default export of the module.

### FeaturedProducts.jsx

1. Import Dependencies:

   - Import `ProductsGrid` from `'./ProductsGrid'`.
   - Import `SectionTitle` from `'./SectionTitle'`.

2. Create FeaturedProducts Component:

   - Define a functional component named `FeaturedProducts`.

3. Component Structure:

   - Return a `div` element with the class `pt-24`.
   - Inside the `div`, include a `SectionTitle` component with the prop `text` set to `'featured products'`.
   - Include a `ProductsGrid` component.

4. Export FeaturedProducts Component:
   - Export the `FeaturedProducts` component as the default export of the module.

### ProductsGrid.jsx

1. Import Dependencies:

   - Import `Link` and `useLoaderData` from `'react-router-dom'`.

2. Create ProductsGrid Component:

   - Define a functional component named `ProductsGrid`.

3. Component Structure:

   - Inside the component, destructure the `products` data using `useLoaderData`.
   - Return a `div` element with the classes `pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3`.
   - Use the `.map()` function to iterate through each `product` in the `products` array.

4. Product Card:

   - For each `product`, destructure the attributes such as `title`, `price`, and `image`.
   - Create a `Link` component that has the following:
     - `key` attribute set to `product.id`.
     - `to` attribute set to `/products/${product.id}`.
     - `className` attribute with classes for styling.
   - Inside the `Link`, create a `figure` element with the class `px-4 pt-4` to hold the product image.
   - Within the `figure`, include an `img` element with the `src` attribute set to `image`, `alt` attribute set to `title`, and classes for styling.
   - Below the `figure`, create a `div` element with the class `card-body items-center text-center`.
   - Inside the `div`, display the `title` using a `h2` element with classes for styling.
   - Display the `price` using a `span` element with the class `text-secondary`.

5. Export ProductsGrid Component:
   - Export the `ProductsGrid` component as the default export of the module.

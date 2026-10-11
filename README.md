# Audiophile E-commerce Website

A fully responsive e-commerce store for premium audio gear, built with **React**, **TypeScript**, **Redux Toolkit** and **Tailwind CSS**. Users can browse products by category, view product details, manage a persistent shopping cart and complete a validated checkout flow.

Based on the [Audiophile e-commerce website](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx) challenge by Frontend Mentor.

## Features

- **Responsive layout:** built mobile-first, with separate layouts for mobile, tablet and desktop.
- **Product catalogue:** Home, category pages (Headphones, Speakers, Earphones) and a dynamic product detail page per product (`/product/:slug`).
- **Shopping cart:**
  - add products with a chosen quantity, then increase, decrease or remove items;
  - a cart badge in the header shows the item count;
  - the cart is saved to `localStorage`, so it survives page reloads.
- **Checkout:**
  - billing, shipping and payment form validated with React Hook Form and Yup;
  - input masks for phone, ZIP code and e-Money fields;
  - e-Money fields only appear and are only validated when e-Money is selected.
- **Order flow:** a loading state on "Continue & Pay", then an animated order confirmation modal that clears the cart.
- **UI details:**
  - mobile navigation menu;
  - sticky header;
  - background scroll is locked while a modal is open;
  - hover and focus states throughout;
  - scroll position resets on every route change.

## Tech Stack

| Category | Tools |
| --- | --- |
| Framework | [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) |
| Build tool | [Vite](https://vite.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) (design tokens defined in `@theme`) |
| Routing | [React Router](https://reactrouter.com/) |
| State management | [Redux Toolkit](https://redux-toolkit.js.org/), [React Redux](https://react-redux.js.org/) |
| Forms & validation | [React Hook Form](https://react-hook-form.com/), [Yup](https://github.com/jquense/yup), [@react-input/mask](https://github.com/GoncharukOrg/react-input) |
| Code quality | ESLint |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or newer
- npm

### Installation

```bash
git clone https://github.com/DemetreBerdzenadze7/audiophile-eccomerce-web.git
cd audiophile-eccomerce-web
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── components/
│   ├── cart/          # Cart modal
│   ├── category/      # Category page header and product list
│   ├── checkout/      # Checkout form, Yup schema, summary, order confirmation
│   ├── home/          # Home page sections (Hero, featured products)
│   ├── menu/          # Mobile navigation menu
│   ├── product/       # Product detail sections (overview, features, gallery, related)
│   └── shared/        # Reusable UI: Header, Footer, Button, Categories, BestGear
├── container/         # Layout container
├── data/              # Product data
├── hooks/             # Custom hooks (useLockBodyScroll)
├── layout/            # Root layout with header, footer and scroll restoration
├── pages/             # Route pages: Home, Headphones, Speakers, Earphones, ProductDetail, Checkout
├── redux/             # Store and cart slice
├── utils/             # Helper functions
├── index.css          # Tailwind import and design tokens
└── main.tsx           # App entry point and router setup
```

## Implementation Notes

- **Design tokens:** colours, typography, breakpoints, radius and animations live as variables in the Tailwind `@theme` block in `index.css`. Components use semantic classes such as `text-h2` or `bg-orange` instead of hard-coded values.
- **Data-driven pages:** category pages, product pages and "You may also like" are all generated from a single `products` data file. One `ProductDetail` page serves every product via its URL `slug`.
- **Cart persistence:** a `store.subscribe` listener writes the cart to `localStorage` after every Redux update. The cart slice reads it back as its initial state.
- **Conditional validation:** the Yup schema uses `.when("paymentMethod", ...)`, so e-Money fields are only required when that payment method is selected.

## Author

**Demetre Berdzenadze**

- GitHub: [@DemetreBerdzenadze7](https://github.com/DemetreBerdzenadze7)

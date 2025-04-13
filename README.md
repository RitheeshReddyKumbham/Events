# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🎉 Event Website

Event Website is a modern, single-page React app for discovering upcoming and recommended events — with user authentication handled locally using `localStorage`. No backend is required.

---

## 🚀 Features

- 🔐 **Authentication without Backend**
  - Sign up and login handled with localStorage
  - Session persists across reloads
  - PrivateRoute guards to protect pages

- 🎟️ **Event Discovery**
  - Displays upcoming and recommended events
  - Fetched from a public events API
  - Dynamic rendering with reusable components

- 🧭 **Navigation**
  - Entry page with clean UI
  - React Router v6-based routing
  - Protected Home route for logged-in users only

- 💄 **Responsive UI**
  - Custom CSS for Login, Signup & Entry pages
  - Modern form designs with hover and transition effects

---

## 🛠️ Tech Stack

- **Frontend**: React.js, React Router DOM
- **State Management**: React Hooks (useState, useEffect)
- **Authentication**: Custom logic via localStorage
- **API**: Public event API
- **Styling**: CSS (modular & scoped)


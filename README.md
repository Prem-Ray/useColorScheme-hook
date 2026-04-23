
````md
# use-color-scheme-hook 🌗

A lightweight and production-ready React Hook to detect and sync with the user's system color scheme (dark/light mode) in real time.

Perfect for modern React apps, dashboards, portfolios, and design systems that support theme-aware UI.

---

## 📦 Install

```bash
npm install use-color-scheme-hook
````

or

```bash
yarn add use-color-scheme-hook
```

---

## ⚡ Features

* 🌙 Detects system dark/light mode automatically
* 🔄 Real-time updates when theme changes
* ⚛️ Built with React Hooks
* 📦 Zero dependencies
* 🧠 SSR-safe fallback support
* 🚀 Lightweight & performance optimized
* 🎯 Easy integration in any React project

---

## 🧠 Why use this hook?

Modern UI/UX requires apps to respect user system preferences.

With `use-color-scheme-hook`, you can:

* Build dark/light mode apps effortlessly
* Avoid repetitive theme detection logic
* Improve accessibility & UX
* Keep code clean and reusable
* Integrate theme-aware UI in seconds

---

## 🚀 Usage

```jsx
import useColorScheme from "use-color-scheme-hook";

function App() {
  const { appearance } = useColorScheme();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: appearance === "dark" ? "#0f172a" : "#ffffff",
        color: appearance === "dark" ? "#ffffff" : "#111827",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <h1>Current Theme: {appearance}</h1>
      <p>System theme is automatically synced.</p>
    </div>
  );
}

export default App;
```

---

## 📡 API Reference

### `useColorScheme()`

Returns the current system theme.

| Property   | Type    | Description |                             |
| ---------- | ------- | ----------- | --------------------------- |
| appearance | `"dark" | "light"`    | Current system color scheme |

---

## 🧪 Example

```jsx
const { appearance } = useColorScheme();

if (appearance === "dark") {
  console.log("Dark mode enabled");
} else {
  console.log("Light mode enabled");
}
```

---

## ⚙️ How it works

This hook uses the native browser API:

```js
window.matchMedia("(prefers-color-scheme: dark)")
```

It:

1. Detects initial system theme
2. Listens for theme changes
3. Updates React state in real time

---

## 🌍 Browser Support

* Modern browsers supporting `matchMedia`
* Falls back to `"light"` in unsupported environments
* Works with React 16+

---

## 💡 Use Cases

* Dark mode / light mode apps
* Admin dashboards
* UI component libraries
* Portfolio websites
* SaaS applications
* Design systems

---

## 🔑 SEO Keywords

react hook, useColorScheme, use-color-scheme-hook, dark mode detection, light mode detection, system theme, prefers-color-scheme, react theme hook, matchMedia hook, ui theme switcher, frontend utility, react dark mode hook , light mode, dark mode, react theme hook, react dark mode packages, npm dark mode package, npm light mode package 

---

## 📁 Project Structure

```
useColorScheme-hook/
├── .gitignore
├── .npmignore
├── eslint.config.js
├── index.d.ts
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
├── public/
└── src/
    ├── App.jsx
    ├── main.jsx
    └── useColorScheme.jsx
```

---

## 🚀 Future Improvements

* Manual theme toggle support
* localStorage persistence
* Tailwind CSS integration
* Context-based theme provider
* Multi-theme support

---

## 🤝 Contributing

Contributions are welcome!

* Report issues
* Suggest improvements
* Submit pull requests
* Share feature ideas

---

## 📄 License

MIT © 2026 Premanshu Ray

```

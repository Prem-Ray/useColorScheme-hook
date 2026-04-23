````md
# use-color-scheme

A lightweight React hook for detecting and syncing with the user's system color scheme in real time.

---

## Overview

`use-color-scheme` helps React applications respond to the user's operating system theme preference automatically. It detects whether the system is using dark mode or light mode and updates your UI when that preference changes.

This makes it ideal for dashboards, design systems, personal portfolios, and any app that supports theme-aware interfaces.

---

## Features

- Detects system dark/light mode automatically
- Updates in real time when the system theme changes
- Lightweight and dependency-free
- Built with React Hooks
- SSR-safe fallback for non-browser environments
- Easy to integrate into any React project

---

## Why use this hook?

Modern user interfaces should respect the user's system preferences.

With this hook, you can:

- Build theme-aware applications
- Improve accessibility and user experience
- Avoid writing repeated theme-detection logic
- Keep your React code clean and reusable

---

## Installation

```bash
npm install use-color-scheme
````

or

```bash
yarn add use-color-scheme
```

---

## Usage

```jsx
import { useColorScheme } from "use-color-scheme";

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
      <p>The UI updates automatically based on system preference.</p>
    </div>
  );
}

export default App;
```

---

## API

### `useColorScheme()`

Returns the current system color scheme.

| Property     | Type                | Description                 |
| ------------ | ------------------- | --------------------------- |
| `appearance` | `"dark" \| "light"` | Current system color scheme |

---

## Example

```jsx
const { appearance } = useColorScheme();

if (appearance === "dark") {
  console.log("Dark mode is enabled");
} else {
  console.log("Light mode is enabled");
}
```

---

## How it works

This hook uses the browser `window.matchMedia()` API with the media query:

```css
(prefers-color-scheme: dark)
```

It:

1. Detects the initial system theme
2. Listens for theme changes
3. Updates the hook state automatically

---

## Browser Support

This package works in modern browsers that support `matchMedia`.

In unsupported environments, it falls back to `"light"`.

---

## Use Cases

* Theme-aware React applications
* Dark mode dashboards
* Design systems
* UI component libraries
* Portfolio and personal websites

---

## Keywords

React, React hook, useColorScheme, color scheme hook, dark mode, light mode, theme detection, system theme, prefers-color-scheme, matchMedia, UI theme, React dark mode, React light mode

---

## Future Enhancements

* Manual theme toggle support
* Local storage persistence
* Tailwind CSS integration
* Context-based theme management
* Custom theme modes

---

## Contributing

Contributions are welcome.

You can help by:

* Reporting bugs
* Suggesting improvements
* Opening pull requests
* Sharing ideas for better theme handling

---

## License

MIT © 2026 Premanshu Ray

```

For GitHub, these repo keywords also help visibility:
`react`, `react-hook`, `dark-mode`, `light-mode`, `theme`, `color-scheme`, `matchMedia`, `frontend`, `ui`, `accessibility`, `system-theme`

If you want, I can also :contentReference[oaicite:0]{index=0}, :contentReference[oaicite:1]{index=1}, and :contentReference[oaicite:2]{index=2}.
```

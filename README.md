# 🎨 use-color-scheme

A lightweight React hook to detect and sync with the user's system color scheme (dark/light) in real-time.

---

## ✨ Features

* 🌙 Detects system **dark/light mode**
* ⚡ Real-time updates when system theme changes
* 🪶 Lightweight and dependency-free
* ⚛️ Built with React Hooks
* 📦 Easy to integrate in any React app

---

## 📦 Installation

```bash
npm install use-color-scheme
```

or

```bash
yarn add use-color-scheme
```

---

## 🚀 Usage

```jsx
import { useColorScheme } from "use-color-scheme";

function App() {
  const { appearance } = useColorScheme();

  return (
    <div
      style={{
        background: appearance === "dark" ? "#111" : "#fff",
        color: appearance === "dark" ? "#fff" : "#000",
        height: "100vh",
      }}
    >
      <h1>Current Theme: {appearance}</h1>
    </div>
  );
}

export default App;
```

---

## 🧠 How it works

This hook uses the browser's `window.matchMedia` API to:

* Detect the initial system theme
* Listen for theme changes (`prefers-color-scheme`)
* Automatically update your UI

---

## 📘 API

### `useColorScheme()`

| Property   | Type                | Description                 |
| ---------- | ------------------- | --------------------------- |
| appearance | `"dark" \| "light"` | Current system color scheme |

---

## 📌 Example Output

```js
const { appearance } = useColorScheme();
// appearance = "dark" or "light"
```

---

## ⚠️ Notes

* Works only in browsers that support `matchMedia`
* Defaults to `"light"` in unsupported environments (like SSR)

---

## 🚧 Future Improvements

* Add manual theme toggle support
* Persist theme using `localStorage`
* Tailwind CSS integration support

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## 📄 License

MIT © 2026 Premanshu Ray

---

## 🌟 Support

If you like this project, consider giving it a ⭐ on GitHub!

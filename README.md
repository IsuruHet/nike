# 🏀 Nike UI Clone (Tailwind CSS v4.1)

This project is a **Nike landing page UI clone**, built by following [JavaScript Mastery's](https://www.jsmastery.pro/) tutorial and customized using **Tailwind CSS v4.1** for a fully responsive and modern design.

## 🚀 Tech Stack

- **React** (Vite)
- **Tailwind CSS v4.1**
- **JavaScript (ES6+)**
- **Heroicons / Custom Assets**

---

## 📸 Preview

![Nike UI Preview](./public/preview.png)

> _Fully responsive Nike UI built with Tailwind 4.1_

---

## 📁 Folder Structure

```
nike-ui/
├── public/
│
├── src/
    ├── assets/        # Logos, images, icons
│   ├── components/    # Reusable UI components
│   ├── sections/      # Hero, PopularProducts, Footer, etc.
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## 🛠️ Installation

```bash
# 1. Clone the repository
git clone https://github.com/IsuruHet/nike.git

# 2. Navigate to project directory
cd nike

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

---

## 📦 Tailwind CSS Setup

Tailwind v4.1 comes with performance upgrades and smarter class support.

**vite.config.js**

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

---

## 📱 Responsive Design

- Mobile-first layout
- Adaptive flex/grid
- `max-sm`, `sm`, `md`, `lg`, `xl` breakpoints

---

## 📌 Features

- ✅ Hero section with call-to-action
- ✅ Product showcase (Popular Products)
- ✅ Subscription form with responsive input
- ✅ Footer with social links
- ✅ Fully mobile-responsive with Tailwind v4.1 classes

---

## 🙌 Acknowledgements

- [JavaScript Mastery](https://youtu.be/tS7upsfuxmo?si=0KugUM4vV1M6Y8Df) – for the original UI inspiration.
- [Tailwind Docs](https://tailwindcss.com/docs/installation/using-vite) – utility-first CSS framework.

---

## 🧑‍💻 Author

**Your Name**
[GitHub](https://github.com/IsuruHet/nike) | [Portfolio](https://isuruhettiarachchi.live)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

# Guía de Instalación: Tailwind CSS v4 + Vite + React

Esta guía te ayudará a instalar Tailwind CSS v4 correctamente en tus proyectos futuros de Vite con React.

## 📦 Instalación Paso a Paso

### 1. Crear proyecto Vite

```bash
npm create vite@latest mi-proyecto
cd mi-proyecto
npm install
```

### 2. Instalar Tailwind v4

```bash
npm install -D tailwindcss @tailwindcss/vite
```

### 3. Configurar Vite

Edita `vite.config.js` y agrega el plugin de Tailwind:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

### 4. Importar Tailwind en tu CSS

Edita `src/index.css` - reemplaza las primeras líneas con:

```css
@import "tailwindcss";

/* Aquí van tus estilos personalizados */
:root {
  /* ... */
}
```

### 5. Probar que funciona

En `src/App.jsx`, agrega un componente de prueba:

```jsx
function App() {
  return (
    <div className='bg-blue-500 text-white p-4 rounded-md'>
      ✅ Tailwind funcionando correctamente
    </div>
  );
}
```

### 6. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

Deberías ver un banner azul con texto blanco.

---

## ⚠️ IMPORTANTE: Diferencias de v4 vs v3

### ❌ NO hacer esto en v4:

- **NO uses** `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`
- **NO necesitas** crear `tailwind.config.js`
- **NO necesitas** crear `postcss.config.js`
- **NO instales** `autoprefixer` o `postcss` por separado

### ✅ En v4 sí hacer:

- **Usa** `@import "tailwindcss";` en tu archivo CSS
- **Instala** `@tailwindcss/vite` (no solo `tailwindcss`)
- **Agrega** `tailwindcss()` a los plugins de Vite
- v4 usa tokens CSS nativos como `var(--color-blue-500)`

---

## 🎯 Comandos Resumidos (Copia y Pega)

Para instalar en un proyecto nuevo:

```bash
# 1. Crear proyecto
npm create vite@latest mi-proyecto
cd mi-proyecto

# 2. Instalar dependencias base
npm install

# 3. Instalar Tailwind v4
npm install -D tailwindcss @tailwindcss/vite

# 4. Ya puedes configurar vite.config.js y src/index.css
```

---

## 📚 Recursos Oficiales

- [Documentación oficial Tailwind v4](https://tailwindcss.com/docs/installation/using-vite)
- [Plugin @tailwindcss/vite](https://www.npmjs.com/package/@tailwindcss/vite)

---

## 🔧 Si algo falla

1. **Verifica que instalaste `@tailwindcss/vite`** (no solo `tailwindcss`)
2. **Verifica que usas `@import "tailwindcss"`** (no `@tailwind`)
3. **Verifica que agregaste `tailwindcss()` a los plugins de Vite**
4. **Limpia caché**: elimina `node_modules` y `package-lock.json`, luego `npm install`

---

## 💡 Ejemplo de proyecto completo

### vite.config.js

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

### src/index.css

```css
@import "tailwindcss";

:root {
  font-family: system-ui, sans-serif;
  line-height: 1.5;
}
```

### src/App.jsx

```jsx
function App() {
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      <div className='bg-white p-8 rounded-lg shadow-md'>
        <h1 className='text-3xl font-bold text-blue-600 mb-4'>
          Hola Tailwind v4
        </h1>
        <p className='text-gray-700'>
          Esto es un proyecto con Vite + React + Tailwind CSS v4
        </p>
      </div>
    </div>
  );
}

export default App;
```

---

**Última actualización:** Noviembre 2025  
**Versión de Tailwind:** v4.1+  
**Versión de Vite:** v7.2+

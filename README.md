# Tailwind CSS Plugin Boilerplate

A boilerplate for creating Tailwind CSS plugins with TypeScript.

Supporting Tailwind V4.

## Installation

```bash
npm install tailwind-plugin-boilerplate
```

## Usage

There are multiple ways to use this plugin with Tailwind CSS v4:

### Option 1: Import in your CSS file

```css
@layer base, theme, utilities, components;

@import "tailwindcss";
@plugin "tailwind-plugin-boilerplate";

/* Optional: customize the plugin */
@theme {
  /* Custom colors for the example-color match utility */
  --example-color-primary: #ff5733;
  --example-color-secondary: #33ff57;
  --example-color-accent: #5733ff;
}
```

For this to work, make sure you have PostCSS configured:

```js
// postcss.config.js
export default {
  plugins: [
    "@tailwindcss/postcss",
    // Other plugins...
  ],
}
```

### Option 2: Using with Vite

```js
// vite.config.js
import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [
    tailwindcss({
      // If you need additional plugins
      plugins: ["tailwind-plugin-boilerplate"],
    }),
  ],
})
```

## Features

This plugin boilerplate demonstrates several features of Tailwind CSS plugins:

- **Theme integration**: Access and use values from the Tailwind theme
- **Custom utilities**: Create your own utility classes
- **Custom components**: Define reusable component classes
- **Match utilities**: Generate utilities with modifiers

## Example Components

The plugin includes examples of:

1. **Basic Utility**

   ```html
   <div class="example-utility">...</div>
   ```

2. **Component Example**

   ```html
   <div class="example-component">...</div>
   ```

3. **Match Utility - Colors**
   ```html
   <div class="example-color-primary">Primary Color Text</div>
   <div class="example-color-secondary">Secondary Color Text</div>
   <div class="example-color-accent">Accent Color Text</div>
   ```

## Customization

You can customize the plugin behavior through Tailwind's theming system. Here's how to customize the colors for the example-color utility:

```css
/* in your CSS file */
@theme {
  /* Custom colors for the example-color match utility */
  --example-color-primary: #ff5733; /* Customized primary color */
  --example-color-secondary: #33ff57; /* Customized secondary color */
  --example-color-accent: #5733ff; /* Customized accent color */
}
```

## Plugin Structure

The plugin demonstrates three main types of Tailwind extensions:

1. **Utilities (addUtilities)**: Simple utility classes that apply specific CSS properties

   ```js
   addUtilities({
     ".example-utility": {
       position: "relative",
       display: "inline-block",
       gap: theme("spacing.4", "1rem"),
     },
   })
   ```

2. **Components (addComponents)**: More complex, reusable components

   ```js
   addComponents({
     ".example-component": {
       padding: "1rem",
       borderRadius: theme("borderRadius.md", "0.375rem"),
     },
   })
   ```

3. **Match Utilities (matchUtilities)**: Dynamic utilities with modifiers
   ```js
   matchUtilities(
     {
       "example-color": (value) => ({
         color: value,
       }),
     },
     {
       values: {
         primary: theme("example-color-primary", "#3b82f6"),
         secondary: theme("example-color-secondary", "#10b981"),
         accent: theme("example-color-accent", "#f59e0b"),
       },
     },
   )
   ```

## Development

1. Clone the repository
2. Install dependencies with `npm install`
3. Run development build with `npm run dev`
4. Build the plugin with `npm run build`
5. Check the example in the `/example` folder

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT](LICENSE)

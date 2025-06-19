import { type PluginCreator } from "tailwindcss/plugin"

const test: PluginCreator = ({ addUtilities, addComponents, matchUtilities, theme }) => {
  // Example: Add a utility
  addUtilities({
    ".example-utility": {
      position: "relative",
      display: "inline-block",
      // get `--space-4` value from theme, default to "1rem"
      gap: theme("spacing.4", "1rem"),
    },
  })

  // Example: Add a component
  addComponents({
    ".example-component": {
      padding: "1rem",
      // get value from theme, default to "0.375rem"
      borderRadius: theme("borderRadius.md", "0.375rem"),
    },
  })

  // Example: Add a match utility
  matchUtilities(
    {
      // Simple color utility that applies the value as a color
      "example-color": (value) => ({
        color: value,
      }),
    },
    {
      // Values from theme with fallbacks
      values: {
        primary: theme("example-color-primary", "#3b82f6"),
        secondary: theme("example-color-secondary", "#10b981"),
        accent: theme("example-color-accent", "#f59e0b"),
      },
    },
  )
}

export default test

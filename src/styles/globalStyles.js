import { LineWeight } from "@mui/icons-material";
import { GlobalStyles } from "@mui/material";

const globalStyles = (theme) => ({
  // Global font family
  "*": {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif !important',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
  },
  
  "html, body": {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    fontFeatureSettings: '"cv02", "cv03", "cv04", "cv11"', // Inter font features for better readability
  },

  // Scrollbar styles
  "*::-webkit-scrollbar": {
    width: "8px",
    height: "8px",
  },
  "*::-webkit-scrollbar-track": {
    backgroundColor: theme.palette.mode === "dark" ? "#2d2d2d" : "#f1f1f1",
    borderRadius: "4px",
  },
  "*::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#555" : "#c1c1c1",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: theme.palette.mode === "dark" ? "#777" : "#a8a8a8",
    },
  },

  // Custom animations
  "@keyframes fadeIn": {
    from: { opacity: 0, transform: "translateY(10px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },

  "@keyframes slideIn": {
    from: { transform: "translateX(-100%)" },
    to: { transform: "translateX(0)" },
  },

  "@keyframes pulse": {
    "0%": { transform: "scale(1)" },
    "50%": { transform: "scale(1.05)" },
    "100%": { transform: "scale(1)" },
  },

  // Utility classes
  ".fade-in": {
    animation: "fadeIn 0.3s ease-in-out",
  },

  ".slide-in": {
    animation: "slideIn 0.3s ease-in-out",
  },

  ".pulse": {
    animation: "pulse 2s infinite",
  },

  // Custom focus styles
  ".custom-focus:focus-visible": {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: "2px",
    borderRadius: "4px",
  },

  // Responsive text
  ".responsive-text": {
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.875rem",
    },
  },

  // Custom shadows
  ".shadow-sm": {
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  },

  ".shadow-md": {
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  },

  ".shadow-lg": {
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  },
});

const AppGlobalStyles = () => <GlobalStyles styles={globalStyles} />;

export default AppGlobalStyles;

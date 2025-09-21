import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useAppStore } from "./store";
import { lightTheme, darkTheme } from "./styles/theme";
import AppGlobalStyles from "./styles/globalStyles";
import MainLayout from "./components/common/Layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import EcommerceDashboard from "./pages/EcommerceDashboard";

function App() {
  const { darkMode } = useAppStore();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <AppGlobalStyles />
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Navigate to="/default" replace />} />
            <Route path="/default" element={<EcommerceDashboard />} />
            <Route path="/ecommerce" element={<Dashboard />} />
            <Route path="/orders" element={<Dashboard />} />
            <Route
              path="/projects"
              element={
                <div style={{ padding: "2rem" }}>
                  Projects Page - Coming Soon
                </div>
              }
            />
            <Route
              path="/courses"
              element={
                <div style={{ padding: "2rem" }}>
                  Courses Page - Coming Soon
                </div>
              }
            />
            <Route
              path="/profile/*"
              element={
                <div style={{ padding: "2rem" }}>
                  Profile Page - Coming Soon
                </div>
              }
            />
            <Route
              path="/account"
              element={
                <div style={{ padding: "2rem" }}>
                  Account Page - Coming Soon
                </div>
              }
            />
            <Route
              path="/corporate"
              element={
                <div style={{ padding: "2rem" }}>
                  Corporate Page - Coming Soon
                </div>
              }
            />
            <Route
              path="/blog"
              element={
                <div style={{ padding: "2rem" }}>Blog Page - Coming Soon</div>
              }
            />
            <Route
              path="/social"
              element={
                <div style={{ padding: "2rem" }}>Social Page - Coming Soon</div>
              }
            />
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;

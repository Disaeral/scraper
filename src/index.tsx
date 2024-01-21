import { render } from "react-dom";
import { createRoot } from "react-dom/client";
import React from "react";
import { App } from "app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { SidebarToggleProvider } from "widgets/SidebarToggleBtn/ui/SidebarToggleProvider";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <SidebarToggleProvider>
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
  </SidebarToggleProvider>
);

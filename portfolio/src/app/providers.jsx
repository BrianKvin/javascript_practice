"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <ThemeProvider attributes="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}

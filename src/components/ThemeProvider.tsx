
"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider defaultTheme="light" enableSystem={true} attribute="class">
      {children}
    </NextThemesProvider>
  );
}

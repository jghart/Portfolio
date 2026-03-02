"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// We extract the props directly from the provider component itself
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
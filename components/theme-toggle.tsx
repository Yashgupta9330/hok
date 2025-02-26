"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative p-2 rounded-full bg-primary/10 backdrop-blur-sm hover:bg-primary/20 transition-colors flex items-center justify-center"
    >
      <Sun className={`h-[1.5rem] w-[1.5rem] transition-all transform ${theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"} text-primary`} />
      <Moon className={`h-[1.5rem] w-[1.5rem] transition-all transform absolute ${theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"} text-primary`} />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

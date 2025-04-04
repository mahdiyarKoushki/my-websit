"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext({
  theme: "light",
  setTheme: () => null,
  themes: ["light", "dark"],
})

export const useTheme = () => useContext(ThemeContext)

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light")
  const themes = ["light", "dark"]

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    // Apply theme-specific classes
    document.documentElement.className = ""
    document.documentElement.classList.add(savedTheme)
  }, [])

  const changeTheme = (newTheme) => {
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    // Apply theme-specific classes
    document.documentElement.className = ""
    document.documentElement.classList.add(newTheme)
  }

  return <ThemeContext.Provider value={{ theme, setTheme: changeTheme, themes }}>{children}</ThemeContext.Provider>
}


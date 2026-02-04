"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className={cn("w-9 h-9", className)} /> // Placeholder to prevent layout shift
    }

    return (
        <div className={cn("flex items-center gap-1 border border-input rounded-full p-1 bg-background", className)}>
            <button
                onClick={() => setTheme("light")}
                className={cn(
                    "p-1.5 rounded-full cursor-pointer transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    resolvedTheme === "light" ? "bg-muted text-foreground" : "text-muted-foreground"
                )}
                aria-label="Light mode"
            >
                <Sun className="h-4 w-4" />
            </button>
            <button
                onClick={() => setTheme("dark")}
                className={cn(
                    "p-1.5 rounded-full cursor-pointer transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    resolvedTheme === "dark" ? "bg-muted text-foreground" : "text-muted-foreground"
                )}
                aria-label="Dark mode"
            >
                <Moon className="h-4 w-4" />
            </button>
        </div>
    )
}

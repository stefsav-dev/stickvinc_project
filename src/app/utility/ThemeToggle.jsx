import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

export default function ThemeToggleItem() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenuItem
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex items-center gap-2"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
      <span>Change Theme</span>
    </DropdownMenuItem>
  )
}

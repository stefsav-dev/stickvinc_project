"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, Settings, FileText, Folder, ChevronDown, ChevronLeft, ChevronRight, PersonStanding } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { DialogTitle } from "@radix-ui/react-dialog"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { User, CreditCard, Bell, LogOut } from "lucide-react"
import ThemeToggleItem from "@/app/utility/ThemeToggle"

export default function SidebarAdmin() {
  const [open, setOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false) 

  const MenuItems = [
    { name: "Dashboard", href: "/admin", icon: <FileText className="h-4 w-4" /> },
    { name: "Projects", href: "/admin/projects", icon: <Folder className="h-4 w-4" /> },
    { name: "Settings", href: "/admin/settings", icon: <Settings className="h-4 w-4" /> },
    { name: "Data Mahasiswa", href: "/admin/data_mahasiswa", icon: <PersonStanding className="h-4 w-4"/>}
  ]

  return (
    <div className="flex">
      {/* Sidebar (Desktop) */}
      <aside
        className={`hidden md:flex md:flex-col h-screen border-r bg-background transition-all duration-300 ${
          collapsed ? "w-16" : "w-64"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          {!collapsed && (
            <div>
              <span className="font-bold text-lg">Acme Inc</span>
              <p className="text-xs text-muted-foreground">Enterprise</p>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Menu */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {MenuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted"
            >
              {item.icon}
              {!collapsed && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>

        <Separator />

        {/* User Profile */}
            <div className="p-4">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full justify-start gap-2">
                    <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    {!collapsed && (
                    <div className="flex-1 text-left">
                        <p className="text-sm font-medium">shadcn</p>
                        <p className="text-xs text-muted-foreground">m@example.com</p>
                    </div>
                    )}
                    {/* <ChevronFirst className="h-4 w-4 ml-auto" /> */}
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem>
                    <User className="h-4 w-4 mr-2" /> Account
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <CreditCard className="h-4 w-4 mr-2" /> Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Bell className="h-4 w-4 mr-2" /> Notifications
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <ThemeToggleItem />
                </DropdownMenuItem>

                <DropdownMenuItem>
                    <LogOut className="h-4 w-4 mr-2" /> Logout
                </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            </div>

      </aside>

      {/* Mobile Menu */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <VisuallyHidden>
            <DialogTitle>Sidebar Menu</DialogTitle>
          </VisuallyHidden>
          <div className="flex flex-col h-full">
            <div className="p-4 font-bold text-lg border-b">Acme Inc</div>
            <nav className="flex-1 p-4">
              {MenuItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </nav>
            <Separator />
            <div className="flex items-center p-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div className="ml-2">
                <p className="text-sm font-medium">shadcn</p>
                <p className="text-xs text-muted-foreground">m@example.com</p>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

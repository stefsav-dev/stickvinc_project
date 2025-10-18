"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon, Menu } from "lucide-react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

const components = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
        "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

export function NavigationMenuHome() {
  return (
     <header className="fixed top-0 left-0 w-full border-b bg-white/80 dark:bg-gray-950/80 backdrop-blur z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          MyApp
        </Link>

        {/* Desktop Navbar */}
        <div className="hidden md:flex justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 p-4 md:w-[300px]">
                    <ListItem href="/about" title="About">
                      Learn more about us.
                    </ListItem>
                    <ListItem href="/services" title="Services">
                      Explore what we offer.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Docs</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 p-4 md:w-[300px]">
                    <ListItem href="/docs/getting-started" title="Getting Started">
                      Quick start guide.
                    </ListItem>
                    <ListItem href="/docs/components" title="Components">
                      UI Components collection.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                        >
                        <Link href="#hero-3">Hero 3</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                        >
                            <Link href="/auth/login">Login</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu> 
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                    <Link href="/" className="text-lg font-medium">
                    Home
                    </Link>
                    <Link href="/about" className="text-lg font-medium">
                    About
                    </Link>
                    <Link href="/services" className="text-lg font-medium">
                    Services
                    </Link>
                    <Link href="/docs" className="text-lg font-medium">
                    Docs
                    </Link>
                    <Link href="/contact" className="text-lg font-medium">
                    Contact
                    </Link>
                </nav>
                </SheetContent>
            </Sheet>
            </div>
        </div>
        </header>
    )
}

    function ListItem({
    title,
    children,
    href,
    ...props
    }) {
    return (
        <li {...props}>
        <NavigationMenuLink asChild>
            <Link href={href}>
            <div className="text-sm leading-none font-medium">{title}</div>
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                {children}
            </p>
            </Link>
        </NavigationMenuLink>
        </li>
    )
    }

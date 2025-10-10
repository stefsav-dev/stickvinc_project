"use client"

import SidebarMahasiswa from "./SidebarMahasiswa";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

// Komponen Breadcrumb yang terpisah
function BreadcrumbNavigation() {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const generateBreadcrumbs = () => {
      if (!pathname) return [];
      
      const paths = pathname.split('/').filter(path => path);
      
      const breadcrumbs = [
        {
          href: "/",
          label: "Home",
          isCurrent: false
        }
      ];

      let accumulatedPath = "";
      
      paths.forEach((path, index) => {
        accumulatedPath += `/${path}`;
        const isLast = index === paths.length - 1;
        
        const labelMap = {
          "mahasiswa": "Mahasiswa",
          "pembayaran_perkuliahan": "Pembayaran Perkuliahan",
          "profile": "Profile",
          "dashboard": "Dashboard"
        };

        breadcrumbs.push({
          href: accumulatedPath,
          label: labelMap[path] || path.charAt(0).toUpperCase() + path.slice(1),
          isCurrent: isLast
        });
      });

      return breadcrumbs;
    };

    setBreadcrumbs(generateBreadcrumbs());
  }, [pathname]);

  if (breadcrumbs.length === 0) {
    return null;
  }

  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground">
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={breadcrumb.href} className="flex items-center">
          {index > 0 && <ChevronRight className="h-4 w-4 mx-1" />}
          {breadcrumb.isCurrent ? (
            <span className="font-medium text-foreground">
              {breadcrumb.label}
            </span>
          ) : (
            <Link 
              href={breadcrumb.href}
              className="hover:text-foreground transition-colors"
            >
              {breadcrumb.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}

// Komponen Header yang terpisah
function Header() {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const getCurrentPageTitle = () => {
      if (!pathname) return "Dashboard";
      
      const paths = pathname.split('/').filter(path => path);
      const lastPath = paths[paths.length - 1];
      
      const titleMap = {
        "mahasiswa": "Mahasiswa",
        "pembayaran_perkuliahan": "Pembayaran Perkuliahan",
        "profile": "Profile",
        "dashboard": "Dashboard"
      };

      return titleMap[lastPath] || "Dashboard";
    };

    setCurrentPage(getCurrentPageTitle());
  }, [pathname]);

  return (
    <header className="flex items-center justify-between p-6 border-b">
      <div className="flex-1">
        <h1 className="text-2xl font-bold">{currentPage}</h1>
      </div>
      <BreadcrumbNavigation />
    </header>
  );
}

export default function MahasiswaLayout({ children }) {
  return (
    <div className="flex">
      <SidebarMahasiswa />
      
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
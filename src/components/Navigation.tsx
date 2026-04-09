"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Image as ImageIcon, CreditCard, Sparkles, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Portfolio", href: "/portfolio", icon: ImageIcon },
  { name: "Create", href: "/generate", icon: Sparkles },
  { name: "Pricing", href: "/pricing", icon: CreditCard },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 top-0 flex h-full w-64 flex-col border-r bg-sidebar p-6 text-sidebar-foreground transition-all duration-300 ease-in-out z-50">
      <div className="mb-10 flex items-center gap-2 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
          <Home size={24} />
        </div>
        <span className="text-xl font-bold tracking-tight">Aura Interior</span>
      </div>

      <div className="flex flex-col gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-sidebar-accent hover:text-sidebar-accent-foreground group",
                isActive ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm" : "opacity-70 hover:opacity-100"
              )}
            >
              <Icon size={20} className={cn("transition-transform group-hover:scale-110", isActive && "text-primary")} />
              {item.name}
              {isActive && (
                <div className="ml-auto h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              )}
            </Link>
          );
        })}
      </div>

      <div className="mt-auto flex flex-col gap-4">
        <div className="rounded-xl bg-sidebar-accent/50 p-4 border border-sidebar-border">
          <p className="text-xs font-semibold uppercase tracking-wider opacity-50 mb-2">Usage</p>
          <div className="h-2 w-full rounded-full bg-sidebar-border overflow-hidden">
            <div className="h-full w-2/3 bg-primary" />
          </div>
          <p className="mt-2 text-xs opacity-70">8 / 12 generations left</p>
        </div>
        
        <div className="flex items-center gap-3 px-2">
          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
            JD
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">John Doe</span>
            <span className="text-[10px] opacity-50">Pro Member</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

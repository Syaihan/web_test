"use client";

import {
  LayoutGrid,
  ClipboardList,
  Package,
  Users,
  BarChart3,
  Settings,
  Store,
} from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

const navItems = [
  { label: "Ringkasan", icon: LayoutGrid },
  { label: "Pesanan", icon: ClipboardList },
  { label: "Produk", icon: Package },
  { label: "Pelanggan", icon: Users },
  { label: "Laporan", icon: BarChart3 },
  { label: "Pengaturan", icon: Settings },
];

export default function Sidebar() {
  const [active, setActive] = useState("Ringkasan");

  return (
    <aside className="hidden md:flex w-60 shrink-0 flex-col border-r border-ink-border bg-ink-surface">
      <div className="flex items-center gap-2 px-6 py-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-brass/15 text-brass">
          <Store size={18} />
        </div>
        <span className="font-display text-lg font-600 tracking-tight text-ivory">
          Kedai
        </span>
      </div>

      <div className="tear-line mx-6" />

      <nav className="flex-1 px-3 py-4">
        <ul className="space-y-0.5">
          {navItems.map(({ label, icon: Icon }) => {
            const isActive = active === label;
            return (
              <li key={label}>
                <button
                  onClick={() => setActive(label)}
                  className={clsx(
                    "group relative flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors",
                    isActive
                      ? "bg-ink-raised text-ivory"
                      : "text-ivory-muted hover:bg-ink-raised/60 hover:text-ivory"
                  )}
                >
                  {isActive && (
                    <span className="absolute left-0 top-1/2 h-5 w-[2px] -translate-y-1/2 rounded-full bg-brass" />
                  )}
                  <Icon size={17} strokeWidth={1.75} />
                  <span>{label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-ink-border px-6 py-4">
        <p className="font-mono text-[11px] uppercase tracking-wider text-ivory-faint">
          Kedai Admin v1.0
        </p>
      </div>
    </aside>
  );
}

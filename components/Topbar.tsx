"use client";

import { Search, Bell } from "lucide-react";

export default function Topbar() {
  const today = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <header className="flex items-center justify-between border-b border-ink-border bg-ink px-6 py-4 md:px-8">
      <div>
        <h1 className="font-display text-2xl font-600 text-ivory">Ringkasan</h1>
        <p className="font-mono text-xs uppercase tracking-wider text-ivory-faint">
          {today}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative hidden sm:block">
          <Search
            size={15}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ivory-faint"
          />
          <input
            type="text"
            placeholder="Cari pesanan, produk..."
            className="w-56 rounded-md border border-ink-border bg-ink-surface py-2 pl-9 pr-3 text-sm text-ivory placeholder:text-ivory-faint focus:border-brass/50"
          />
        </div>

        <button
          aria-label="Notifikasi"
          className="relative flex h-9 w-9 items-center justify-center rounded-md border border-ink-border bg-ink-surface text-ivory-muted hover:text-ivory"
        >
          <Bell size={16} />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-coral" />
        </button>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brass/15 font-mono text-xs font-600 text-brass">
          AD
        </div>
      </div>
    </header>
  );
}

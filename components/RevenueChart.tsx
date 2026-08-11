"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { revenueSeries } from "@/lib/data";

export default function RevenueChart() {
  return (
    <div className="rounded-lg border border-ink-border bg-ink-surface p-5">
      <div className="mb-1 flex items-center justify-between">
        <div>
          <h2 className="font-display text-lg font-600 text-ivory">Pendapatan 30 Hari</h2>
          <p className="text-xs text-ivory-muted">dalam juta rupiah</p>
        </div>
      </div>
      <div className="tear-line my-3" />
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueSeries} margin={{ top: 10, right: 8, left: -16, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D4A24C" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#D4A24C" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 6" stroke="#232C38" vertical={false} />
            <XAxis
              dataKey="day"
              stroke="#5B6472"
              fontSize={11}
              fontFamily="var(--font-plex-mono)"
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#5B6472"
              fontSize={11}
              fontFamily="var(--font-plex-mono)"
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `${v}jt`}
            />
            <Tooltip
              contentStyle={{
                background: "#1A222C",
                border: "1px solid #232C38",
                borderRadius: 8,
                fontFamily: "var(--font-plex-mono)",
                fontSize: 12,
                color: "#E6E8EB",
              }}
              formatter={(value: number) => [`Rp ${value.toFixed(1)} juta`, "Pendapatan"]}
              labelFormatter={(label) => `Hari ke-${label}`}
            />
            <Area
              type="monotone"
              dataKey="pendapatan"
              stroke="#D4A24C"
              strokeWidth={2}
              fill="url(#revenueFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

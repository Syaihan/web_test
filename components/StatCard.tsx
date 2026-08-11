import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import clsx from "clsx";

type StatCardProps = {
  label: string;
  value: string;
  delta: string;
  positive: boolean;
};

export default function StatCard({ label, value, delta, positive }: StatCardProps) {
  return (
    <div className="rounded-lg border border-ink-border bg-ink-surface p-5">
      <p className="text-xs uppercase tracking-wider text-ivory-muted">{label}</p>
      <div className="tear-line my-3" />
      <div className="flex items-end justify-between">
        <span className="font-mono text-2xl font-600 text-ivory">{value}</span>
        <span
          className={clsx(
            "flex items-center gap-0.5 rounded-full border px-2 py-0.5 font-mono text-[11px]",
            positive
              ? "border-teal/30 bg-teal/10 text-teal"
              : "border-coral/30 bg-coral/10 text-coral"
          )}
        >
          {positive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
          {delta}
        </span>
      </div>
    </div>
  );
}

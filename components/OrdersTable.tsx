import { orders, statusStyles, formatIDR } from "@/lib/data";

export default function OrdersTable() {
  return (
    <div className="rounded-lg border border-ink-border bg-ink-surface p-5">
      <div className="mb-1 flex items-center justify-between">
        <h2 className="font-display text-lg font-600 text-ivory">Pesanan Terbaru</h2>
        <button className="font-mono text-xs uppercase tracking-wider text-brass hover:text-brass-soft">
          Lihat semua →
        </button>
      </div>
      <div className="tear-line my-3" />

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-xs uppercase tracking-wider text-ivory-faint">
              <th className="py-2 pr-4 font-normal">ID</th>
              <th className="py-2 pr-4 font-normal">Pelanggan</th>
              <th className="py-2 pr-4 font-normal">Produk</th>
              <th className="py-2 pr-4 font-normal">Jumlah</th>
              <th className="py-2 pr-4 font-normal">Status</th>
              <th className="py-2 pr-0 font-normal text-right">Tanggal</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-t border-ink-border/60 text-ivory-muted hover:bg-ink-raised/40"
              >
                <td className="py-3 pr-4 font-mono text-xs text-ivory">{order.id}</td>
                <td className="py-3 pr-4">{order.customer}</td>
                <td className="py-3 pr-4">{order.product}</td>
                <td className="py-3 pr-4 font-mono text-ivory">{formatIDR(order.amount)}</td>
                <td className="py-3 pr-4">
                  <span
                    className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${statusStyles[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-3 pr-0 text-right font-mono text-xs">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

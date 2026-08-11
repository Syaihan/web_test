import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import StatCard from "@/components/StatCard";
import RevenueChart from "@/components/RevenueChart";
import OrdersTable from "@/components/OrdersTable";
import { stats } from "@/lib/data";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-ink">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <main className="space-y-6 px-6 py-6 md:px-8">
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </section>

          <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>
            <div className="rounded-lg border border-ink-border bg-ink-surface p-5">
              <h2 className="font-display text-lg font-600 text-ivory">Produk Terlaris</h2>
              <div className="tear-line my-3" />
              <ul className="space-y-4">
                {[
                  { name: "Kopi Arabika 250g", share: 82 },
                  { name: "Teh Melati Premium", share: 64 },
                  { name: "Madu Hutan 350ml", share: 51 },
                  { name: "Paket Sarapan Sehat", share: 38 },
                ].map((product) => (
                  <li key={product.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="text-ivory-muted">{product.name}</span>
                      <span className="font-mono text-xs text-ivory-faint">{product.share}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-border">
                      <div
                        className="h-full rounded-full bg-teal"
                        style={{ width: `${product.share}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <OrdersTable />
          </section>
        </main>
      </div>
    </div>
  );
}

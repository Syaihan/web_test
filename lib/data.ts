export type OrderStatus = "Selesai" | "Diproses" | "Dikirim" | "Dibatalkan";

export type Order = {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: OrderStatus;
  date: string;
};

export const orders: Order[] = [
  { id: "KD-10482", customer: "Rina Wulandari", product: "Kopi Arabika 250g", amount: 145000, status: "Selesai", date: "10 Agu" },
  { id: "KD-10481", customer: "Bayu Setiawan", product: "Teh Melati Premium", amount: 87000, status: "Diproses", date: "10 Agu" },
  { id: "KD-10480", customer: "Citra Ayu", product: "Gula Aren Cair 500ml", amount: 62000, status: "Dikirim", date: "10 Agu" },
  { id: "KD-10479", customer: "Dedi Kurniawan", product: "Paket Sarapan Sehat", amount: 210000, status: "Selesai", date: "09 Agu" },
  { id: "KD-10478", customer: "Eka Putri", product: "Kopi Robusta 1kg", amount: 178000, status: "Dibatalkan", date: "09 Agu" },
  { id: "KD-10477", customer: "Fajar Nugroho", product: "Madu Hutan 350ml", amount: 95000, status: "Selesai", date: "09 Agu" },
  { id: "KD-10476", customer: "Gita Permata", product: "Teh Hijau Organik", amount: 73000, status: "Diproses", date: "08 Agu" },
];

export const statusStyles: Record<OrderStatus, string> = {
  Selesai: "bg-teal/10 text-teal border-teal/30",
  Diproses: "bg-brass/10 text-brass border-brass/30",
  Dikirim: "bg-ivory/10 text-ivory border-ivory/20",
  Dibatalkan: "bg-coral/10 text-coral border-coral/30",
};

export const revenueSeries = [
  { day: "1", pendapatan: 3.2 },
  { day: "4", pendapatan: 3.8 },
  { day: "7", pendapatan: 3.5 },
  { day: "10", pendapatan: 4.6 },
  { day: "13", pendapatan: 4.1 },
  { day: "16", pendapatan: 5.0 },
  { day: "19", pendapatan: 4.7 },
  { day: "22", pendapatan: 5.6 },
  { day: "25", pendapatan: 5.3 },
  { day: "28", pendapatan: 6.1 },
  { day: "30", pendapatan: 6.4 },
];

export const stats = [
  { label: "Pendapatan Bulan Ini", value: "Rp 64.200.000", delta: "+12,4%", positive: true },
  { label: "Pesanan Baru", value: "312", delta: "+8,1%", positive: true },
  { label: "Pelanggan Aktif", value: "1.284", delta: "+3,6%", positive: true },
  { label: "Tingkat Pembatalan", value: "2,1%", delta: "-0,4%", positive: true },
];

export function formatIDR(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

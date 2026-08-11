# Kedai — Admin Dashboard

Dashboard admin (Next.js 14 App Router + TypeScript + Tailwind CSS) untuk memantau pendapatan, pesanan, dan produk toko. Siap langsung di-push dan di-deploy ke Vercel.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Struktur proyek

```
app/                 # App Router: layout, page, global CSS
components/           # Sidebar, Topbar, StatCard, RevenueChart, OrdersTable
lib/data.ts           # Data contoh (mock) — ganti dengan API/database Anda
```

Ganti isi `lib/data.ts` dengan fetch ke API atau database Anda saat sudah siap produksi.

## Deploy ke Vercel

### Opsi A — lewat GitHub (disarankan)

1. Buat repo baru di GitHub, lalu push folder ini:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Kedai admin dashboard"
   git branch -M main
   git remote add origin https://github.com/USERNAME/NAMA-REPO.git
   git push -u origin main
   ```
2. Buka https://vercel.com/new, pilih repo tersebut, lalu klik **Deploy**.
   Vercel otomatis mendeteksi ini sebagai proyek Next.js — tidak perlu konfigurasi tambahan.

### Opsi B — lewat Vercel CLI (tanpa GitHub)

```bash
npm install -g vercel
vercel login
vercel        # deploy preview
vercel --prod # deploy ke production
```

Kedua opsi tidak memerlukan file konfigurasi tambahan (`vercel.json`) karena Next.js didukung secara native oleh Vercel.

## Teknologi

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Recharts (grafik pendapatan)
- lucide-react (ikon)

Nama: Haniyah Fitri Ansory
NPM : 233510253
Kelas : 4E

# BerryMart - Aplikasi Toko Buah (Vue.js)

BerryMart adalah aplikasi toko buah sederhana berbasis Vue.js. Aplikasi ini merupakan implementasi dari studi kasus fiktif pemesanan buah, dilengkapi dengan fitur katalog, detail produk, keranjang belanja, histori pesanan, login & register, serta integrasi API menggunakan `json-server`.


# Studi Kasus
Aplikasi toko buah online yang memungkinkan pengguna untuk:
- Melihat katalog buah
- Melihat detail buah
- Menambahkan buah ke keranjang
- Checkout dan menyimpan histori pesanan
- Melihat daftar riwayat pembelian

# Fitur dan Menu
| Menu | Fitur |
|------|-------|
| `/` | Landing Page |
| `/login` | Halaman Login |
| `/register` | Halaman Registrasi |
| `/catalog` | Menampilkan daftar buah dari API |
| `/fruit/:id` | Detail buah berdasarkan ID |
| `/cart` | Halaman keranjang, bisa menghapus & checkout |
| `/history` | Melihat riwayat pembelian |


# Struktur Routing (`vue-router`)
Menggunakan Vue Router dengan `createWebHistory()`. Semua path sudah dikaitkan dengan komponen yang sesuai. Route dinamis juga digunakan (`/fruit/:id`).


# API dengan JSON-Server

Aplikasi menggunakan `json-server` untuk menyimpan data buah dan histori
# Jalankan perintah ini di terminal
npx json-server --watch db.json --port 3000

Contoh Endpoint:
* `GET /fruits` – Ambil daftar buah
* `GET /fruits/:id` – Detail buah
* `POST /history` – Simpan histori checkout
* `GET /history` – Lihat histori checkout

# State Management (Pinia)
Aplikasi menggunakan Pinia untuk:

* Menyimpan data buah (store: `fruitStore`)
* Menyimpan isi keranjang (store: `cartStore`)
* Menyediakan actions seperti `addToCart`, `removeFromCart`, `clearCart`, `totalPrice`

# Unit Test (Vitest)

Unit test ditulis untuk `cartStore` menggunakan `Vitest` dan `@vue/test-utils` untuk memastikan:

* Menambahkan item ke keranjang berhasil
* Menghapus item dari keranjang berhasil
* Menghitung total harga dengan benar

# Cara Menjalankan Proyek
# Install dependencies
npm install

# Jalankan json-server (di terminal terpisah)
npx json-server --watch db.json --port 3000

# Jalankan project Vue
npm run dev

# LokusWP 🤝 Midtrans

 <Badge text="Goal"/> Dengan Integrasi ini anda dapat menerima pembayaran melalui xendit dan dapat terkonfirmasi secara otomatis.


## 🛒 Mendapatkan Add-on Xendit
Dapatkan add-on xendit dengan cara membelinya di [link berikut ini](https://lokuswp.id/plugins/midtrans/) \
jika  pernah membeli, anda dapat melihatnya di halaman [member area](https://member.lokuswp.id).


## 👣 Langkah-Langkah Integrasi

Ikut langkah - langkah integrasi berikut ini dengan cermat

### 1. Cara Menginstall dan Aktifasi

Buka Menu **Marketplace** lalu pilih integrasi **LokusWP 🤝 Midtrans**
1. anda akan diarahkan ke halaman member
2. salin kode lisensi di member area -> license
3. tempel kode lisensi di halaman input lisensi
4. klik icon download

### 2. Melakukan Pendaftaran Akun Xendit

Anda dapat melakukan pendaftaran melalui halaman ini [Daftar Akun Midtrans](https://member.lokuswp.id).


::: warning IMPORTANT
Jangan lupa untuk melakukan verifikasi akun sebagai usaha perorangan atau perseroan/yayasan, dan juga mengaktifkan metode pembayaran yang ingin digunakan. karena ini membutuhkan waktu.
:::

### 3. Membuat dan Memasang API Key

Anda perlu membuat API Key terlebih dahulu untuk dapat menghubungkan integrasi ini.
1. buka halaman [API Key](https://dashboard.xendit.co/settings/developers#api-keys)
2. klik button **Generate secret key** > masukan nama api key name
3. Pilih Permssion Money-in : Write
4. Lalu klik tombol **Generate key** dan masukan password anda, lalu salin api key tadi ke
5. masuk ke **wp-admin** website anda
6. pilih menu LokusWP > Payments > Integration > Xendit > API Key
7. lalu simpan

### 4. Mengambil dan Mengatur Webhook

Anda perlu mengatur webhook callback agar konfirmasi data berjalan secara otomatis.
1. buka halaman webhook di wp-admin
2. lalu salin alamat webhook
3. setelah itu buka halaman pengaturan webhook di [Xendit](https://dashboard.xendit.co/settings/developers#callbacks)
4. scroll ke bawah, lalu pilih di menu **Callback URL**
5. setelah itu pilih **Invoices**
6. lalu masukan url dari halaman wp-admin ke bagian Invoice Paid
7. setelah itu klik tombol **save and test**

## ✅ Pengujian

Setelah selelai melakukan pengaturan, anda dapat melakukan pengujian transaksi dan juga konfirmasi
secara otomatis, apakah sudah berjalan dengan sesuai.

### 1. Pembayaran

Klik Opsi Production jika akun anda sudah diverifikasi dan siap menerima uang asli\
Mode Non Production digunakan untuk keperluan pengujian saja.

Pilih Metode Pembayaran Xendit, Lalu Klik Payment
Setelah itu KLik Bayar dengan Xendit
Lalu lakukan pembayaran

### 2. Konfirmasi Otomatis

Jika anda sudah membayar, dan status transaksi otomatis berubah, maka
situs anda sudah siap.

Tambahan **
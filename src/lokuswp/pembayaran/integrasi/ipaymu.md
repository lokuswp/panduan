
# LokusWP x iPaymu

 <Badge text="Goal"/> Dengan Integrasi ini anda dapat menerima pembayaran melalui iPaymu dan dapat terkonfirmasi secara otomatis.


## 🛒 Mendapatkan Add-on iPaymu
Dapatkan add-on iPaymu dengan cara membelinya di [link berikut ini](https://lokuswp.id/plugins/ipaymu/) \
jika  pernah membeli, anda dapat melihatnya di halaman [member area](https://member.lokuswp.id).


## 👣 Langkah-Langkah Integrasi

Ikut langkah - langkah integrasi berikut ini dengan cermat

### 1. Cara Menginstall dan Aktifasi

Buka Menu **Marketplace** lalu pilih integrasi **LokusWP 🤝 iPaymu**
1. anda akan diarahkan ke halaman member
2. salin kode lisensi di member area -> license
3. tempel kode lisensi di halaman input lisensi
4. klik icon download

### 2. Melakukan Pendaftaran Akun iPaymu

Anda dapat melakukan pendaftaran melalui halaman ini [Daftar Akun iPaymu](https://my.ipaymu.com/members/register).


::: warning IMPORTANT
Jangan lupa untuk melakukan verifikasi akun sebagai usaha perorangan atau perseroan/yayasan, dan juga mengaktifkan metode pembayaran yang ingin digunakan. karena ini membutuhkan waktu.
:::

### 3. Membuat dan Memasang API Key

Anda perlu mendapatkan **Virtual Account** dan **Api Key** terlebih dahulu untuk dapat menghubungkan integrasi ini.
1. buka halaman [API Integrasi](https://my.ipaymu.com/integration)
   ![](assets/ipaymu-config.gif)
2. masuk ke **wp-admin** website anda
3. pilih menu LokusWP > Payments > Integration > iPaymu > Paste Virtual Account & Api Key pada field yang disediakan
   ![](assets/ipaymu-settings.gif)
4. lalu simpan


## ✅ Pengujian

Untuk melakukan pengujian pada iPaymu, dapat menggunakan akun sandbox iPaymu yang bisa didapat dengan daftar pada [Halaman Ini](https://sandbox.ipaymu.com/members/register).
Jika sudah mendaftar, anda bisa langsung login dan mendapatkan **Virtual Account** dan **Api Key** Sandbox iPaymu.
Setelah selelai melakukan pengaturan, anda dapat melakukan pengujian transaksi dan juga konfirmasi
secara otomatis, apakah sudah berjalan dengan sesuai.
### 1. Pembayaran

Klik Opsi Production jika akun anda sudah diverifikasi dan siap menerima uang asli\
Mode Non Production digunakan untuk keperluan pengujian saja.

Pilih Metode Pembayaran iPaymu, Lalu Klik Payment
Setelah itu KLik Bayar dengan iPaymu
Lalu lakukan pembayaran

### 2. Konfirmasi Otomatis

Jika anda sudah membayar, dan status transaksi otomatis berubah, maka
situs anda sudah siap.
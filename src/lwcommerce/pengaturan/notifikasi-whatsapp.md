
# Notifikasi Whatsapp

Untuk pengaturan notifikasi whatsapp anda dapat memasang add-onnya terlebih dahulu dari marketplace.
Jika sudah terinstall, maka akan muncul menu Notifikasi Whatsapp di LokusWP dan Template Notifikasi di app plugin.

### Menginstall Addon Notifikasi



::: warning
Notifikasi Whatsapp ini memerlukan biaya tambahan, anda perlu membayar ke vendor yang anda gunakan integrasi,
addon ini hanya untuk menyambungkan Whatsapp Gateway dengan sistem LokusWP.
:::

Kamu bisa menginstall addon notifikasi whatsapp Gratis yang tersedia di Marketplace, untuk konfigurasi integrasi notifikasi
kamu bica baca di Pengaturan Notifikasi LokusWP.

### Melakukan Konfigurasi Notifikasi

Kamu bisa mengatur konigurasi notifikasi, berikut ini adalah contoh konfigurasi notifikasi whatsapp dengan OneSender



Untuk panduan lebih lengkap kamu bisa baca [Apa itu Notifikasi]( ../../lokuswp/notifikasi/)

### Variabel Tag Notifikasi
dengan menggunakan variabel tag ini, kamu bisa membuat template notifikasi menjadi dinamis dan lebih personal
berikut ini tag yang sudah bisa kamu gunakan


| Tag Variable                      &#12288;          | Contoh Output            | Keterangan                                               |
|:----------------------------------------------------|:-------------------------|----------------------------------------------------------|
| &#123;&#8232;&#123;name&#125;&#8232;&#125;          | Budi                     | Menampilkan Nama Pemesan                                 |
| &#123;&#8232;&#123;status_text&#125;&#8232;&#125;   | Belum di Bayar           | Menampilkan Status Pesanan                               |
| &#123;&#8232;&#123;total&#125;&#8232;&#125;         | Rp 45.000                | Menampilkan Total Pesanan dengan Format                  |
| &#123;&#8232;&#123;order_id&#125;&#8232;&#125;      | 65                       | Menampilan ID Pesanan                                    |
| &#123;&#8232;&#123;pickup&#125;&#8232;&#125;        | Jam 14:21 WIB            | Menampilkan Waktu Ambil Pesanan jika Tersedia            |
| &#123;&#8232;&#123;pickup_list&#125;&#8232;&#125;   |                          | Menampilkan Daftar Pesanan dan Jumlah yang harus diambil |
| &#123;&#8232;&#123;reason&#125;&#8232;&#125;        | Stok Habis               | Menampikan Alasan Pesanan Dibatalkan                     |
| &#123;&#8232;&#123;courier&#125;&#8232;&#125;       | JNE OKE ( Rp 18.000 )    | Menampikan Kurir yang Dipilih                            |
| &#123;&#8232;&#123;tracking_link&#125;&#8232;&#125; | https://jne/ref=12441    | Menampikan Link untuk Tracking Kurir                     |
| &#123;&#8232;&#123;summary&#125;&#8232;&#125;       |                          | Menampilkan Daftar Pesanan                               |
| &#123;&#8232;&#123;payment&#125;&#8232;&#125;       |                          | Menampilkan Informasi Rekening / Cara Bayar              |
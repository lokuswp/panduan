
# Webhook

 <Badge text="Goal"/> Dengan mengatur Notifikasi Email dengan benar, sistem dapat mengirimkan notifikasi email kepada user setiap ada transaksi yang masuk tanpa masuk ke folder spam.

 ### Mengenal dan Konfigurasi SMTP 

 SMTP merupakan di analogikan sebagai kurir pengiriman. tanpa adanya SMTP yang bagus maka notifikasi tidak akan sampai ke penerima, oleh karena itu
 SMTP sangat penting bagi notifikasi email untuk memastikan email tidak masuk folder spam. dengan begitu anda bisa berinteraksi langsung dengan user melalui sistem secara otomatis.

 Baca : [Cara Konfigurasi Notifikasi Email di WordPress dengan SMTP Google ](https://lokuswp.id/blog/cara-konfigurasi-notifikasi-email-dengan-smtp-google-di-wordpress/)
 #### Pengujian Notifikasi Email terlebih dahulu

Sebelum mengatur SMTP, ada baiknya kita mengetes terlebih dahulu apakah, website WordPress kita dapat mengirimkan notifikasi email
jika sudah dapat mengirimkan email tanpa masuk spam, anda tidak perlu melakukan konfigurasi\
( Fitur Ini biasa terdapat di paket hosting yang lumayan mahal )

Baca : [Cara menguji Notifikasi Email di WordPress ](https://lokuswp.id/blog/cara-menguji-notifikasi-email-di-wordpress/)
 #### Konfigurasi SMTP Google di LokusWP
 
 Agar Notifikasi Email anda tidak masuk kespam, salah satu SMTP yang gratis adalah dari google.
 anda bisa mengatur SMTP tanpa plugin tambahan. caranya adalah sebagai berikut ::

1. Buka **wp-admin** 
2. Pilih **LokusWP > Notifikasi > Email > Settings**
3. Lalu Masukan Data SMTP Google

   - SMTP Host : Diisi dengan `smtp.gmail.com`
   - SMTP Port : Diisi dengan `456`
   - SMTP Username : Diisi dengan alamat gmail anda `lokuswp@gmail.com`
   - SMTP Password : Diisi dengan passsword aplikasi gmail. 
   [Cara membuat password aplikasi gmail ](https://lokuswp.id/blog/cara-membuat-password-aplikasi-gmail/)
   - SMTP Encyrption : Pilih `TLS`
 
 ### Mengatur Template Notifikasi

 Q : Saya ingin mengatur template notifikasi, dimana saya bisa mengatur ?\
 A : Untuk Editor notifikasi email anda perlu menggunakan versi Pro dari setiap app\
 seperti **LWCommerce Pro** atau **LWDonation Pro**

 Notifikasi Email dibuat untuk masing-masing app dan juga status.
 Dengan addon tersebut anda bisa mudah merubah template notifikasi tanpa perlu memahami coding.

# Rencana Pekerjaan Website XII-H

- [ ] Menyiapkan berkas sumber website yang akan dimasukkan ke arsip ZIP.
- [ ] Membuat dan memverifikasi arsip ZIP versi website yang dipulihkan.
- [x] Mengubah kartu wali kelas menjadi frame foto persegi panjang dengan area gambar utama.
- [x] Memindahkan background video/gelap Galeri ke scene Anggota.
- [x] Mengganti Galeri dengan background Anggota yang lebih ringan.
- [x] Memperhalus transisi scroll, frame, dan kemunculan scene tanpa menambah beban berat.
- [x] Memvalidasi pertukaran scene pada desktop dan ponsel.
- [x] Mengurangi beban animasi canvas dan efek dekoratif pada perangkat mobile.
- [x] Menunda pemutaran video Galeri hingga bagian Galeri mendekati viewport.
- [x] Mengubah elemen utama kartu wali kelas menjadi kotak tanpa bentuk lingkaran.
- [x] Memvalidasi kartu wali kelas dan responsivitas setelah optimasi.
- [x] Mengganti tagline hero menjadi “Lebih baik, dalam kebersamaan.”
- [x] Memastikan tagline baru terbaca di desktop dan ponsel.
- [x] Menyalin dan mendaftarkan video pengguna sebagai aset Galeri.
- [x] Memasang video sebagai background dengan autoplay, muted, loop, dan playsinline.
- [x] Menambahkan overlay kontras agar frame Galeri tetap terbaca di atas video.
- [x] Memvalidasi video background pada desktop dan ponsel.
- [x] Mengubah kartu wali kelas menjadi kartu kotak yang siap diisi foto dan nama.
- [x] Memastikan grid anggota tiga per baris benar-benar terbaca pada ponsel tanpa potongan.
- [x] Membangun ulang Galeri sebagai scene foto yang tidak menggunakan kartu anggota atau frame lama.
- [x] Membangun ulang Karya sebagai scene proyek yang tidak menggunakan kubus lama.
- [x] Memvalidasi seluruh halaman pada viewport ponsel sebelum membagikan revisi.
- [x] Mengubah kartu anggota menjadi grid tiga per baris dengan arah scroll vertikal.
- [x] Membangun scene anggota bergaya arsip-orbit sebagai background pertama.
- [x] Membangun scene galeri bergaya ruang foto imersif sebagai background kedua.
- [x] Membangun scene karya bergaya lab proyek sebagai background ketiga.
- [x] Menerapkan transisi 3D berbeda antar scene dan memvalidasi pada ponsel.
- [x] Mempertahankan hero yang disukai dan menghapus copy tambahan yang tidak diminta setelahnya.
- [x] Mengganti orbit kartu dan komposisi rumit dengan struktur konten yang lebih bersih.
- [x] Membangun background 3D interaktif yang terlihat melalui canvas pada tiap bagian utama.
- [x] Memastikan kartu, galeri, dan karya tidak mengalami overflow atau tumpang tindih pada ponsel.
- [x] Memvalidasi ulang desktop dan ponsel sebelum membagikan revisi bersih.
- [x] Mempertahankan hero homepage yang telah disetujui tanpa mengubah komposisi utamanya.
- [x] Mengganti susunan kartu anggota yang seragam menjadi orbit 3D dengan beberapa ukuran dan kedalaman berbeda.
- [x] Mengubah galeri serta karya menjadi adegan 3D bertingkat, bukan panel datar.
- [x] Merancang ulang layout ponsel dengan arah komposisi, ukuran kartu, dan interaksi yang khusus mobile.
- [x] Memvalidasi ulang kedalaman visual desktop dan mobile sebelum membagikan revisi.
- [x] Menulis arah desain dan struktur konten awal untuk website kelas XII-H.
- [x] Menyiapkan logo elight.universe dan identitas XII-H || MANSA dari gambar acuan pengguna.
- [x] Menggunakan PNG logo resmi elight.universe sebagai aset utama pada navigasi dan hero.
- [x] Membangun hero serta latar 3D interaktif dengan palet navy, putih, dan emas.
- [x] Menampilkan tagline “Lebih baik” dan penanda “Part of: @man1nganjuk”.
- [x] Menyiapkan kerangka kartu anggota, galeri, dan karya tanpa data pribadi fiktif.
- [x] Memvalidasi versi desktop dan ponsel, lalu membagikan tautan preview.

## Impor revisi pengguna

- [x] Memeriksa struktur ZIP revisi pengguna sebelum mengganti berkas aktif.
- [x] Menerapkan revisi pengguna ke proyek dan memulihkan dependensi yang dibutuhkan.
- [x] Menjalankan serta memvalidasi preview pada desktop dan ponsel.

## Revisi tampilan anggota mobile

- [x] Mengubah grid Anggota pada ponsel menjadi dua kartu per baris dengan area foto lebih besar.
- [x] Memperkuat kedalaman visual kartu melalui layer, bayangan, dan transformasi ringan yang responsif.
- [x] Mendokumentasikan scene video kenangan bersuara sebagai rencana penutup setelah Karya tanpa membangunnya sekarang.
- [x] Memvalidasi komposisi Anggota terbaru pada ponsel dan desktop.

## Perbaikan regresi mobile

- [x] Mengurangi tinggi kartu Anggota dan mengunci dua kolom yang proporsional.
- [x] Menghapus layer dan transformasi yang menambah beban render ketika menggulir.
- [x] Memastikan placeholder foto tetap tajam tanpa efek visual berat.
- [x] Memvalidasi build, responsivitas, dan performa tampilan setelah perbaikan.

## Data nama anggota

- [x] Menyusun data 26 nama anggota sesuai urutan yang diberikan pengguna.
- [x] Menampilkan nama pada kartu dan layer detail profil tanpa membuat data pribadi tambahan.
- [x] Memvalidasi urutan serta keterbacaan nama pada desktop dan ponsel.

## Publikasi GitHub dan Vercel

- [x] Memeriksa koneksi GitHub dan Vercel serta menyiapkan konfigurasi deployment.
- [x] Menyiapkan URL aset portabel agar logo, gambar, dan video dapat dimuat pada deployment Vercel.
- [x] Membuat repositori GitHub publik dan mengunggah source website terbaru.
- [x] Menautkan repositori ke Vercel lalu membuat deployment produksi.
- [x] Memperbaiki konfigurasi build Vercel agar menayangkan hasil Vite, bukan berkas server.
- [x] Memverifikasi URL publik dan mendokumentasikan alur deploy ulang otomatis.

## Reveal dan parallax scroll

- [x] Meninjau struktur scene dan efek scroll yang ada untuk menghindari animasi berbasis scroll event berat.
- [x] Menambahkan kemunculan scene serta elemen konten bertahap saat memasuki viewport.
- [x] Menerapkan parallax ringan berbasis transform pada elemen dekoratif dan frame.
- [x] Mengurangi atau mematikan gerakan non-esensial pada ponsel serta mode reduced motion.
- [x] Memvalidasi kelancaran dan urutan animasi pada desktop maupun ponsel.

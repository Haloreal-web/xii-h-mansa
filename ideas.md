# Aethera — Spesifikasi Desain Acuan

## Acuan yang harus direplikasi

Landing page ini adalah pengalaman satu layar yang berpusat pada footage video keemasan dengan tangan yang meraih. Spesifikasi pada `pasted_content.txt` adalah **ground truth**: implementasi tidak akan menambahkan seksi konten, kartu pemasaran, atau ornamen yang mengubah hierarki visual yang telah ditentukan.

## Pendekatan Terpilih: Humanist Cinematic Minimalism

**Gerakan desain.** Landing page menggabungkan *cinematic editorial minimalism* dengan bahasa antarmuka *warm glassmorphism*. Kesannya tenang, manusiawi, dan penuh pertimbangan; teknologi menjadi latar bagi empati, bukan sebaliknya.

**Prinsip inti.** Pertama, video keemasan adalah pusat komposisi dan teks hanya mendukungnya. Kedua, hierarki dibangun dengan ruang kosong vertikal serta tipografi mono ringan, bukan dengan kartu atau blok dekoratif. Ketiga, semua lapisan UI menggunakan kontras yang terukur agar konten tetap terbaca di atas footage yang berubah. Keempat, motion harus terasa lambat, terarah, dan dapat dimatikan secara penuh oleh preferensi gerak pengguna.

**Filosofi warna.** Near-black bernuansa cokelat menciptakan kedalaman tanpa aura teknologi dingin, ivory memberi kejelasan teks, dan amber menyatu dengan cahaya footage sebagai aksen yang hemat. Nuansa ini menyampaikan kecerdasan yang dekat dan kontemplatif.

**Paradigma tata letak.** Komposisi vertikal sinematik: navigasi melayang di atas, blok pesan berpusat tinggi untuk menyisakan dua pertiga bawah bagi gesture tangan, dan sinyal penilaian kecil dikunci di dasar bingkai. Rel navigasi menjadi satu-satunya elemen struktural horizontal yang dominan.

**Elemen khas.** Kapsul kaca navigasi dengan separator titik mikro, bintang putih yang terpotong pada chip amber persegi, dan scrim berlapis yang menggelapkan pita atas–bawah tanpa menutup cahaya tengah adalah motif yang diulang secara konsisten.

**Interaksi.** Hover memberikan penguatan paling minimal: warna link meningkat, tombol terdorong dua piksel, dan kontrol merespons dengan cepat. Menu mobile terbuka sebagai lembar gelap transparan yang menjaga fokus dan ruang visual.

**Animasi.** Elemen konten masuk sekali melalui `settle` dengan perpindahan vertikal 20px dan kurva `cubic-bezier(0.22, 1, 0.36, 1)`. Video hanya melakukan fade-in ketika dapat diputar. Saat `prefers-reduced-motion` aktif, animasi masuk dimatikan dan video dibekukan pada frame pertama.

**Sistem tipografi.** DM Mono 300 menjadi display tunggal untuk headline demi nuansa presisi dan kelembutan; Hanken Grotesk 400–500 digunakan pada semua teks UI dan isi. Kerning headline rapat dan ukuran navigasi kecil dengan kapital berjarak untuk kesan label editorial.

**Esensi brand.** Aethera adalah AI kolaboratif bagi orang yang ingin berpikir, membuat, dan membangun dengan empati—berbeda melalui ketenangan manusiawi, bukan sensasi teknologi. Kepribadiannya: **kontemplatif, hangat, presisi**.

**Suara brand.** Headline terdengar hening dan meyakinkan, CTA bersifat mengundang, sedangkan microcopy bersih tanpa jargon. Contoh: “A New Kind of Intelligence” dan “See How It Works.”

**Wordmark & mark.** Nama Aethera tampil sebagai label huruf kapital kecil dengan tracking lebar, bukan logo generik. Mark pendukung adalah bentuk abstrak dua garis yang mendekat seperti gesture tangan, dalam ivory dengan aksen amber.

**Warna brand khas.** **Aethera Amber — #e8a33d**, berupa emas hangat yang muncul secara terbatas pada indikator mutu dan aksen cahaya.

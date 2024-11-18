# grass-v2

Repository ini dibuat untuk Grass Airdrop Season 2.

## Cara install

1. Clone repository:

   ```bash
   git clone https://github.com/IKSANNURPADILLAH/grass-v2.git
   ```

2. Pindah ke direktory project:

   ```bash
   cd grass-v2
   ```

3. Install dependensi:

   ```bash
   npm install
   ```

## Panduan penggunaan

1. Dapatkan akses token dengan cara mengunjungi website grass:

   - Kunjungi https://app.getgrass.io/dashboard
   - Klik kanan lalu `inspect element`.
   - Pergi ke tab `console`.
   - Salin dan tempel command berikut lalu Enter:

     ```javascript
     localStorage.accessToken
     ```

   - Salin dan tempel accessToken ke grass-v2/src/Bot.js


2. Jika anda ingin menggunakan proxy, silahkan masukkan ke `proxy.txt` dengan format berikut:

   ```text
   http://username:password@hostname:port
   socks5://username:password@hostname:port
   ```

4. Untuk menjalankan `bot`, Salin command di terminal:

   ```bash
   npm start
   ```

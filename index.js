const express = require("express");

const app = express();
app.use(() => console.log("Server berjalan ... ")); // buat fungsi baru

app.listen(4000); // Buat app server saya berjalan di port 4000. Lalu jalankan node index.js. buka localhost:4000 maka line 4 berjalan

// Lalu instal nodemon, npm install nodemon
// skrg ngerun server tinggal npx nodemon index.js (pakai nodemon bisa auto reload)
// Tambah   "start" : "nodemon index.js" di package.json. Jadi kalau ngerun tinggal npm start beda sprti line 9

// git init -> git status -> buat .gitignore node_modules -> git remote add origin https://github.com/achmadrizky486/MERN-Api.git -> git add . -> commit seperti biasa, trus push sync

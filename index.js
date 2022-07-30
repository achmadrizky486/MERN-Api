const express = require("express");
const app = express();
const router = express.Router();

router.use("/products", (req, res, next) => {
  res.json({
    name: "Achmad Rizky",
    emai: "achmad@gmail.com",
  });
  next(); //next biar lanjut ke method yg lain jika ada
}); //buat endpoint '/products' yg pny default parameter req, res, next

router.use("/price", (req, res, next) => {
  res.json({
    price: 3000,
  });
  next();
});
router.delete("/cust", (req, res, next) => {
  //Router spesifik
  res.json({
    title: "popoppopop",
  });
  next();
});

app.use("/", router); //ketika di run, dia akan nyari sesuai router
app.listen(4000); // Buat app server saya berjalan di port 4000. Lalu jalankan node index.js. buka localhost:4000 maka line 4 berjalan

// Lalu instal nodemon, npm install nodemon
// skrg ngerun server tinggal npx nodemon index.js (pakai nodemon bisa auto reload)
// Tambah   "start" : "nodemon index.js" di package.json. Jadi kalau ngerun tinggal npm start beda sprti line 9
// git init -> git status -> buat .gitignore node_modules -> git remote add origin https://github.com/achmadrizky486/MERN-Api.git -> git add . -> commit seperti biasa, trus push sync

//Buat router di line 3

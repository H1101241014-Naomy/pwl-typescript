// --- CARA LAMA (ES5) ---
var nama = "Budi";
function sapaES5(user) {
    return "Halo " + user + ", selamat datang!";
}
console.log(sapaES5(nama));

nama= "Putra";
console.log(sapaES5(nama));

// // --- CARA MODERN (ES6) ---
// 1. Gunakan const/let
const namaModern= "Imam";
// namaModern = "Putra"; // Ini akan menghasilkan error karena namaModern adalah const dan tidak bisa diubah nilainya.
// 2. Gunakan Arrow Function & Template Literals
const sapaES6 = (user) => `Halo ${user}, selamat datang di era modern!`;

console.log(sapaES6(namaModern));

// // //Ubahlah fungsi matematika perkalian(a, b) dari format function biasa menjadi Arrow Function.
// // const perkalian = (a, b) => a * b;
// // console.log(perkalian(5, 5)); 

// const orangbule = "Alexander";
// console.log(orangbule);
// orangnama = Putra;

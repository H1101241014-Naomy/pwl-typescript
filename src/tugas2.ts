interface Buku {
  judul: string;
  pengarang: string;
  tahunTerbit: number;
  tersedia: boolean;
}

let buku1: Buku = {
  judul: "Hujan",
  pengarang: "Tere Liye",
  tahunTerbit: 2020,
  tersedia: true
};

let buku2: Buku = {
  judul: "Tentang Kamu",
  pengarang: "Tere Liye",
  tahunTerbit: 2021,
  tersedia: false
};

console.log(buku1);
console.log(buku2);
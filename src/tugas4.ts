function sapaan(input: string | number): string {
    if (typeof input === "string") {
        return `Halo, ${input}!`;
    } else {
        return `Umur ${input} tahun`;
    }
}

let sapaanNama = sapaan("Kayla");
let sapaanUmur = sapaan(20);

console.log(sapaanNama);
console.log(sapaanUmur);
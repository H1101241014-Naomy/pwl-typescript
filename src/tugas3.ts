class Lingkaran {
    jarijari: number;

    constructor(jarijaribaru: number) {
        this.jarijari = jarijaribaru;
    }

    hitungLuas(): number {
        return Math.PI * this.jarijari*this.jarijari;
}
}

let lingkaran1 = new Lingkaran(7);
let luasLingkaran1 = lingkaran1.hitungLuas();
console.log(`Luas lingkaran1 (jari-jari ${lingkaran1.jarijari}) adalah ${luasLingkaran1} cm^2`);

let lingkaran2 = new Lingkaran(10);
let luasLingkaran2 = lingkaran2.hitungLuas();
console.log(`Luas lingkaran2 (jari-jari ${lingkaran2.jarijari}) adalah ${luasLingkaran2} cm^2`);

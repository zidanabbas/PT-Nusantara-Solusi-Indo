// Menghitung Diskon

function menghitungDiskon(hargaProduk) {
  const totalHarga = hargaProduk.reduce((a, b) => a + b, 0);
  let diskon = 0;
  let bonus = "";

  if (totalHarga > 70000 && totalHarga <= 200000) {
    diskon = totalHarga * 0.05;
    bonus = "Topi";
  } else if (totalHarga > 200000 && totalHarga <= 400000) {
    diskon = totalHarga * 0.07;
    bonus = "Payung";
  } else if (totalHarga > 400000) {
    diskon = totalHarga * 0.1;
    bonus = "Ransel";
  }

  const hargaAkhir = totalHarga - diskon;

  console.log(`Total Harga : ${totalHarga}`);
  console.log(`Diskon : ${diskon}`);
  console.log(`Bonus : ${bonus}`);
  console.log(`Harga Akhir : ${hargaAkhir}`);
}

const hargaProduk1 = [2000, 5000, 100000];
menghitungDiskon(hargaProduk1);

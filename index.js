//SOAL PROGRAMMING NUSANTARA DUTA SOLUSINDO

//Menghitung Persentase Pertumbuhan
function solution(tinggiAwal, lamaHari, persentasePertumbuhan) {
  const pertumbuhanDecimal = persentasePertumbuhan / 100;

  for (let hari = 1; hari <= lamaHari; hari++) {
    tinggiAwal += tinggiAwal * pertumbuhanDecimal;
  }

  return tinggiAwal;
}

const tinggiAkhir = solution(200, 5, 5);
console.log("Tinggi pohon setelah 5 hari: " + tinggiAkhir + " cm");

function calculateTreeHeight(tinggiAwal, hari, perteumbuhanHarian) {
  let height = tinggiAwal;
  for (let day = 1; day <= hari; day++) {
    height += height * (perteumbuhanHarian / 100);
  }
  return height;
}

const tinggiAwal = 250;
const hari = 2;
const growthRate = 2;

const finalHeight = calculateTreeHeight(tinggiAwal, hari, growthRate);
console.log(`Tinggi pohon setelah ${hari} hari adalah ${finalHeight} cm.`);

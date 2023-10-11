// Membuat pyramid
function createPyramid(height) {
  for (let i = 1; i <= height; i++) {
    let spaces = " ".repeat(height - i);
    let stars = "*".repeat(2 * i - 1);
    if (i === 1) {
      console.log(spaces + "*" + spaces);
    } else {
      console.log(spaces + "/" + stars + "\\" + spaces);
    }
  }
}

function solution(height) {
  if (height <= 0) {
    console.log("Tinggi harus lebih dari 0.");
  } else {
    createPyramid(height);
  }
}

const tinggi = 3;
createPyramid(tinggi);

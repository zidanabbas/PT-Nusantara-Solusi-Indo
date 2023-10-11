// Menghilangkan karakter duplikat
function removeDuplicateCharacters(kata) {
  const kataArray = kata.split("");
  const foundChars = {};
  const uniqueChars = [];

  for (let char of kataArray) {
    if (!foundChars[char]) {
      uniqueChars.push(char);
      foundChars[char] = true;
    }
  }

  const result = uniqueChars.join("");
  return result;
}

function solution(kata) {
  const result = removeDuplicateCharacters(kata);
  console.log(result);
}

const kata1 = "imagination";
solution(kata1);

const kata2 = "association";
solution(kata2);

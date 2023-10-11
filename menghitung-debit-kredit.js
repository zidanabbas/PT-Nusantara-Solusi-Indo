// Menghitung Debit dan Kredit
function calculateJournalBalance(noAkun, nominal) {
  let totalDebit = 0;
  let totalKredit = 0;

  for (let i = 0; i < noAkun.length; i++) {
    const akun = noAkun[i];
    const [debit, kredit] = nominal[i].split("-");

    totalDebit += parseInt(debit);
    totalKredit += parseInt(kredit);

    console.log(`#${akun} # Debit: ${debit} # Kredit: ${kredit}`);
  }

  let balanceStatus = "Not Balance";
  if (totalDebit === totalKredit) {
    balanceStatus = "Balance";
  }

  console.log(
    `# Total # Debit: ${totalDebit} # Kredit: ${totalKredit} (${balanceStatus})`
  );
}

// Akun 1
const noAkun1 = [111, 211, 201];
const nominal1 = ["200000-0", "0-50000", "0-150000"];
calculateJournalBalance(noAkun1, nominal1);

console.log("-------------------------------");
// Akun 2
const noAkun2 = [111, 201];
const nominal2 = ["100000-0", "0-120000"];
calculateJournalBalance(noAkun2, nominal2);

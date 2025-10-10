function convert(s, numRows) {
  if (numRows === 1 || s.length <= numRows) return s;

  const rows = Array.from({ length: Math.min(numRows, s.length) }, () => "");
  let currentRow = 0;
  let goingDown = false;

  for (let c of s) {
    rows[currentRow] += c;
    if (currentRow === 0 || currentRow === numRows - 1) goingDown = !goingDown;
    currentRow += goingDown ? 1 : -1;
  }

  return rows.join("");
}

// Example usage:
console.log(convert("PAYPALISHIRING", 3)); // Output: "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)); // Output: "PINALSIGYAHRPI"
console.log(convert("A", 1));              // Output: "A"

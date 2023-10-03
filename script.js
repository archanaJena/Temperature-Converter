let cel = document.getElementById("cel");
let fah = document.getElementById("fah");
let c, f, ce, fe;

cel.addEventListener("input", function () {
  c = this.value;
  f = (c * 9) / 5 + 32;
  if (!Number.isInteger(f)) {
    f = f.toFixed(4);
  }
  fah.value = f;
  ce.innerHTML = `(${c}°C × 9/5) + 32 =${f}°F`;
});
let f1, c1;
fah.addEventListener("input", function () {
  f1 = this.value;
  c1 = ((f1 - 32) * 5) / 9;
  if (!Number.isInteger(c1)) {
    c1 = c1.toFixed(4);
  }
  cel.value = c1;
  fe.innerHTML = `(${f1}°F − 32) × 5/9 = ${c1}°C`;
});

cel.addEventListener("click", function () {
  ce = document.getElementById("for");
  ce.innerHTML = "(0°C × 9/5) + 32 = 32°F";
});

fah.addEventListener("click", function () {
  fe = document.getElementById("for");
  fe.innerHTML = "(32°F − 32) × 5/9 = 0°C";
});

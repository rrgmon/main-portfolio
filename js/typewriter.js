const text = ["Fun", "Minimal", "Boring"];
let index = 0;
let count = 0;
let currentText = "";
let letter = "";

(function type() {
  if (index === text.length) {
    index = 0;
  }
  currentText = text[index];
  letter = currentText.slice(0, ++count);

  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    index++;
    count = 0;
  }

  setTimeout(type, 600);
})();

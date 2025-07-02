//your code here
const inputBox = document.getElementById("evaluatedText");
const countDisplay = document.getElementById("letterCount");

inputBox.addEventListener("input", function () {
  countDisplay.textContent = inputBox.value.length;
});

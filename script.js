const md = window.markdownit();
const input = document.getElementById("input");
const output = document.getElementById("output");

input.addEventListener("input", function() {
  const result = md.render(input.value);
  output.innerHTML = result;
});
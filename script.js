const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

function updatePreview() {
  const markdown = editor.value;
  const html = marked.parse(markdown);
  preview.innerHTML = html;
}

editor.addEventListener('input', updatePreview);

updatePreview();

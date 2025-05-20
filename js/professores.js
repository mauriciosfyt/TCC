document.querySelector('.add-btn').addEventListener('click', () => {
  const lista = document.getElementById('professores-lista');

  const novoForm = document.createElement('div');
  novoForm.classList.add('form-group');

  novoForm.innerHTML = `
    <label class="image-upload-box">
      <input type="file" accept="image/*" onchange="previewImage(this)">
      <span>📷</span>
    </label>
    <label>Nome:</label>
    <input type="text" placeholder="Nome do Professor" />
    <label>Número:</label>
    <input type="text" placeholder="Telefone" />
    <div class="btn-group">
      <button class="edit-btn">Editar</button>
      <button class="delete-btn">Excluir</button>
    </div>
  `;

  
  novoForm.querySelector('.edit-btn').addEventListener('click', () => {
    const inputs = novoForm.querySelectorAll('input[type="text"]');
    inputs.forEach(input => input.disabled = !input.disabled);
  });

  novoForm.querySelector('.delete-btn').addEventListener('click', () => {
    if (confirm('Tem certeza que deseja excluir este professor?')) {
      novoForm.remove();
    }
  });

  lista.appendChild(novoForm);
});

function previewImage(input) {
  const file = input.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    const img = document.createElement('img');
    img.src = e.target.result;

    const box = input.parentElement;
    box.innerHTML = '';
    box.appendChild(img);
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}

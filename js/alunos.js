function mostrarFormulario() {
  document.getElementById('form-cadastro').classList.remove('hidden');
}

function cadastrarAluno() {
  const nome = document.getElementById('nomeCadastro');
  const email = document.getElementById('emailCadastro');
  const senha = document.getElementById('senhaCadastro');

  if (!nome.value || !email.value || !senha.value) {
    alert('Preencha todos os campos!');
    return;
  }

  alert('Aluno cadastrado com sucesso!');

 
  nome.value = '';
  email.value = '';
  senha.value = '';

  
  document.getElementById('form-cadastro').classList.add('hidden');
}

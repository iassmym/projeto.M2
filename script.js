
// class Usuario {
//     constructor(nome, email, idade) {
//         this.nome = nome;
//         this.email = email;
//         this.idade = idade;
//     }

//     exibir() {
//         return `${this.nome} - ${this.email} - ${this.idade} anos`;
//     }
// }

// // Array para armazenar os usuários
// let usuarios = [];

// // Manipulando o formulário de cadastro
// document.getElementById('formCadastro').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Obtendo os valores dos inputs
//     const nome = document.getElementById('nome').value;
//     const email = document.getElementById('email').value;
//     const idade = document.getElementById('idade').value;

//     // Criando um novo usuário e adicionando ao array
//     const novoUsuario = new Usuario(nome, email, idade);
//     usuarios.push(novoUsuario);

//     // Limpar os campos do formulário
//     document.getElementById('formCadastro').reset();

//     // Atualizando a lista de usuários exibida
//     atualizarListaUsuarios();
// });

// // Função para atualizar a lista de usuários na tela
// function atualizarListaUsuarios() {
//     const listaUsuarios = document.getElementById('listaUsuarios');
//     listaUsuarios.innerHTML = ''; // Limpa a lista antes de atualizar

//     // Adicionando os usuários cadastrados na lista
//     usuarios.forEach((usuario, index) => {
//         const li = document.createElement('li');
//         li.textContent = usuario.exibir();

//         // Botões de editar e excluir
//         const btnEditar = document.createElement('button');
//         btnEditar.textContent = 'edite algo';
//         btnEditar.classList.add('edit');
//         btnEditar.onclick = () => editarUsuario(index);

//         const btnExcluir = document.createElement('button');
//         btnExcluir.textContent = 'excluir informação';
//         btnExcluir.classList.add('delete');
//         btnExcluir.onclick = () => excluirUsuario(index);

//         li.appendChild(btnEditar);
//         li.appendChild(btnExcluir);
//         listaUsuarios.appendChild(li);
//     });
// }

// // Função para editar um usuário
// function editarUsuario(index) {
//     const usuario = usuarios[index];
//     const nome = prompt('altere nome de usuario:', usuario.nome);
//     const email = prompt('altere o e-mail:', usuario.email);
//     const idade = prompt('altere a idade:', usuario.idade);

//     if (nome && email && idade) {
//         usuario.nome = nome;
//         usuario.email = email;
//         usuario.idade = idade;
//     }

//     atualizarListaUsuarios(); // Atualiza a lista após a edição
// }

// // Função para excluir um usuário
// function excluirUsuario(index) {
//     const confirmacao = confirm('deseja excluir essas informaçoes?');
//     if (confirmacao) {
//         usuarios.splice(index, 1);
//         atualizarListaUsuarios(); // Atualiza a lista após a exclusão
//     }
// }

// Classe para criar um cliente
class Cliente {
    constructor(nome, email, idade, foto) {
        this.nome = nome;
        this.email = email;
        this.idade = idade;
        this.foto = foto;
    }

    exibir() {
        return `${this.nome} - ${this.email} - ${this.idade} anos`;
    }
}

// Array para armazenar os clientes
let clientes = [];

// Manipulando o formulário de cadastro
document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtendo os valores dos inputs
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;
    const foto = document.getElementById('foto').files[0];

    if (!foto) {
        alert("adicione uma foto ao nosso cadastro");
        return;
    }

    // Criando um novo cliente e adicionando ao array
    const reader = new FileReader();
    reader.onloadend = function () {
        const novoCliente = new Cliente(nome, email, idade, reader.result);
        clientes.push(novoCliente);

        // Limpar os campos do formulário
        document.getElementById('formCadastro').reset();

        // Atualizando a lista de clientes exibida
        atualizarListaClientes();
    };
    reader.readAsDataURL(foto);
});

// Função para atualizar a lista de clientes na tela
function atualizarListaClientes() {
    const listaClientes = document.getElementById('listaClientes');
    listaClientes.innerHTML = ''; // Limpa a lista antes de atualizar

    // Adicionando os clientes cadastrados na lista
    clientes.forEach((cliente, index) => {
        const li = document.createElement('li');
        
        // Criando o elemento de imagem
        const img = document.createElement('img');
        img.src = cliente.foto;
        
        const texto = document.createElement('span');
        texto.textContent = cliente.exibir();

        // Botões de editar e excluir
        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'edite algo';
        btnEditar.classList.add('edit');
        btnEditar.onclick = () => editarCliente(index);

        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'exclua algo';
        btnExcluir.classList.add('delete');
        btnExcluir.onclick = () => excluirCliente(index);

        li.appendChild(img);
        li.appendChild(texto);
        li.appendChild(btnEditar);
        li.appendChild(btnExcluir);
        listaClientes.appendChild(li);
    });
}

// Função para editar um cliente
function editarCliente(index) {
    const cliente = clientes[index];

    const nome = prompt('renomeiar informação:', cliente.nome);
    const email = prompt('altere seu email:', cliente.email);
    const idade = prompt('altere sua idade:', cliente.idade);
    const foto = prompt('adicione novo link para trocar de imagem:', cliente.foto);

    if (nome && email && idade) {
        cliente.nome = nome;
        cliente.email = email;
        cliente.idade = idade;
        if (foto) {
            cliente.foto = foto;
        }
    }

    atualizarListaClientes(); // Atualiza a lista após a edição
}

// Função para excluir um cliente
function excluirCliente(index) {
    const confirmacao = confirm('deseja mesmo excluir esse cadastro?');
    if (confirmacao) {
        clientes.splice(index, 1);
        atualizarListaClientes(); // Atualiza a lista após a exclusão
    }
}

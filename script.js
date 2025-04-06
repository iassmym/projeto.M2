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

let clientes = [];

document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;
    const foto = document.getElementById('foto').files[0];

    if (!foto) {
        alert("adicione uma foto ao nosso cadastro");
        return;
    }

    const reader = new FileReader();
    reader.onloadend = function () {
        const novoCliente = new Cliente(nome, email, idade, reader.result);
        clientes.push(novoCliente);
        document.getElementById('formCadastro').reset();
        atualizarListaClientes();
    };
    reader.readAsDataURL(foto);
});

function atualizarListaClientes() {
    const listaClientes = document.getElementById('listaClientes');
    listaClientes.innerHTML = ''; 
    clientes.forEach((cliente, index) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = cliente.foto;
        
        const texto = document.createElement('span');
        texto.textContent = cliente.exibir();
        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'edite';
        btnEditar.classList.add('edit');
        btnEditar.onclick = () => editarCliente(index);

        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'exclua';
        btnExcluir.classList.add('delete');
        btnExcluir.onclick = () => excluirCliente(index);

        li.appendChild(img);
        li.appendChild(texto);
        li.appendChild(btnEditar);
        li.appendChild(btnExcluir);
        listaClientes.appendChild(li);
    });
}
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

    atualizarListaClientes(); 
}

function excluirCliente(index) {
    const confirmacao = confirm('deseja mesmo excluir esse cadastro?');
    if (confirmacao) {
        clientes.splice(index, 1);
        atualizarListaClientes(); 
    }
}

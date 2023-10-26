var tarefaInput = document.getElementById("tarefaInput");
var listaDeTarefas = [];
var imprimirLista = document.getElementById("imprimirLista");

const adicionarTarefa = function () {
    var tarefa = {
        descricao: tarefaInput.value,
        concluida: "não concluído"
    };

    if (tarefaInput.value == '') {
        alert("Digite uma tarefa!");
        document.getElementById("tarefaInput").focus();
        return
    }
    listaDeTarefas.push(tarefa);
    console.log(listaDeTarefas);

    tarefaInput.value = '';

    var container = document.createElement("div");
    var tarefaDaLista = document.createElement("li");
    var checkbox = document.createElement("input");
    var btn = document.createElement("input");
    var edit = document.createElement("input");
    tarefaDaLista.textContent = tarefa.descricao;

    checkbox.type = 'checkbox';
    btn.type = 'button';
    btn.value = 'Remover Tarefa';
    edit.type = 'button';
    edit.value = 'Editar Tarefa';

    container.appendChild(tarefaDaLista).appendChild(checkbox);
    container.appendChild(btn);
    container.appendChild(edit);

    imprimirLista.appendChild(container);


    checkbox.addEventListener("click", function () {
        if (checkbox.checked) {
            tarefaDaLista.classList.add("tarefaConcluida");
            tarefaDaLista.classList.remove("tarefaNaoConcluida");
            tarefa.concluida = "concluída";

        } else {
            tarefaDaLista.classList.remove("tarefaConcluida");
            tarefaDaLista.classList.add("tarefaNaoConcluida");
            tarefa.concluida = "não concluída";
        }

    });

    btn.addEventListener("click", function () {
        var index = listaDeTarefas.indexOf(tarefaDaLista);

        listaDeTarefas.splice(index, 1);

        container.remove();
        console.log(listaDeTarefas);
    });


    edit.addEventListener('click', function () {
        var editorTarefa = document.createElement("input");
        editorTarefa.type = 'text';
        editorTarefa.value = tarefa.descricao;
        tarefaDaLista.textContent = '';
        container.appendChild(editorTarefa);

        editorTarefa.addEventListener('blur', function () {
            tarefa.descricao = editorTarefa.value;
            tarefaDaLista.textContent = tarefa.descricao;
            editorTarefa.remove();
            tarefaDaLista.appendChild(checkbox);
            return
        })
        return
    });
}

document.getElementById("button").addEventListener("click", adicionarTarefa);

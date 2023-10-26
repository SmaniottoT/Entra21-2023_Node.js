// 1) Filter: Dado um array de números, crie uma função que use o método filter para retornar 
// um novo array contendo apenas os números pares.
let array1 = [0, 2, 3, 5, 8, 12, 14, 15, 18, 22, 25];

let even = array1.filter((number) => number % 2 === 0);

console.log(even);

// 2) Map: Dado um array de nomes, crie uma função que use o método map para criar um novo array
//  que contenha os nomes em maísculas.

let array2 = ['Tamires', 'Leonardo', 'Maísa', 'Vilmar'];

let upperCase = array2.map((maiuscula) => maiuscula.toUpperCase());
console.log(upperCase);

// 3) ForEach: Dado um array de objetos que representam pessoas, crie uma função que usa um método 
// forEach para imprimir no console uma mensagem de saudação personalizada para cada pessoa.

let array3 = ['Tamires', 'Leonardo', 'Maísa', 'Vilmar'];

let saudacao = array3.forEach(function (pessoa) {
    console.log(`${pessoa}, bem vindo!`);
});

// 4) Filter e Map (com strings): Dado um array de strings que representam nomes de frutas, crie uma função 
// que use o método filter para retornar apenas as frutas que começam com a letra M, 
// depois use o método map para criar um novo array contendo essas frutas em maiúsculas.

let array4 = ['Pêra', 'Uva', 'Maçã', 'Manga', 'Morango', 'Melão', 'Limão'];

let frutasM = array4.filter((nomes) => nomes.charAt(0) === 'm' || nomes.charAt(0) === 'M');
console.log(frutasM);

let frutasMmais = frutasM.map((frutas) => frutas.toUpperCase());

console.log(frutasMmais);

// 5) Dada uma lista de notas de alunos, implemente funções utilizando map, filtes e forEach para realizar as seguintes tarefas:
// Calculo de Média: crie uma função chamada calcularMedia que recebe a lsita de alunos e retorna a média das notas;
// Filtragem de aprovação: Crie uma função chamada alunosAprovados que recebe a lista de alunos e um valor mínimo para aprovação e retorna uma nova lista contendo apenas os alunos que tem notas iguais ou superiores ao valor mínimo;
// Impressão de Resultados: Utilize a função forEach para imprimir uma mensagem para cada aluno, indicando se ele foi aprovado ou reprovado, com base no valor mínimo de aprovação.

let array5 = [{
    nome: 'Tamires',
    nota: [5, 5, 5]
},
{
    nome: 'Leonardo',
    nota: [10, 8, 6]
}];

let calcularMedia = array5.map((aluno) => {
    let sum = aluno.nota.reduce((total, value) => total + value, 0);
    let average = sum / aluno.nota.length;
    return {
        nome: aluno.nome,
        media: average.toFixed(2)
    };
});

console.log(calcularMedia);

let alunosAprovados = calcularMedia.filter((aluno) => aluno.media >= 7);
    
console.log(alunosAprovados);


calcularMedia.forEach((aluno) => {
    let mensagem = aluno.media >= 7 ? 'Aprovado' : 'Reprovado';
    console.log(`A média de ${aluno.nome} é ${aluno.media}, portanto, está ${mensagem}.`);
});
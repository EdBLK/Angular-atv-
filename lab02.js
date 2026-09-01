const disciplinas = [
  { nome: 'Desenv. Dinâmico', ch: 80, nota: 8.5 },
  { nome: 'Banco de Dados',   ch: 80, nota: 6.0 },
  { nome: 'Engenharia de SW', ch: 40, nota: 9.1 },
];

const nomeMaiusculo =  disciplinas.map(item => item.nome.toUpperCase());

console.log(nomeMaiusculo);

const aprovado = disciplinas.filter(item => item.nota >= 7);

console.log(aprovado);

const total = disciplinas.reduce((cargH, item) => cargH + item.ch, 0);

console.log(total);

const mediaSoma = disciplinas.reduce((acumulador, item) => acumulador + (item.nota * item.ch), 0);
const media = mediaSoma / total;

console.log(media);

const disciplinasComSituacao = disciplinas.map(item => ({
  ...item, // Copia nome, ch e nota automaticamente!
  situacao: item.nota >= 7 ? 'Aprovado' : 'Reprovado'
}));

console.log('--- Novo Array ---');
console.log(disciplinasComSituacao);

console.log('--- Array Original (Teste do Professor) ---');
console.log(disciplinas);
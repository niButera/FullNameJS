var primeiroNome = prompt("Qual seu primeiro nome?");
var sobrenome = prompt("E seu sobrenome?");

var nomeCompleto = primeiroNome + " " + sobrenome;
var nomeCatalogo = sobrenome.toUpperCase() + ", " + primeiroNome;

console.log("Nome completo: " + nomeCompleto);
console.log("Nome de catálogo: " + nomeCatalogo);
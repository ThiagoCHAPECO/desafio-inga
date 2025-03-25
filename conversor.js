const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// valores dos números romanos
const valoresRomanos = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

// Função para converter números romanos em decimais
function conversorParaDecimal(romano) {
  let total = 0;
  let anterior = 0;

  // começa no ultimo caractere e vai até o primeiro
  for (let i = romano.length - 1; i >= 0; i--) {
    const char = romano[i].toUpperCase(); // converte o caractere para maiusculo
    const valor = valoresRomanos[char];

    if (!valor) {
      return null; //  se o caractere for inválido ele retorna nulo
    }

    // se o valor atual for menor que o anterior, ele subtrai, senao ele soma
    if (valor < anterior) {
      total -= valor;
    } else {
      // se o valor atual for maior que o anterior, ele soma
      total += valor;
    }
    // anterior recebe o valor atual
    anterior = valor;
  }

  return total;
}

// Função para iniciar o conversor
function ConversorDeNumerosRomanos() {
  rl.question(
    "Digite um número romano (I, V, X, L, C, D, M) para converter (ou 'sair' para encerrar): ",
    (entrada) => {
      if (entrada.toLowerCase() === "sair") {
        console.log("Conversor encerrado. Obrigado!");
        rl.close();
        return;
      }

      const resultado = conversorParaDecimal(entrada);

      // se o resultado for nulo, significa que o número romano foi inválido
      if (resultado === null) {
        console.log("Erro: Símbolo romano inválido. Tente novamente.");
      } else {
        console.log(
          `O número romano "${entrada.toUpperCase()}" equivale a ${resultado} em decimal.`
        );
      }

      ConversorDeNumerosRomanos(); // Reinicia o loop para nova entrada
    }
  );
}

// Mensagem inicial do programa
console.log("Conversor de Números Romanos para Decimais");
console.log("Digite 'sair' para encerrar.");

// Inicia o do conversor
ConversorDeNumerosRomanos();

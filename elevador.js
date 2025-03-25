// Simulação do elevador com painel interativo
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const totalAndares = 4;
let elevadorAtual = 0; // O elevador começa no térreo (andar 0)
let filaChamadas = []; // Armazena a ordem de andares a serem visitados

// Função para exibir o diagrama de seção transversal
function exibirDiagrama() {
  console.log("\n=== Diagrama de Seção Transversal ===");
  for (let andar = totalAndares; andar >= 0; andar--) {
    let elevadorPos = (andar === elevadorAtual) ? "[E]" : "[ ]"; // Marca onde o elevador está
    if (andar === totalAndares) {
      console.log(`Andar ${andar} | ${elevadorPos} | ------------------`);
    } else {
      console.log(`Andar ${andar} | ${elevadorPos} | |`);
    }
  }
  console.log("==============================\n");
}

// Função para simular o movimento do elevador
function moverElevador() {
  if (filaChamadas.length === 0) {
    if (elevadorAtual !== 0) {
      // Se for diferente de 0, retorna ao térreo
      console.log(`Elevador retornando ao térreo (andar 0).`);
      setTimeout(() => {
        elevadorAtual = 0;
        // = 0 indica que o elevador chegou ao térreo
        exibirDiagrama(); // Atualiza o diagrama
        console.log(`Elevador chegou ao térreo (andar 0).`);
      }, 2000);
    } else {
      console.log("Elevador está parado no térreo (andar 0).");
    }
    return;
  }
  // remove o primeiro elemento da fila, e reordena a fila
  const proximoAndar = filaChamadas.shift(); // Pega o próximo andar da fila
  console.log(`Elevador saindo do ${elevadorAtual}º andar para o ${proximoAndar}º andar.`);
  exibirPassoAPasso(elevadorAtual, proximoAndar); // Exibe o passo a passo
  setTimeout(() => {
    elevadorAtual = proximoAndar;
    exibirDiagrama(); // Atualiza o diagrama
    console.log(`Elevador chegou ao ${proximoAndar}º andar.`);

    // Continuar processando as próximas chamadas
    moverElevador();
  }, 2000);
}

// Função para exibir o passo a passo do movimento do elevador
function exibirPassoAPasso(andarAtual, proximoAndar) {
  if (andarAtual < proximoAndar) {
    // se for menor que o proximo andar, ele sobe
    for (let i = andarAtual + 1; i <= proximoAndar; i++) {
      console.log(`Elevador subindo para o ${i}º andar.`);
    }
  } else {
    // se for maior que o proximo andar, ele desce
    for (let i = andarAtual - 1; i >= proximoAndar; i--) {
      console.log(`Elevador descendo para o ${i}º andar.`);
    }
  }
}

// Função para lidar com os botões do elevador
function chamarElevador(andar) {
  if (andar < 0 || andar > totalAndares) {
    console.log(`Andar inválido. Insira um número entre 0 e ${totalAndares}.`);
  } else if (filaChamadas.includes(andar)) {
    console.log(`O elevador já foi chamado para o ${andar}º andar.`);
  } else {
    console.log(`Botão do ${andar}º andar pressionado.`);
    filaChamadas.push(andar);
    console.log(`Andar ${andar} adicionado à fila. Fila atual: [${filaChamadas.join(", ")}]`);
    if (filaChamadas.length === 1 && elevadorAtual === 0) {
      moverElevador();
    }
  }
}

// Função para exibir o status do elevador
function exibirStatus() {
  // Exibe o status atual do elevador
  console.log("\n=== Status do Elevador ===");
  console.log(`Elevador está atualmente no ${elevadorAtual}º andar.`);
  console.log(`Fila de chamadas: [${filaChamadas.join(", ")}]`);
  console.log("==========================\n");
}

// Função para exibir o menu do painel
function exibirMenu() {
  console.log("\n=== Painel do Elevador ===");
  console.log("1 - Chamar elevador");
  console.log("2 - Ver status do elevador");
  console.log("3 - Sair");
  console.log("==========================\n");
}

// Função principal com loop interativo
function iniciarElevador() {
  exibirMenu();

  rl.question("Escolha uma opção: ", (opcao) => {
    switch (opcao.trim()) {
      case "1":
        // Pergunta ao usuário para qual andar deseja chamar o elevador
        rl.question("Para qual andar deseja chamar o elevador? ", (input) => {
          const andar = parseInt(input.trim(), 10);
          if (isNaN(andar)) {
            console.log("Por favor, insira um número válido!");
          } else {
            chamarElevador(andar);
          }
          iniciarElevador(); // Volta ao menu principal
        });
        break;

      case "2":
        // Mostra onde o elevador está atualmente e a fila de chamadas
        exibirStatus();
        iniciarElevador();
        break;

      case "3":
        // Encerra o sistema
        console.log("Encerrando o sistema...");
        rl.close();
        break;

      default:
        console.log("Opção inválida. Tente novamente.");
        iniciarElevador();
    }
  });
}

iniciarElevador();

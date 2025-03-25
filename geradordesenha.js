const fs = require('fs');
const readline = require('readline');

// Interface de leitura do terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função para gerar senha
function gerarSenha(tamanho, incluirMaiuscula, incluirMinuscula, incluirNumero, incluirSimbolo) {
  let caracteres = "";
  // Adiciona os caracteres que foram escolhidos para gerar a senha do usuário
  if (incluirMaiuscula) caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (incluirMinuscula) caracteres += "abcdefghijklmnopqrstuvwxyz";
  if (incluirNumero) caracteres += "0123456789";
  if (incluirSimbolo) caracteres += "!@#$%^&*()_+[]{}|;:',.<>?/";

  if (caracteres === "") {
    console.log("Nenhuma opção foi selecionada! Escolha pelo menos uma.");
    return "";
  }

  let senha = "";
  for (let i = 0; i < tamanho; i++) {
    // Math.floor arredonda para baixo qualquer número decimal para o inteiro mais próximo.
    // Math.random() gera um número decimal entre 0 e 1.
    // Math.random gera um numero aleatorio, e depois multiplica pelas (letras maiúsculas + minúsculas + números + símbolos)
    // depois que gera o numero da multiplicação, ele arredonda para baixo, e pega o o que esta no indice sorteado
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length); // faz a criação da senha
    senha += caracteres[indiceAleatorio]; // vai juntando os sorteados até completar o tamanho da senha
  }

  return senha;
}

// avalia a força da senha
function avaliarForcaSenha(senha) {
  let forca = 0;
  // faz a verificação da força da senha, se contem letras maiusculas, minusculas, numeros e simbolos
  // método .test() é usado para verificar se uma string correspondente a uma expressão regular, /[A-Z]/ é a expressão regular
  if (senha.length >= 8) forca += 1;
  if (/[A-Z]/.test(senha)) forca += 1;
  if (/[a-z]/.test(senha)) forca += 1;
  if (/\d/.test(senha)) forca += 1;
  if (/[^A-Za-z0-9]/.test(senha)) forca += 1;
 
  // retorna a força da senha, com os pontos ganhos
  if (forca <= 2) {
    return "Fraca";
  } else if (forca === 3) {
    return "Média";
  } else {
    return "Forte";
  }
}

// salva a senha em um arquivo .txt
function salvarSenhaEmArquivo(senha) {
  const nomeArquivo = "senha_gerada.txt";
  // salva a senha no arquivo senha_gerada.txt

  // fs.writeFile cria (ou reescreve, se já existir) um arquivo no sistema de arquivos
  fs.writeFile(nomeArquivo, senha, (err) => {
    if (err) {
      console.error("Erro ao salvar a senha:", err);
    } else {
      console.log(`Senha salva em: ${nomeArquivo}`);
    }
  });
}

// Função principal
function exibirSenhaEForca(tamanho, incluirMaiuscula, incluirMinuscula, incluirNumero, incluirSimbolo) {
  const senha = gerarSenha(tamanho, incluirMaiuscula, incluirMinuscula, incluirNumero, incluirSimbolo);
  if (!senha) return; // Se a senha não for gerada, retorna sem exibir nada

  // Exibe a senha e a forca
  const forca = avaliarForcaSenha(senha);
  console.log(`Senha gerada: ${senha}`);
  console.log(`Força da senha: ${forca}`);

  // Salvar a senha em um arquivo .txt
  salvarSenhaEmArquivo(senha);
  rl.close();
}

// função main, faz as perguntas sobre a senha ao usuario 
function main() {
  // tamanho da senha
  rl.question("Quantos caracteres a senha deve ter? ", (tamanhoInput) => {
    const tamanho = parseInt(tamanhoInput, 10);

    // se a senha não tiver numeros ou for menor que 0, ele retorna uma mensagem de erro
    if (isNaN(tamanho) || tamanho <= 0) {
      console.log("Por favor, insira um número válido.");
      rl.close();
      return;
    }
    // pergunta se o usuario quer incluir letras maiusculas, minusculas, numeros e simbolos
    rl.question("Incluir letras maiúsculas? (s/n): ", (resMaiuscula) => {
      const incluirMaiuscula = resMaiuscula.toLowerCase() === "s";

      rl.question("Incluir letras minúsculas? (s/n): ", (resMinuscula) => {
        const incluirMinuscula = resMinuscula.toLowerCase() === "s";

        rl.question("Incluir números? (s/n): ", (resNumero) => {
          const incluirNumero = resNumero.toLowerCase() === "s";

          rl.question("Incluir símbolos? (s/n): ", (resSimbolo) => {
            const incluirSimbolo = resSimbolo.toLowerCase() === "s";

            exibirSenhaEForca(tamanho, incluirMaiuscula, incluirMinuscula, incluirNumero, incluirSimbolo);
          });
        });
      });
    });
  });
}

main();

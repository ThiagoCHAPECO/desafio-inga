# desafio-inga
repositorio para desafio de codigo

todos os codigos foram feitos em node.js


# conversor.js
para executar o codigo coloque node conversor.js no terminal
# como funciona o conversor
Este é um programa simples que converte números romanos em números decimais. O código utiliza a linguagem JavaScript e o módulo `readline` para interagir com o usuário via terminal. 
## Tecnologias 
- JavaScript 
- Node.js
## Como usar
1. Ao executar o programa, ele irá solicitar que você digite um número romano para converter.
2. Você pode inserir um número romano (por exemplo, "XIV", "M", "XXI").
3. O programa irá retornar o valor decimal correspondente ao número romano digitado.
4. Para encerrar o programa, basta digitar "sair".

Exemplos:
- Entrada: `XIV`
- Saída: `O número romano "XIV" equivale a 14 em decimal.`





# elevador.js
para executar o codigo coloque node elevador.js no terminal
# como funciona o elevador
Este é um simulador de elevador interativo em JavaScript. Ele permite ao usuário chamar o elevador para diferentes andares, visualizar o status do elevador e acompanhar o movimento do elevador com base nas chamadas realizadas.
## Tecnologias
- JavaScript
- Node.js
- Módulo `readline` para interação com o usuário
## Como usar
Ao executar o programa, você será apresentado a um painel com as opções:
1. 
1 - Chamar o elevador para um andar.
2 - Ver status do elevador (andar atual e fila de chamadas).
3 - Sair do programa.
2. Se você escolher a opção de chamar o elevador (1), será solicitado o número do andar para o qual deseja chamar o elevador.
3. O programa exibirá o movimento do elevador no terminal (subindo ou descendo), além de um diagrama de seção transversal representando o elevador em cada andar.
4. Para sair, basta selecionar a opção 3.

Exemplo:
- Entrada: `1`
  - Saída: `Para qual andar deseja chamar o elevador?`
  - Entrada: `3`
  - Saída: `Elevador saindo do 0º andar para o 3º andar.`

- Entrada: `2`
  - Saída: `Elevador está atualmente no 3º andar. Fila de chamadas: []`





# geradordesenha.js
para executar o codigo coloque node geradordesenha.js no terminal

# como funciona o gerador de senhas
Este é um gerador de senhas interativo em JavaScript. O usuário pode escolher o tamanho da senha, se deseja incluir letras maiúsculas, minúsculas, números e símbolos. O programa também avalia a força da senha gerada e a salva em um arquivo `.txt`.
## Tecnologias
- JavaScript
- Node.js
- Módulo `fs` para manipulação de arquivos
- Módulo `readline` para interação com o usuário no terminal
## Como usar

1. O programa solicitará que você informe o tamanho da senha desejada.
2. Em seguida, será perguntado se você quer incluir letras maiúsculas, minúsculas, números e símbolos.
3. O programa irá gerar a senha com as opções escolhidas, exibir a senha gerada e sua força (fraca, média ou forte).
4. A senha gerada será salva automaticamente em um arquivo `.txt` chamado `senha_gerada.txt`.

Exemplo de execução:

Quantos caracteres a senha deve ter? `12`
Incluir letras maiúsculas? (s/n): `s`
Incluir letras minúsculas? (s/n): `s`
Incluir números? (s/n): `s`
Incluir símbolos? (s/n): `s`

# Resultado final
Senha gerada: `A4b@7FgP$2h1`
Força da senha: `Forte`
Senha salva em: `senha_gerada.txt`



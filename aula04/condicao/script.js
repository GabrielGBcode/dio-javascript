var j1 = 0;
var j2 = 1;
var placar;

j1 != -1 && j2 != -1
  ? console.log("jogadores válidos")
  : console.log("Jogadores inválidos");

if (j1 > 0 && j2 == 0) {
  console.log("Jogador 1 marcou um ponto!");
  var placar = j1 > j2;
} else if (j2 > 0 && j1 == 0) {
  console.log("Jogador 2 marcou ponto!");
  var placar = j2 > j1;
} else {
  console.log("Ninguém marcou ponto!");
}

switch (placar) {
  case (placar = j1 > j2):
    console.log("Jogador 1 Ganhou!");
    break;

  case (placar = j2 > j1):
    console.log("Jogador 2 Ganhou!");
    break;

  default:
    console.log("Ninguém Ganhou!");
    break;
}

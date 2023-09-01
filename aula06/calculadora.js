function calculadora() {
  const operacao = prompt(
    "Escolha uma opreação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real(/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)"
  );
  if (operacao >= 0 && operacao <= 6) {
    var num1 = Number(prompt("Insira um valor: "));
    var num2 = Number(prompt("Insira outro valor: "));
    var res;
  } else {
    window.alert("Escolha um número válido! (1-6)");
    calculadora();
  }

  if (!num1 || !num2) {
    window.alert("ERROR - Parâmentros inválidos!");
    calculadora();
  }

  if (operacao == 1) {
    soma();
  } else if (operacao == 2) {
    subtracao();
  } else if (operacao == 3) {
    multiplicacao();
  } else if (operacao == 4) {
    divisaoReal();
  } else if (operacao == 5) {
    divisaoInteira();
  } else if (operacao == 6) {
    potenciacao();
  }

  function soma() {
    res = num1 + num2;
    window.alert(`${num1} + ${num2} = ${res}`);
    novaOperacao();
  }

  function subtracao() {
    res = num1 - num2;
    window.alert(`${num1} - ${num2} = ${res}`);
    novaOperacao();
  }

  function multiplicacao() {
    res = num1 * num2;
    window.alert(`${num1} x ${num2} = ${res}`);
    novaOperacao();
  }

  function divisaoReal() {
    res = num1 / num2;
    window.alert(`${num1} / ${num2} = ${res}`);
    novaOperacao();
  }

  function divisaoInteira() {
    res = parseInt(num1 / num2);
    let resto = num1 % num2;
    window.alert(`${num1} % ${num2} = ${res} \nResto: ${resto}`);
    novaOperacao();
  }

  function potenciacao() {
    res = num1 ** num2;
    window.alert(`${num1} ^ ${num2} = ${res}`);
    novaOperacao();
  }

  function novaOperacao(param) {
    let opc = prompt("Deseja fazer outra operação? \n 1 - Sim \n 2 - Não");

    if (opc == 1) {
      calculadora();
    } else if (opc == 2) {
      window.alert("Espero ter ajudado, volte sempre que precisar!");
    } else {
      window.alert("Digite novamente!");
      novaOperacao();
    }
  }
}
calculadora();

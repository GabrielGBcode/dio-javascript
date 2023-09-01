// let array = ["string", 1, true, ["array1"], ["array2"], ["array3"], ["array4"]];

// array.forEach(function (item, i) {
//   console.log(`${i + 1} => ${item} \n------------`);
// });

// let push = array.push("new item01");
// console.log(
//   "\nTamanho do Array com um item a mais: " +
//     array.length +
//     ` Adicionado ${push}`
// );

// let pop = array.pop();
// console.log(
//   "\nRemovido o último item do array: " + array.length + ` Removido ${pop}`
// );

// let shift = array.shift();
// console.log(
//   "\nRemovido o primeiro item do array: " + array.length + ` Removido ${shift}`
// );

// let unshift = array.unshift("new item02");
// console.log(
//   "\nAdiciona um item no início do array: " +
//     array.length +
//     ` Adicionado ${unshift}`
// );

// let indexOf = array.indexOf(1);
// console.log(
//   `\nPocura o valor desejado está na posição: ${indexOf} (Caso não encontre, o valor aparecerá como -1)`
// );

// array.splice(0, 3);
// console.log("------------");
// console.log(array);

// console.log(array.slice(0, 3));

let object = {
  string: "texto",
  number: 1,
  boolean: true,
  array: ["array01", "array02"],
  objectInterno: { objetoInterno: "Obj Interno" },
};

console.log(object.objectInterno);

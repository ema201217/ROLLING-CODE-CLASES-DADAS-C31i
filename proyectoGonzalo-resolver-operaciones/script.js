const $primerNumero = document.querySelector("#primerNumero");
const $operacion = document.querySelector("#operacion");
const $segundoNumero = document.querySelector("#segundoNumero");
const $resultado = document.querySelector("#resultado");
const $formulario = document.querySelector("#formulario");
const $valorIngresado = document.querySelector("#valorIngresado");
const $textoPagina = document.querySelector("#textoPagina");
const $respuestasCorrectas = document.querySelector("#respuestasCorrectas");
const $respuestasIncorrectas = document.querySelector("#respuestasIncorrectas");
const $respuestasTotales = document.querySelector("#respuestasTotales");

const infoUserLocalStorage = JSON.parse(localStorage.getItem("statistics"));

const infoUser = infoUserLocalStorage
  ? infoUserLocalStorage
  : {
      username: "emanuel2023",
      correct: 0,
      incorrect: 0,
      total: 0,
    };

const questionRandom = () => {
  const numero1 = Math.floor(Math.random() * (100 - 1) + 1);
  const numero2 = Math.floor(Math.random() * (100 - 1) + 1);

  const operations = ["+", "-", "*", "/"];
  const operationSelected = operations[Math.floor(Math.random() * 3)];
  console.log(operationSelected);

  $primerNumero.textContent = numero1;
  $segundoNumero.textContent = numero2;
  $operacion.textContent = operationSelected;

  return { numero1, numero2, operationSelected };
};

const isCorrect = (operation, n1, n2, valueInput) => {
  let resultCorrect;

  switch (operation) {
    case "+":
      resultCorrect = n1 + n2;
      break;
    case "-":
      resultCorrect = n1 - n2;
      break;
    case "*":
      resultCorrect = n1 * n2;
      break;
    case "/":
      resultCorrect = n1 / n2;
      break;
  }

  return resultCorrect === parseInt(valueInput);
};

const updateStatistics = ({ correct, incorrect, total }) => {
  $respuestasCorrectas.textContent = correct;
  $respuestasIncorrectas.textContent = incorrect;
  $respuestasTotales.textContent = total;
};

const showMsg = (typeMsg) => {
  switch (typeMsg) {
    case "value null":
      $textoPagina.textContent = "Ingresa al menos un número!, sin miedo...";
      $textoPagina.style.background = "red";
      break;
    case "correct":
      $textoPagina.textContent = "Bien loco!";
      $textoPagina.style.background = "green";
      break;
    case "incorrect":
      $textoPagina.textContent = "Casi loco... intenta nuevamente!";
      $textoPagina.style.background = "red";
      break;
  }
};

const saveStatistics = () => localStorage.setItem("statistics", JSON.stringify(infoUser));

const { numero1, numero2, operationSelected } = questionRandom();

$formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!$valorIngresado.value) {
    showMsg("value null");
  } else {
    if (isCorrect(operationSelected, numero1, numero2, $valorIngresado.value)) {
      showMsg("correct");
      infoUser.correct++;
      questionRandom();
    } else {
      showMsg("incorrect");
      infoUser.incorrect++;
    }
    infoUser.total++;
    $formulario.reset();
  }
  updateStatistics(infoUser);
  saveStatistics()
});

window.addEventListener('load',() => {
    updateStatistics(infoUser);
})

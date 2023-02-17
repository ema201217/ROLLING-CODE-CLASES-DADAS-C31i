function dibujarPerrito() {
  const dibujoPerro = `
  $$$$$$$$
$$$$$$$        $$$$$$$$$
$$                        $$$$
$$                             $$
$                                  $$
$$                                   $$
$$  $$                      $$          $$
$$  $$   $$$$         $$$$    $$          $$$$
$$   $$  $$$$  $$     $$$$  $$ $$             $$$
$$   $$    $$$$         $$$$   $$               $$
$$   $$                        $$               $$
$$    $$                       $$             $$
$$  $$    $$$$$$             $$           $$$
$$  $$  $$      $$           $$         $$
$$  $$  $$      $$           $$       $$
$$$$    $$$$$$             $$$$    $$$$
$$$$                     $$  $$    $$$
$$ $$$$$$$$$$$$     $$$$      $$$$ $$
$$   $$      $$$$$               $$
$$     $$$$$$$                    $$
$$                                $$
$$                                 $$
$$                                 $$
$$                                   $
$$                                   $$
$$                         $$           $
$$          $$           $$             $$
$$  $$        $$         $$               $$
$$    $$          $$       $$               $$
$$    $$            $$   $$                 $$
$$      $$             $$ $$       $$         $$
$$      $$        $$    $$$        $$         $$
$$      $$        $$    $$$       $$          $$
$$      $$        $$               $$          $$
$$      $$        $$               $$            $
$$$$       $$        $$               $$            $$
$   $$      $$        $$$$           $$$$            $$
$   $$      $$        $$  $$       $$  $$            $$
$$$$$      $$        $$    $$   $$     $$           $$
$$      $$        $$      $$       $$           $$
$$      $$        $$     $$        $$           $$
$$        $$        $$$$$$$$   $$$$$$  $$         $$
$$        $$        $$      $$$      $$$$         $$
$$        $$          $$         $$$$$$  $$          $
$$      $$          $$$$$$$$$$$$$$$      $$          $
$$ $$ $$$          $$             $$$$$$$  $$         $
$$$$$$$           $$                      $$        $$
$$  $$  $$  $$ $                      $$          $$
$$$$  $   $  $$                      $$            $
$$   $   $  $                        $$ $  $$  $$  $
$$$$$$$$$$                          $$ $ $$$$$$$$
`;
  const style = `
  color:red;
  border:1px solid blue;
  font-size:.3rem;
  display:inline-block;
`;

  document.body.innerHTML += `<pre style="${style}">${dibujoPerro}</pre>`;
}
// dibujarPerrito()

const dibujarCorazon = () => {
  const dibujoCorazon = `
  ________00000000000___________000000000000________
______00000000_____00000___000000_____0000000______
____0000000_____________000______________00000_____
___0000000_______________0_________________0000____
__000000____________________________________0000___
__00000_____________________________________ 0000__
_00000______________________________________00000__
_00000_____________________________________000000__
__000000_________________________________0000000___
___0000000______________________________0000000____
_____000000____________________________000000______
_______000000________________________000000________
__________00000_____________________0000___________
_____________0000_________________0000_____________
_______________0000_____________000________________
_________________000_________000___________________
_________________ __000_____00_____________________
______________________00__00_______________________
`;

  document.body.innerHTML += `<pre style="">${dibujoCorazon}</pre>`;
};

// dibujarCorazon()

let numerosV1 = "";
let numerosV2 = "";
let numerosV3 = "";

for (let i = 0; i <= 100; i++) {
  numerosV1 = numerosV1 + " - " + i;
}

for (let i = 0; i <= 100; i += 2 /* i = i + 2 */) {
  // i va a ser igual a lo que ya tenia como valor mas el valor que se le asigna en este caso 2.
  numerosV2 += `${i} - `;
}

for (let i = 0; i <= 100; i += 3) {
  numerosV3 += `${i} - `;
}

/* document.body.innerHTML = numerosV1 + '<br><br>';
document.body.innerHTML += numerosV2 + '<br><br>';
document.body.innerHTML = numerosV3; */

const isError = (username, password) => {
  if (!username || !password) {
    return true;
  }
  if (!isNaN(username)) {
    return true;
  }
  return false;
};

isAuthenticated = (username, password) => {
  const userValid = {
    username: "gonza-flores2023",
    password: 123123,
  };
  if (username === userValid.username && password === userValid.password) {
    return true;
  }
  return false;
};

const login = (username, password) => {
  if (isError(username, password)) {
    return "Error en los campos";
  }

  if (!isAuthenticated(username, password)) {
    return "Credenciales invalidas";
  }

  return "Logueado exitosamente!!!";
};

const userError = {
  username: "",
  password: "",
};

const response = login(userError.username, userError.password);

const response2 = login("ema2023", 4321);

const response3 = login("gonza-flores2023", 123123);
document.body.innerHTML = response3;

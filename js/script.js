window.onload = () => {
  let button = document.getElementById("play");
  button.addEventListener("click", jogar);
};

let jogar = () => {
  if (!checked()) {
    alert("Por favor ecolha uma opcao antes de jogar.");
  } else {
    let resultado = document.getElementById("resultado");
    let list = ["pedra", "papel", "tesoura"];
    let humanValue = getValueSelected();
    const randomChoice = Math.floor(Math.random() * 3) + 0;
    let computerValue = list[randomChoice];
    printComputerchoice(computerValue);

    if (humanValue == computerValue) {
      resultado.innerHTML = "Empatou jogue novamente!";
    } else if (humanValue == "pedra" && computerValue == "papel") {
      resultado.innerHTML = "computador ganhou!";
    } else if (humanValue == "papel" && computerValue == "pedra") {
      resultado.innerHTML = "vc ganhou!";
    } else if (humanValue == "pedra" && computerValue == "tesoura") {
      resultado.innerHTML = "voce ganhou!";
    } else if (humanValue == "tesoura" && computerValue == "pedra") {
      resultado.innerHTML = "computador ganhou!";
    } else if (humanValue == "papel" && computerValue == "tesoura") {
      resultado.innerHTML = "computador ganhou!";
    } else if (humanValue == "tesoura" && computerValue == "papel") {
      resultado.innerHTML = "voce ganhou!";
    }
  }
};

let printComputerchoice = (value) => {
  let elCompchoice = document.getElementById("computer-choice");
  let image = document.createElement("img");
  image.src = `assets/${value}.png`;
  image.classList.add("computer-choice-img");
  elCompchoice.innerHTML = "";
  elCompchoice.append(image);
};

let checked = () => {
  let radioChoice = document.getElementsByName("human-choice");
  for (var i = 0; i < radioChoice.length; i++) {
    if (radioChoice[i].checked) {
      return true;
    }
  }
  return false;
};

let getValueSelected = () => {
  let radioChoice = document.getElementsByName("human-choice");
  for (var i = 0; i < radioChoice.length; i++) {
    if (radioChoice[i].checked) {
      return radioChoice[i].value;
    }
  }
  return null;
};

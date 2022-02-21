let turno = false;
let victoria = false;
let score = 0;
const lineas = [
  {
    height: "10px",
    width: "600px",
    top: "100px",
    left: "0px",
    // transform: "rotate(0deg)",
  },
  {
    height: "10px",
    width: "600px",
    top: "300px",
    left: "0px",
    // transform: "rotate(0deg)",
  },
  {
    height: "10px",
    width: "600px",
    top: "500px",
    left: "0px",
    // transform: "rotate(0deg)",
  },
  {
    height: "800px",
    width: "10px",
    top: "-100px",
    left: "300px",
    transform: "rotate(-45deg)",
  },
  {
    height: "800px",
    width: "10px",
    top: "-100px",
    left: "300px",
    transform: "rotate(45deg)",
  },
  {
    height: "600px",
    width: "10px",
    top: "0px",
    left: "95px",
    // transform: "rotate(0deg)",
  },
  {
    height: "600px",
    width: "10px",
    top: "0px",
    left: "300px",
    // transform: "rotate(0deg)",
  },
  {
    height: "600px",
    width: "10px",
    top: "0px",
    left: "500px",
    // transform: "rotate(0deg)",
  },
];

const handleClick = (event) => {
  const { id } = event.target;
  console.log(id);
  const div = document.getElementById(id);
  if (div.innerText === "" && victoria === false) {
    div.innerText = turno ? "O" : "X";
    verificarVictoria();
    turno = !turno;
  }
};

const verificarVictoria = () => {
  score++;
  const div1 = document.getElementById(1);
  const div2 = document.getElementById(2);
  const div3 = document.getElementById(3);
  const div4 = document.getElementById(4);
  const div5 = document.getElementById(5);
  const div6 = document.getElementById(6);
  const div7 = document.getElementById(7);
  const div8 = document.getElementById(8);
  const div9 = document.getElementById(9);

  const forma1 =
    div1.innerHTML === div2.innerHTML &&
    div1.innerHTML === div3.innerHTML &&
    div1.innerText !== "";
  const forma2 =
    div4.innerHTML === div5.innerHTML &&
    div4.innerHTML === div6.innerHTML &&
    div4.innerText !== "";
  const forma3 =
    div7.innerHTML === div8.innerHTML &&
    div7.innerHTML === div9.innerHTML &&
    div7.innerText !== "";
  const forma4 =
    div1.innerHTML === div5.innerHTML &&
    div1.innerHTML === div9.innerHTML &&
    div1.innerText !== "";
  const forma5 =
    div3.innerHTML === div5.innerHTML &&
    div3.innerHTML === div7.innerHTML &&
    div3.innerText !== "";
  const forma6 =
    div1.innerHTML === div4.innerHTML &&
    div1.innerHTML === div7.innerHTML &&
    div1.innerText !== "";
  const forma7 =
    div2.innerHTML === div5.innerHTML &&
    div2.innerHTML === div8.innerHTML &&
    div2.innerText !== "";
  const forma8 =
    div3.innerHTML === div6.innerHTML &&
    div3.innerHTML === div9.innerHTML &&
    div3.innerText !== "";

  const formas = [
    forma1,
    forma2,
    forma3,
    forma4,
    forma5,
    forma6,
    forma7,
    forma8,
  ];

  // Find the index (position) of the form that won.
  let position = null;
  for (let i = 0; i < formas.length; i++) {
    // if formas[i] === true
    if (formas[i]) {
      position = i;
      break;
    }
  }

  if (position !== null) {
    // Get the line corresponding to the position.
    const linea = lineas[position];
    const linea1 = document.getElementById("linea");
    linea1.style.height = linea.height;
    linea1.style.width = linea.width;
    linea1.style.top = linea.top;
    linea1.style.left = linea.left;
    linea1.style.transform = linea.transform;
    victoria = true;
    alert(`El ganador es: ${turno ? "O" : "X"}`);
  } else {
    if (score === 9) {
      alert("es un empate");
    }
  }
};

const reload = () => {
  const div1 = document.getElementById(1);
  const div2 = document.getElementById(2);
  const div3 = document.getElementById(3);
  const div4 = document.getElementById(4);
  const div5 = document.getElementById(5);
  const div6 = document.getElementById(6);
  const div7 = document.getElementById(7);
  const div8 = document.getElementById(8);
  const div9 = document.getElementById(9);

  const linea = document.getElementById("linea");
  linea.style.height = "0px";
  linea.style.width = "0px";
  linea.style.top = "0px";
  linea.style.left = "0px";
  // linea.style.tranform = "rotate(0deg)";

  div1.innerText = "";
  div2.innerText = "";
  div3.innerText = "";
  div4.innerText = "";
  div5.innerText = "";
  div6.innerText = "";
  div7.innerText = "";
  div8.innerText = "";
  div9.innerText = "";

  turno = false;
  victoria = false;
  score = 0;
};

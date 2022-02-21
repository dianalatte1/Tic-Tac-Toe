let turno = false;
let victoria = false;
let score = 0;
const lineas = [
  { height: "10px", width: "600px", top: "80px", left: "0px" },
  { height: "10px", width: "600px", top: "80px", left: "0px" },
  { height: "10px", width: "600px", top: "80px", left: "0px" },
  { height: "10px", width: "600px", top: "80px", left: "0px" },
  { height: "10px", width: "600px", top: "80px", left: "0px" },
  { height: "600px", width: "10px", top: "0px", left: "500px" },
  { height: "10px", width: "600px", top: "80px", left: "0px" },
  { height: "10px", width: "600px", top: "80px", left: "0px" },
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
// const formas = [forma1, forma2, forma3, forma4, forma5, forma6, forma7, forma8];

// console.log(lineas);
// console.log(formas);

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

  if (
    forma1 ||
    forma2 ||
    forma3 ||
    forma4 ||
    forma5 ||
    forma6 ||
    forma7 ||
    forma8
  ) {
    const linea1 = document.getElementById("linea");
    linea1.style.height = "10px";
    linea1.style.width = "600px";
    linea1.style.top = "100px";
    linea1.style.left = "0px";
    const linea2 = document.getElementById("linea");
    linea2.style.height = "10px";
    linea2.style.width = "600px";
    linea2.style.top = "300px";
    linea2.style.left = "0px";
    const linea3 = document.getElementById("linea");
    linea3.style.height = "10px";
    linea3.style.width = "600px";
    linea3.style.top = "500px";
    linea3.style.left = "0px";
    // linea vertical
    const linea4 = document.getElementById("linea");
    linea4.style.height = "850px";
    linea4.style.width = "850px";
    linea4.style.top = "10px";
    linea4.style.left = "0px";
    linea4.style.transform = "rotate(-45deg)";
    const linea5 = document.getElementById("linea");
    linea5.style.height = "600px";
    linea5.style.width = "10px";
    linea5.style.top = "0px";
    linea5.style.left = "100px";
    const linea6 = document.getElementById("linea");
    linea6.style.height = "600px";
    linea6.style.width = "10px";
    linea6.style.top = "0px";
    linea6.style.left = "100px";
    const linea7 = document.getElementById("linea");
    linea7.style.height = "600px";
    linea7.style.width = "10px";
    linea7.style.top = "0px";
    linea7.style.left = "500px";
    const linea8 = document.getElementById("linea");
    linea8.style.height = "600px";
    linea8.style.width = "10px";
    linea8.style.top = "0px";
    linea8.style.left = "500px";
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

const baseAltura = () => {
  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;
  const input3 = document.getElementById("input3").value;
  const response = document.getElementById("response");
  const responseTriangulo = document.getElementById("responseTriangulo");

  /* Operacion para base por altura */
  const resultado = (parseInt(input1) * parseInt(input2)) / 2;
  response.innerHTML = ` El resultado es : ${resultado}`;

  //Equilatero,Isoceles,Escaleno,Rectangulo
  /* Operacion tipo de triangulo */
  if (input3 === "equilatero") {
    responseTriangulo.innerHTML = ` El  tipo de triangulo es : ${input3.toUpperCase()}`;
  } else if (input3 === "isosceles") {
    responseTriangulo.innerHTML = ` El  tipo de triangulo es : ${input3.toUpperCase()}`;
  } else if (input3 === "escaleno") {
    responseTriangulo.innerHTML = ` El  tipo de triangulo es : ${input3.toUpperCase()}`;
  } else if (input3 === "rectangulo") {
    responseTriangulo.innerHTML = ` El  tipo de triangulo es : ${input3.toUpperCase()}`;
  } else if (input3 === "") {
    responseTriangulo.innerHTML = ` No se ingreso nada... ${input3}`;
    alert("Ingrese el tipo de triangulo");
  } else {
    responseTriangulo.innerHTML = ` No existe este triangulo : ${input3}`;
    alert("No existe el triangulo");
  }
};

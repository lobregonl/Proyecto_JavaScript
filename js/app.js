var operando_a, operando_b;
var operacion;

var Calculadora = {

init: function(){
		//VARIABLES
		var pantalla = document.getElementById("display"),
			t_n0 = document.getElementById("0"),
			t_n1 = document.getElementById("1"),
			t_n2 = document.getElementById("2"),
			t_n3 = document.getElementById("3"),
			t_n4 = document.getElementById("4"),
			t_n5 = document.getElementById("5"),
			t_n6 = document.getElementById("6"),
			t_n7 = document.getElementById("7"),
			t_n8 = document.getElementById("8"),
			t_n9 = document.getElementById("9"),
			t_ON = document.getElementById("on"),
			t_signo = document.getElementById("sign"),
			t_raiz = document.getElementById("raiz"),
			t_division = document.getElementById("dividido"),
			t_multiplicacion = document.getElementById("por"),
			t_resta = document.getElementById("menos"),
			t_punto = document.getElementById("punto"),
			t_igual = document.getElementById("igual"),
			t_suma = document.getElementById("mas");


			//EVENTOS

			t_n1.onclick = function(e){
				if (pantalla.textContent == "0") {
					limpiar();
					pantalla.textContent = "1"
				}else{
						if (pantalla.textContent.length <= 7) {
							pantalla.textContent = pantalla.textContent + "1"
						};
				}
				//disminuyeTecla(t_n1);
			}

			t_n1.onmouseup = function(e){
				aumentaTecla(t_n1);
			}

			t_n1.onmousedown = function(e){
				disminuyeTecla(t_n1);
			}

			t_n2.onclick = function(e){
				if (pantalla.textContent == "0") {
					limpiar();
					pantalla.textContent = "2"
				}else{
						if (pantalla.textContent.length <= 7) {
							pantalla.textContent = pantalla.textContent + "2"
						};
				}
			}

			t_n2.onmouseup = function(e){
				aumentaTecla(t_n2);
			}

			t_n2.onmousedown = function(e){
				disminuyeTecla(t_n2);
			}

			t_n3.onclick = function(e){
				if (pantalla.textContent == "0") {
					limpiar();
					pantalla.textContent = "3"
				}else{
						if (pantalla.textContent.length <= 7) {
							pantalla.textContent = pantalla.textContent + "3"
						};
				}
			}

			t_n3.onmouseup = function(e){
				aumentaTecla(t_n3);
			}

			t_n3.onmousedown = function(e){
				disminuyeTecla(t_n3);
			}

			t_n4.onclick = function(e){
				if (pantalla.textContent == "0") {
					limpiar();
					pantalla.textContent = "4"
				}else{
						if (pantalla.textContent.length <= 7) {
							pantalla.textContent = pantalla.textContent + "4"
						};
				}
			}

			t_n4.onmouseup = function(e){
				aumentaTeclaT(t_n4);
			}

			t_n4.onmousedown = function(e){
				disminuyeTeclaT(t_n4);
			}

			t_n5.onclick = function(e){
				if (pantalla.textContent == "0") {
					limpiar();
					pantalla.textContent = "5"
				}else{
						if (pantalla.textContent.length <= 7) {
							pantalla.textContent = pantalla.textContent + "5"
						};
				}
			}

			t_n5.onmouseup = function(e){
				aumentaTeclaT(t_n5);
			}

			t_n5.onmousedown = function(e){
				disminuyeTeclaT(t_n5);
			}

			t_n6.onclick = function(e){
				if (pantalla.textContent == "0") {
					limpiar();
					pantalla.textContent = "6"
				}else{
						if (pantalla.textContent.length <= 7) {
							pantalla.textContent = pantalla.textContent + "6"
						};
				}
			}

			t_n6.onmouseup = function(e){
				aumentaTeclaT(t_n6);
			}

			t_n6.onmousedown = function(e){
				disminuyeTeclaT(t_n6);
			}

			t_n7.onclick = function(e){
				if (pantalla.textContent == "0") {
					limpiar();
					pantalla.textContent = "7"
				}else{
						if (pantalla.textContent.length <= 7) {
							pantalla.textContent = pantalla.textContent + "7"
						};
				}
			}

			t_n7.onmouseup = function(e){
				aumentaTeclaT(t_n7);
			}

			t_n7.onmousedown = function(e){
				disminuyeTeclaT(t_n7);
			}

			t_n8.onclick = function(e){
				if (pantalla.textContent == "0") {
					limpiar();
					pantalla.textContent = "8"
				}else{
						if (pantalla.textContent.length <= 7) {
							pantalla.textContent = pantalla.textContent + "8"
						};
				}
			}

			t_n8.onmouseup = function(e){
				aumentaTeclaT(t_n8);
			}

			t_n8.onmousedown = function(e){
				disminuyeTeclaT(t_n8);
			}

			t_n9.onclick = function(e){
				if (pantalla.textContent == "0") {
					limpiar();
					pantalla.textContent = "9"
				}else{
						if (pantalla.textContent.length <= 7) {
							pantalla.textContent = pantalla.textContent + "9"
						};
				}
			}

			t_n9.onmouseup = function(e){
				aumentaTeclaT(t_n9);
			}

			t_n9.onmousedown = function(e){
				disminuyeTeclaT(t_n9);
			}

			t_n0.onclick = function(e){
				if (pantalla.textContent == "0") {
					limpiar();
					pantalla.textContent = "0"
				}else{
						if (pantalla.textContent.length <= 7) {
							pantalla.textContent = pantalla.textContent + "0"
						};
				}
			}

			t_n0.onmouseup = function(e){
				aumentaTecla(t_n0);
			}

			t_n0.onmousedown = function(e){
				disminuyeTecla(t_n0);
			}

			t_ON.onclick = function(e){
				resetear();
			}

			t_ON.onmouseup = function(e){
				aumentaTeclaT(t_ON);
			}

			t_ON.onmousedown = function(e){
				disminuyeTeclaT(t_ON);
			}

			t_suma.onclick = function(e){
				operando_a = pantalla.textContent;
				operacion = "+";
				limpiar();
			}

			t_suma.onmouseup = function(e){
				aumentaTeclaC2(t_suma);
			}

			t_suma.onmousedown = function(e){
				disminuyeTeclaC2(t_suma);
			}

			t_resta.onclick = function(e){
				operando_a = pantalla.textContent;
				operacion = "-";
				limpiar();
			}

			t_resta.onmouseup = function(e){
				aumentaTeclaT(t_resta);
			}

			t_resta.onmousedown = function(e){
				disminuyeTeclaT(t_resta);
			}

			t_multiplicacion.onclick = function(e){
				operando_a = pantalla.textContent;
				operacion = "*";
				limpiar();
			}

			t_multiplicacion.onmouseup = function(e){
				aumentaTeclaT(t_multiplicacion);
			}

			t_multiplicacion.onmousedown = function(e){
				disminuyeTeclaT(t_multiplicacion);
			}

			t_division.onclick = function(e){
				operando_a = pantalla.textContent;
				operacion = "/";
				limpiar();
			}

			t_division.onmouseup = function(e){
				aumentaTeclaT(t_division);
			}

			t_division.onmousedown = function(e){
				disminuyeTeclaT(t_division);
			}

			t_igual.onclick = function(e){
				operando_b = pantalla.textContent;
				calcular();
			}

			t_igual.onmouseup = function(e){
				aumentaTecla(t_igual);
			}

			t_igual.onmousedown = function(e){
				disminuyeTecla(t_igual);
			}

			t_signo.onclick = function (e) {
				cambiarSigno();
			}

			t_signo.onmouseup = function(e){
				aumentaTeclaT(t_signo);
			}

			t_signo.onmousedown = function(e){
				disminuyeTeclaT(t_signo);
			}

			t_punto.onclick = function (e){
				var puntos=0;
				for (var i = 0; i < pantalla.textContent.length; i++) {
					if (pantalla.textContent[i] == ".") {
						puntos = puntos + 1;
					}
				}

				if (puntos > 0) {
					pantalla.textContent = pantalla.textContent	
				}else{
						if (pantalla.textContent.length <= 7) {
							pantalla.textContent = pantalla.textContent + "."
						};
				}
			}

			t_punto.onmouseup = function(e){
				aumentaTecla(t_punto);
			}

			t_punto.onmousedown = function(e){
				disminuyeTecla(t_punto);
			}



	function limpiar(){
		pantalla.textContent="";
	}

	function resetear(){
		pantalla.textContent = "0";
		operando_a = 0;
		operando_b = 0;
		operacion = "";
	}

	function calcular(){
		var resultado = 0;
		switch(operacion){
			case "+":
				var result_Cadena;
				resultado = parseFloat(operando_a) + parseFloat(operando_b);
				result_Cadena = resultado.toString()
				if (result_Cadena.length <= 7) {
					resultado
				}else{
					resultado = parseFloat(result_Cadena.substr(0, 8))
				}
				break;
			case "-":
				var result_Cadena;
				resultado = parseFloat(operando_a) - parseFloat(operando_b);
				result_Cadena = resultado.toString()
				if (result_Cadena.length <= 7) {
					resultado
				}else{
					resultado = parseFloat(result_Cadena.substr(0, 8))
				}
				break;
			case "*":
				var result_Cadena;
				resultado = parseFloat(operando_a) * parseFloat(operando_b);
				result_Cadena = resultado.toString()
				if (result_Cadena.length <= 7) {
					resultado
				}else{
					resultado = parseFloat(result_Cadena.substr(0, 8))
				}
				break;
			case "/":
				var result_Cadena;
				resultado = parseFloat(operando_a) / parseFloat(operando_b);
				result_Cadena = resultado.toString()
				if (result_Cadena.length <= 7) {
					resultado
				}else{
					resultado = parseFloat(result_Cadena.substr(0, 8))
				}
				break;
		}
		resetear();
		pantalla.textContent = resultado;
	}


	function cambiarSigno(){
		var contenido, contenidoSigno;
		contenido = pantalla.textContent;
		if (contenido.length < 8) {
			contenidoSigno = parseFloat(contenido) * (-1);
			pantalla.textContent = contenidoSigno;
		}else{
			if (contenido.length == 8) {
				for (var i = 0; i < contenido.length; i++) {
					contenidoSigno = parseFloat(contenido.slice(0, -1)) * (-1);
					pantalla.textContent = contenidoSigno;		
				};
			};
		}	
	}


	function disminuyeTecla (tecla) {
		tecla.style.width="28.5%";
		tecla.style.height="62px";
		tecla.style.paddingLeft="1%";
		tecla.style.paddingTop="2px";
	}


	function aumentaTecla (tecla) {
		tecla.style.width="29%";
		tecla.style.height="62.91px";
		tecla.style.paddingLeft="0";
		tecla.style.paddingTop="0";
	}


	function disminuyeTeclaC2 (tecla) {
		tecla.style.width="89.5%";
		tecla.style.height="99.5%";
		tecla.style.paddingLeft="1%";
		tecla.style.paddingTop="2px";
		tecla.style.paddingBottom="2px";
	}


	function aumentaTeclaC2 (tecla) {
		tecla.style.width="90%";
		tecla.style.height="100%";
		tecla.style.paddingLeft="0";
		tecla.style.paddingTop="0";
		tecla.style.paddingBottom="0";
	}


	function disminuyeTeclaT (tecla) {
		tecla.style.width="21.5%";
		tecla.style.height="62px";
		tecla.style.paddingLeft="1%";
		tecla.style.paddingTop="2px";
	}


	function aumentaTeclaT (tecla) {
		tecla.style.width="22%";
		tecla.style.height="62.91px";
		tecla.style.paddingLeft="0";
		tecla.style.paddingTop="0";
	}

}

}

Calculadora.init();


	
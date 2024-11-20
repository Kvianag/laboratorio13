// Funciones matemáticas básicas
function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        return "Error: División por cero";
    }
    return a / b;
}

// Función calculadora principal
function calculadora(num1, num2, operacion) {
    switch(operacion) {
        case 'suma':
            return suma(num1, num2);
        case 'resta':
            return resta(num1, num2);
        case 'multiplicacion':
            return multiplicacion(num1, num2);
        case 'division':
            return division(num1, num2);
        default:
            return "Operación no válida";
    }
}

// Función para manejar el cálculo desde la interfaz
function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacion = document.getElementById('operation').value;
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').textContent = "Por favor, ingrese números válidos";
        return;
    }

    const resultado = calculadora(num1, num2, operacion);
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}
// 1. Declaración de variables, constantes y arrays
const productos = [
    { id: 1, nombre: 'Lentes de receta', precio: 100 },
    { id: 2, nombre: 'Lentes de sol', precio: 50 },
    { id: 3, nombre: 'Lentes de contacto', precio: 75 },
    { id: 4, nombre: 'Líquidos', precio: 25 }
];

const marcasLentesSol = ['Ray-Ban', 'Optitech', 'Godiva', 'Polaroid', 'Optic100', 'Vulk', 'Mistral', 'Camaron Brujo', 'Rusty'];
const marcasLiquidos = ['Arlyt', 'Natura', 'Opti-Free', 'Bausch & Lomb'];

let carrito = [];

// Funciones de interacción
function bienvenida() {
    alert('Bienvenido a Óptica Oasis. ¡Te invitamos a recorrer nuestra web! Antes te realizaremos algunas preguntas.');
}

function preguntarNombre() {
    const nombre = prompt('¿Cómo es tu nombre?');
    if (nombre) {
        alert(`Hola ${nombre}!`);
        seleccionarProducto();
    } else {
        alert('Por favor, ingrese su nombre.');
        preguntarNombre();
    }
}

function seleccionarProducto() {
    const opcion = prompt(
        'Que estas buscando?\n' +
        '1. Lentes de receta\n' +
        '2. Lentes de sol\n' +
        '3. Lentes de contacto\n' +
        '4. Líquidos\n' +
        '5. Precios\n' +
        '6. Otros'
    );
    switch (opcion) {
        case '1':
            manejarLentesReceta();
            break;
        case '2':
            manejarLentesSol();
            break;
        case '3':
            manejarLentesContacto();
            break;
        case '4':
            manejarLiquidos();
            break;
        case '5':
            mostrarPrecios();
            break;
        case '6':
            manejarOtros();
            break;
        default:
            alert('Opción no válida.');
            seleccionarProducto();
    }
}

function manejarLentesReceta() {
    const tieneReceta = prompt('¿Tienes receta médica? (sí/no)');
    if (tieneReceta.toLowerCase() === 'sí' || tieneReceta.toLowerCase() === 'si') {
        alert('Puedes acercarte a la optica con tu receta, para que realicemos tus lentes en nuestro laboratorio. Tenemos muchos modelos para elegir de armazones y cristales.');
    } else if (tieneReceta.toLowerCase() === 'no') {
        alert('Te recomendamos hagas una visita a tu oftalmólogo y luego te acerques con tu receta.');
    } else {
        alert('Por favor, responde "sí" o "no".');
        manejarLentesReceta();
    }
}

function manejarLentesSol() {
    let mensajeMarcas = '¿Está interesado en alguna marca en particular?\n';
    marcasLentesSol.forEach((marca, index) => {
        mensajeMarcas += `${index + 1}. ${marca}\n`;
    });
    const opcion = parseInt(prompt(mensajeMarcas));
    if (opcion > 0 && opcion <= marcasLentesSol.length) {
        alert(`Tenemos ${marcasLentesSol[opcion - 1]} en stock. Puedes acercarte al local a comprarlos.`);
    } else {
        alert('Opción no válida.');
        manejarLentesSol();
    }
}

function manejarLentesContacto() {
    const opcion = prompt(
        '¿Cuál es tu graduación?\n' +
        '1. Igual o menor a +/- 10\n' +
        '2. Mayor a +/- 11'
    );
    switch (opcion) {
        case '1':
            alert('Tenemos stock disponible. Puedes pasar por la óptica a retirarlos.');
            break;
        case '2':
            alert('Debes comunicarte con nosotros para que hagamos el pedido. Este proceso demorará alrededor de una semana.');
            break;
        default:
            alert('Opción no válida.');
            manejarLentesContacto();
    }
}

function manejarLiquidos() {
    let mensajeMarcas = '¿Qué marca prefieres?\n';
    marcasLiquidos.forEach((marca, index) => {
        mensajeMarcas += `${index + 1}. ${marca}\n`;
    });
    const opcion = parseInt(prompt(mensajeMarcas));
    if (opcion > 0 && opcion <= marcasLiquidos.length) {
        alert(`Tenemos ${marcasLiquidos[opcion - 1]} en stock. Puedes pasar por la óptica a comprarlos.`);
    } else {
        alert('Opción no válida.');
        manejarLiquidos();
    }
}

function manejarOtros() {
    const consulta = prompt('¿Por qué desea consultar?');
    const contacto = prompt('Por favor, déjanos un contacto para comunicarnos contigo.');
    alert(`Gracias por tu consulta: "${consulta}". Nos pondremos en contacto contigo a través de: ${contacto}`);
}

function mostrarPrecios() {
    let mensajePrecios = 'Lista de precios:\n';
    productos.forEach(producto => {
        mensajePrecios += `${producto.id}. ${producto.nombre} - $${producto.precio}\n`;
    });
    alert(mensajePrecios);
    seleccionarProducto();
}

// Función inicial para comenzar la simulación
function iniciarSimulador() {
    bienvenida();
    preguntarNombre();
}

// Llamada a la función inicial
iniciarSimulador();
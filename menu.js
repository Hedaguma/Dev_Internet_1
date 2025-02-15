window.onload = function() {
    // Cargar el menú
    fetch('Menu.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('menu-contenedor').innerHTML = data;
    });

    // Función mensaje de alerta
    function mensajeRegistro() {
        var form = document.getElementById("registrationForm");
        if (!form) return;
    
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Registro exitoso");
            form.reset();
        });
    }
    
    function mensajeEnviado() {
        var form = document.getElementById("messageSentForm");
        if (!form) return;
    
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Encuesta enviada");
            form.reset();
        });
    }
    
    function mensajeContacto() {
        var form = document.getElementById("contactForm");
        if (!form) return;
    
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Mensaje de contacto enviado");
            form.reset();
        });
    }

    function mensajeCotizacion() {
        var form = document.getElementById("cotizacionForm");
        if (!form) return;
    
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Cotizacion enviada");
            alert("Revise su correo electrónico");
            form.reset();
        });
    }
    
    function mensajeComentario() {
        var form = document.getElementById("commentForm");
        if (!form) return;
    
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Comentario enviado");
            form.reset();
        });
    }
    
    function mensajeSesion() {
        var form = document.getElementById("loginForm");
        if (!form) return;
    
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Sesión iniciada");
            form.reset();
        });
    }
    
    function mensajeBusqueda() {
        var form = document.getElementById("searchForm");
        if (!form) return;
    
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Buscando...");
            alert("No se encontraron resultados");
            form.reset();
        });
    }
    
    function mensajeSuscripcion() {
        var form = document.getElementById("subscriptionForm");
        if (!form) return;
    
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Suscripción exitosa");
            form.reset();
        });
    }
    
    function mensajeReserva() {
        var form = document.getElementById("reservationForm");
        if (!form) return;
    
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Reservacion exitosa");
            form.reset();
        });
    }
    
    // Ejecutar las funciones para diferentes formularios
    mensajeRegistro();
    mensajeEnviado();
    mensajeContacto();
    mensajeCotizacion();
    mensajeComentario();
    mensajeSesion();
    mensajeBusqueda();
    mensajeSuscripcion();
    mensajeReserva();
    
    

    // Alerta "Hola Mundo" para una página específica
    if (window.location.pathname.endsWith('U7_1_Ejercicio.html')) {
        alert("Hola Mundo");
    }

    // Cambiar contenido del elemento en una página específica
    if (window.location.pathname.endsWith('U7_2_Ejercicio.html')) {
        var elemento = document.getElementById('parrafo-id');
        if (elemento) {
            elemento.innerHTML = "¡Hola!";
        }
    }

    // Validar formulario para campos vacíos
    if (window.location.pathname.endsWith('U7_3_Ejercicio.html')) {
        var formulario3 = document.getElementById('formulario3u7');
        if (formulario3) {
            formulario3.onsubmit = function(event) {
                var nombre = document.getElementById('nombre').value;
                var email = document.getElementById('email').value;

                if (nombre === '' || email === '') {
                    alert('Por favor, rellena todos los campos.');
                    event.preventDefault();
                }
            };
        }
    }

    // Función de suma para una página específica
    if (window.location.pathname.endsWith('U7_4_Ejercicio.html')) {
        function sumar(a, b) {
            return a + b;
        }

        var formulario4 = document.getElementById('formulario4u7');
        if (formulario4) {
            formulario4.onsubmit = function(event) {
                event.preventDefault();

                var numero1 = parseFloat(document.getElementById('numero1').value);
                var numero2 = parseFloat(document.getElementById('numero2').value);

                var resultado = sumar(numero1, numero2);

                document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado;
            };
        }
    }

    // Cambiar el color de fondo para una página específica
    if (window.location.pathname.endsWith('U7_5_Ejercicio.html')) {
        function cambiarColorFondo(){
            document.body.style.backgroundColor = 'lightblue';
        }

        var boton = document.getElementById('cambiarColor');
        if (boton) {
            boton.addEventListener('click', cambiarColorFondo);
        }
    }

    // Generar número aleatorio para una página específica
    if (window.location.pathname.endsWith('U7_6_Ejercicio.html')) {
        function generarNumeroAleatorio() {
            return Math.floor(Math.random() * 100) + 1;
        }

        var boton = document.getElementById('generarNumero');
        if (boton) {
            boton.addEventListener('click', function() {
                var numeroAleatorio = generarNumeroAleatorio();
                document.getElementById('numeroAleatorio').innerHTML = 'Número aleatorio: ' + numeroAleatorio;
            });
        }
    }

    // Objeto Persona para una página específica
    if (window.location.pathname.endsWith('U8_1_Ejercicio.html')) {
        const persona = {
            nombre: 'Hector Daniel Guzman Magaña',
            edad: 26,
            email: 'vector981@hotmail.com'
        };

        const personaInfo = document.getElementById('personaInfo');
        personaInfo.textContent = `Nombre: ${persona.nombre}, Edad: ${persona.edad}, Email: ${persona.email}`;
    }

    // Persona con nombre completo para una página específica
    if (window.location.pathname.endsWith('U8_2_Ejercicio.html')) {
        const usuario = {
            nombre: 'Hector Daniel',
            apellidos: 'Guzman Magaña'
        };

        const nombreCompleto = `${usuario.nombre} ${usuario.apellidos}`;
        const nombreCompletoDiv = document.getElementById('usuarioInfo');
        if (nombreCompletoDiv) {
            nombreCompletoDiv.textContent = `Nombre completo: ${nombreCompleto}`;
        }
    }

    // Mascota para una página específica
    if (window.location.pathname.endsWith('U8_3_Ejercicio.html')) {
        const mascota = {
            nombre: 'Duck Fishroy',
            edad: 8,
            tipoAnimal: 'Perro'
        };

        const mascotaInfoDiv = document.getElementById('mascota-info');
        mascotaInfoDiv.textContent = `Nombre: ${mascota.nombre}, Edad: ${mascota.edad}, Tipo de Animal: ${mascota.tipoAnimal}`;
    }

    // Cadena de caracteres "hola mundo" para una página específica
    if (window.location.pathname.endsWith('U8_4_Ejercicio.html')) {
        const mensaje = 'hola' + ' ' + 'mundo';
        const mensajeDiv = document.getElementById('mensaje');
        mensajeDiv.textContent = mensaje;
    }

    // Objeto Libro para una página específica
    if (window.location.pathname.endsWith('U8_5_Ejercicio.html')) {
        const libro = {
            titulo: 'Cien Años de Soledad',
            autor: 'Gabriel García Márquez',
            fechaDePublicacion: '1967'
        };

        const libroInfoDiv = document.getElementById('libro-info');
        libroInfoDiv.textContent = `Título: ${libro.titulo}, Autor: ${libro.autor}, Fecha de Publicación: ${libro.fechaDePublicacion}`;
    }

    // Variable de fecha actual para una página específica
    if (window.location.pathname.endsWith('U8_6_Ejercicio.html')) {
        const date = new Date().toLocaleDateString();
        const fechaActualDiv = document.getElementById('fecha-actual');
        fechaActualDiv.textContent = `Fecha Actual: ${date}`;
    }

    // Arreglo de numeros
    if (window.location.pathname.endsWith('U9_1_Ejercicio.html')) {
        const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const numerosDiv = document.getElementById('numeros');
    numerosDiv.textContent = `Números: ${numeros.join(', ')}`;
    }

    //Colores
    if (window.location.pathname.endsWith('U9_2_Ejercicio.html')) {
        const colores = ['rojo', 'azul', 'verde', 'amarillo', 'naranja'];

    const tercerColor = colores[2]; 

    const colorDiv = document.getElementById('color');
    colorDiv.textContent = `El tercer color es: ${tercerColor}`;
    }

    //Multiplicacion
    if (window.location.pathname.endsWith('U9_3_Ejercicio.html')) {
        const numeros = [1, 2, 3, 4, 5];
    
    const multiplicados = numeros.map(num => num * 2);
    
    const multiplicadosDiv = document.getElementById('multiplicados');
    multiplicadosDiv.textContent = `Números multiplicados por dos: ${multiplicados.join(', ')}`;
    }

    //Contar Frutas
    if (window.location.pathname.endsWith('U9_4_Ejercicio.html')) {
        const frutas = ['manzana', 'pera', 'banana', 'naranja', 'kiwi'];
    
        const cantidadFrutas = frutas.length;
        
        const cantidadFrutasDiv = document.getElementById('cantidad-frutas');
        cantidadFrutasDiv.textContent = `Cantidad de frutas: ${cantidadFrutas}`;
    }  
    
    //Pares
    if (window.location.pathname.endsWith('U9_5_Ejercicio.html')) {
        const numeros = [5, 10, 15, 20, 25];
    
    const pares = numeros.filter(num => num % 2 === 0);
    
    const numerosParesDiv = document.getElementById('numeros-pares');
    numerosParesDiv.textContent = `Números pares: ${pares.join(', ')}`;
    }

    //Nombres Alfabeticamente
    if (window.location.pathname.endsWith('U9_6_Ejercicio.html')) {
        const nombres = ['Ana', 'Juan', 'María', 'Pedro', 'Luis'];
    
    const nombresOrdenados = nombres.sort();
    
    const nombresOrdenadosDiv = document.getElementById('nombres-ordenados');
    nombresOrdenadosDiv.textContent = `Nombres ordenados: ${nombresOrdenados.join(', ')}`;
    }

    //Añadir nodo hijo
    if (window.location.pathname.endsWith('U13_1_Ejercicio.html')) {
        window.addEventListener('DOMContentLoaded', (event) => {
            const padre = document.getElementById('padre');
            const hijo = document.createElement('p');
            hijo.textContent = 'Soy el nodo hijo';
            padre.appendChild(hijo);
        });
    }

    //Eliminar nodo hijo especifico
    if (window.location.pathname.endsWith('U13_2_Ejercicio.html')) {
        window.addEventListener('DOMContentLoaded', (event) => {
            const padre = document.getElementById('padre');
            const hijo = document.getElementById('hijo');
            padre.removeChild(hijo);
        });        
    }

    //Ocultar elemento
    if (window.location.pathname.endsWith('U13_4_Ejercicio.html')){
    document.getElementById('ocultarBoton_4u13').addEventListener('click', function() {
        var elemento = document.getElementById('elemento_4u13');
        if (elemento.style.display === 'none') {
            elemento.style.display = 'block';
        } else {
            elemento.style.display = 'none';
        }
    });
}
};        
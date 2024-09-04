export const accesibleKeypad = 
`
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario Accesible</title>
    <style>
        .focus-indicator:focus {
            outline: 2px solid blue; /* Indicador visible del foco */
        }
    </style>
</head>
<body>
    <form>
        <label for="name">Nombre:</label>
        <input type="text" id="name" class="focus-indicator" />
        
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" class="focus-indicator" />
        
        <button type="submit" class="focus-indicator">Enviar</button>
    </form>
</body>
</html>
`
export const outSpan = 
`
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de Modal Accesible</title>
    <style>
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            justify-content: center;
            align-items: center;
        }
        .modal-content {
            background: white;
            padding: 20px;
            border-radius: 5px;
        }
        .focus-indicator:focus {
            outline: 2px solid blue; /* Indicador visible del foco */
        }
    </style>
</head>
<body>

<button id="openModal" class="focus-indicator">Abrir Modal</button>

<div id="myModal" class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
    <div class="modal-content">
        <h2 id="modalTitle">Título del Modal</h2>
        <p id="modalDescription">Contenido del modal.</p>
        <button id="closeModal" class="focus-indicator">Cerrar</button>
    </div>
</div>

<script>
    const openModal = document.getElementById('openModal');
    const closeModal = document.getElementById('closeModal');
    const modal = document.getElementById('myModal');

    openModal.addEventListener('click', () => {
        modal.style.display = 'flex';
        closeModal.focus(); // Mueve el foco al botón de cerrar al abrir el modal
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        openModal.focus(); // Regresa el foco al botón de abrir al cerrar el modal
    });

    // Cerrar modal con tecla Esc
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
            openModal.focus();
        }
    });
</script>

</body>
</html>

`

export const time = 
`
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajuste de Tiempo</title>
    <style>
        .timer {
            font-size: 24px;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>

<h1>Actividad con Ajuste de Tiempo</h1>

<div class="timer">
    Tiempo restante: <span id="timer">00:00</span>
</div>

<!-- Botones para ajustar el tiempo -->
<button onclick="extendTime()">Extender Tiempo</button>
<button onclick="pauseTime()">Pausar Tiempo</button>
<button onclick="resumeTime()">Reanudar Tiempo</button>

<script>
    let timeRemaining = 300; // Tiempo en segundos (5 minutos)
    let timerElement = document.getElementById('timer');
    let timerInterval;
    
    function updateTimer() {
        let minutes = Math.floor(timeRemaining / 60);
        let seconds = timeRemaining % 60;
    
        
        if (timeRemaining > 0) {
            timeRemaining--;
        } else {
            clearInterval(timerInterval);
            alert('Tiempo agotado');
        }
    }

    function startTimer() {
        timerInterval = setInterval(updateTimer, 1000);
    }

    function extendTime() {
        timeRemaining += 300; // Extiende el tiempo en 5 minutos
    }

    function pauseTime() {
        clearInterval(timerInterval);
    }

    function resumeTime() {
        startTimer();
    }

    // Inicia el temporizador al cargar la página
    startTimer();
</script>

</body>
</html>

`
export const justTime = 
`
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajuste de Tiempo</title>
    <script>
        let tiempoRestante = 60; // 60 segundos

        function actualizarTiempo() {
            document.getElementById('tiempo').textContent = tiempoRestante;
            if (tiempoRestante > 0) {
                tiempoRestante--;
            } else {
                alert("El tiempo se ha agotado.");
            }
        }

        function extenderTiempo() {
            tiempoRestante += 60; // Extiende el tiempo 60 segundos más
        }

        setInterval(actualizarTiempo, 1000);
    </script>
</head>
<body>
    <h1>Formulario con límite de tiempo</h1>
    <p>Tiempo restante: <span id="tiempo">60</span> segundos</p>
    <button onclick="extenderTiempo()">Extender tiempo</button>
    <form>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre">
        <input type="submit" value="Enviar">
    </form>
</body>
</html>

`

export const pause = 
`
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pausar Contenido en Movimiento</title>
    <style>
        .carousel {
            width: 300px;
            overflow: hidden;
        }
        .carousel img {
            width: 100%;
        }
    </style>
</head>
<body>
    <h1>Carrusel de Imágenes</h1>
    <div class="carousel">
        <img id="carouselImg" src="imagen1.jpg" alt="Imagen 1">
    </div>
    <button onclick="pausarCarrusel()">Pausar</button>
    <button onclick="reanudarCarrusel()">Reanudar</button>

    <script>
        let imagenes = ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg'];
        let indice = 0;
        let intervalo;

        function cambiarImagen() {
            indice = (indice + 1) % imagenes.length;
            document.getElementById('carouselImg').src = imagenes[indice];
        }

        function pausarCarrusel() {
            clearInterval(intervalo);
        }

        function reanudarCarrusel() {
            intervalo = setInterval(cambiarImagen, 2000);
        }

        // Comienza automáticamente
        intervalo = setInterval(cambiarImagen, 2000);
    </script>
</body>
</html>

`

export const threeFlash = 
`
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Evitar Destellos</title>
    <style>
        .flash {
            width: 200px;
            height: 200px;
            background-color: red;
            animation: cambioSuave 5s infinite;
        }

        @keyframes cambioSuave {
            0% { background-color: red; }
            50% { background-color: yellow; }
            100% { background-color: red; }
        }
    </style>
</head>
<body>
    <h1>Evitar Destellos</h1>
    <div class="flash"></div>
</body>
</html>

`
export const noBlocks = 
`
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Evitar Destellos</title>
    <style>
        .flash {
            width: 200px;
            height: 200px;
            background-color: red;
            animation: cambioSuave 5s infinite;
        }

        @keyframes cambioSuave {
            0% { background-color: red; }
            50% { background-color: yellow; }
            100% { background-color: red; }
        }
    </style>
</head>
<body>
    <h1>Evitar Destellos</h1>
    <div class="flash"></div>
</body>
</html>

`

export const pageWithTittle = 
`
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Contacto - Empresa XYZ</title>
</head>
<body>
    <h1>Formulario de Contacto</h1>
    <p>Por favor, rellena el formulario a continuación para ponerte en contacto con nosotros.</p>
</body>
</html>

`

export const focusOrder = 
`
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página con Orden de Foco</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="inicio">
            <h1>Bienvenido a nuestro sitio web</h1>
            <p>Contenido introductorio.</p>
        </section>

        <section id="servicios">
            <h2>Nuestros Servicios</h2>
            <p>Descripción de los servicios.</p>
        </section>

        <section id="contacto">
            <h2>Contáctanos</h2>
            <form>
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre">
                <input type="submit" value="Enviar">
            </form>
        </section>
    </main>
</body>
</html>
`
export const purposeLink = 
`
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Propósito del Enlace en Contexto</title>
</head>
<body>
    <h1>Recursos</h1>
    <ul>
        <li><a href="https://www.w3.org/WAI/">Sitio web de accesibilidad del W3C</a></li>
        <li><a href="https://www.w3.org/WAI/WCAG21/quickref/">Guía rápida de WCAG 2.1</a></li>
        <li><a href="https://developer.mozilla.org/">Documentación para desarrolladores de MDN</a></li>
    </ul>
</body>
</html>

`
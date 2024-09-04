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


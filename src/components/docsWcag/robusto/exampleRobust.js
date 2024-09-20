export const codeExample1 = 
`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de Código Robusto</title>
</head>
<body>
    <header>
        <h1>Bienvenido al portal del SENA</h1>
    </header>
    
    <main>
        <section>
            <h2>Sobre el SENA</h2>
            <p>El SENA es una institución dedicada a la formación profesional integral, desarrollando programas de aprendizaje en diversas áreas del conocimiento.</p>
        </section>

        <section>
            <h2>Nuestros Servicios</h2>
            <ul>
                <li>Programas de formación técnica y tecnológica</li>
                <li>Capacitación en nuevas tecnologías</li>
                <li>Asesoría en emprendimiento</li>
            </ul>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 SENA - Todos los derechos reservados</p>
    </footer>
</body>
</html>
`;

export const codeExample2 = 
`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Contacto Accesible - SENA</title>
</head>
<body>
    <header>
        <h1>Formulario de Contacto</h1>
    </header>

    <main>
        <form aria-labelledby="contacto-titulo">
            <h2 id="contacto-titulo">Ponte en contacto con nosotros</h2>
            
            <label for="nombre">Nombre Completo:</label>
            <input type="text" id="nombre" name="nombre" aria-required="true" aria-label="Nombre completo">
            
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" aria-required="true" aria-label="Correo Electrónico">

            <label for="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" aria-required="true" aria-label="Tu mensaje"></textarea>
            
            <button type="submit" aria-label="Enviar mensaje">Enviar</button>
        </form>
    </main>

    <footer>
        <p>&copy; 2024 SENA - Todos los derechos reservados</p>
    </footer>
</body>
</html>
`;

export const codeExample3 = 
`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de Modal Accesible - SENA</title>
    <style>
        /* Estilos básicos para el modal */
        .modal {
            display: none; /* Escondido por defecto */
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.5);
        }

        .modal-content {
            background-color: #fefefe;
            margin: 15% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
            max-width: 500px;
        }

        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }

        .close:hover,
        .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Demostración de un Modal Accesible</h1>

    <button id="openModal" aria-haspopup="dialog" aria-controls="myModal">Abrir Modal</button>

    <div id="myModal" class="modal" role="dialog" aria-labelledby="modalTitle" aria-modal="true">
        <div class="modal-content">
            <span class="close" id="closeModal" aria-label="Cerrar">&times;</span>
            <h2 id="modalTitle">Título del Modal</h2>
            <p>Este es un ejemplo de un modal accesible dentro del contexto del SENA.</p>
            <button id="confirmButton">Confirmar</button>
        </div>
    </div>

    <script>
        const modal = document.getElementById('myModal');
        const openModalBtn = document.getElementById('openModal');
        const closeModalBtn = document.getElementById('closeModal');
        const confirmBtn = document.getElementById('confirmButton');

        openModalBtn.addEventListener('click', () => {
            modal.style.display = 'block';
            closeModalBtn.focus(); // Enfocar el botón de cerrar
        });

        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            openModalBtn.focus(); // Devolver el enfoque al botón que abrió el modal
        });

        confirmBtn.addEventListener('click', () => {
            alert('Confirmado!');
            modal.style.display = 'none';
            openModalBtn.focus();
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
                openModalBtn.focus();
            }
        });
    </script>
</body>
</html>
`;

import { useEffect } from 'react';
import { handleFontSizeChange, handleContrastChange, handleColorBlindnessChange, readText} from './library/library.js';

const App = () => {

  useEffect(() => {
    const cleanupFontSize = handleFontSizeChange();
    const cleanupContrast = handleContrastChange();
    const cleanupColorBlindness = handleColorBlindnessChange();
    const cleanupReatText = readText() 
    // Limpia los event listeners cuando el componente se desmonte
    return () => {
      cleanupFontSize();
      cleanupContrast();
      cleanupColorBlindness();
      cleanupReatText();
    };},[]);



  return (
    <>
      <header>
        <h1>Web Accesible</h1>
        <div className="accessibility-controls">
          <label htmlFor="font-size">Tamaño de fuente:</label>
          <select id="font-size">
            <option value="default">Por defecto</option>
            <option value="large">Grande</option>
            <option value="x-large">Muy grande</option>
          </select>

          <label htmlFor="contrast">Contraste:</label>
          <select id="contrast">
            <option value="default">Por defecto</option>
            <option value="high-contrast">Alto contraste</option>
          </select>

          <label htmlFor="color-blindness">Filtros para daltonismo:</label>
          <select id="color-blindness">
            <option value="default">Por defecto</option>
            <option value="protanopia">Protanopia</option>
            <option value="deuteranopia">Deuteranopia</option>
            <option value="tritanopia">Tritanopia</option>
          </select>

          <button id="toggle-screen-reader">Activar/desactivar lector de pantalla</button>
        </div>
      </header>
      <main>
        <section>
        <select id="voiceSelect"></select>
          <h2>Sección 1</h2>
          <p>Este es un ejemplo de contenido accesible.</p>
          <div className="color-sample">
            <div className="color-red"></div>
            <div className="color-green"></div>
            <div className="color-blue"></div>
            <div className="color-yellow"></div>
          </div>
        </section>
        <section>
          <h2>Sección 2</h2>
          <p>Este es otro ejemplo de contenido accesible.</p>
          <p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sena_Colombia_logo.svg/1200px-Sena_Colombia_logo.svg.png" alt="Descripción de la imagen del logo del SENA, y a su vez con esta prueba podemos confirmar que es posible hacer un correcto uso de las aplicacion y permitir la accesibilidad a las personas con alguna discapacidad visual" id="example-image" /></p>
          <p>
            <video id="example-video" controls>
              <source src="video.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
            </video>
          </p>
          <div className="color-sample">
            <div className="color-red"></div>
            <div className="color-green"></div>
            <div className="color-blue"></div>
            <div className="color-yellow"></div>
          </div>
        </section>
      </main>
      <div className="action-buttons">
        <button id="start-image-description">Iniciar descripción de imagen</button>
        <button id="start-voice-recognition">Iniciar reconocimiento de voz</button>
      </div>
    </>
  );
}

export default App;

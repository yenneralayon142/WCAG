import React from 'react';
import instagram from '../mocks/instagram.json';

export default function SearchUrl() {
  const urls = instagram.inapplicable; // Accediendo al array 'Inapplicable'
  const hasUrls = urls?.length > 0;

  return (
    <div className='page'>
      <header>
        <h1>Buscador URLs</h1>
        <form className='form'>
          <input placeholder='Ingrese Url' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        {hasUrls ? (
          <table>
            <thead>
              <tr>
                <th>Descripción</th>
                <th>Ayuda</th>
                <th>URL de Ayuda</th>
                <th>Impacto</th>
              </tr>
            </thead>
            <tbody>
              {urls.map((url) => (
                <tr key={url.id}>
                  <td>{url.description}</td>
                  <td>{url.help}</td>
                  <td>
                    <a href={url.helpUrl} target='_blank' rel='noopener noreferrer'>
                      {url.helpUrl}
                    </a>
                  </td>
                  <td>{url.impact ? url.impact : 'No especificado'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No se encontraron resultados</p>
        )}
      </main>
    </div>
  );
}

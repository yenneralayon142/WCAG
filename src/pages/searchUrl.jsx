import React from 'react';
import { useUrls } from '../Hooks/Maps/useSpecifyUrls';
import { Urls } from '../components/searchUrl/specifyUrl';

export default function SearchUrl() {
  const { urls, getUrls } = useUrls(); // search vacío, ya que no se usa

  const handleSubmit = () => {
    getUrls(); // Ejecuta la búsqueda de URLs al presionar "Analizar"
  };

  return (
    <div className='page'>
      <header>
        <h1>Buscador URLs</h1>
          <button type='submit' onClick={handleSubmit}>Analizar</button>
      </header>
      <main>
        <Urls urls={urls} />
      </main>
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { useSearch } from '../Hooks/useSearch';
import { useAnalyzeUrls } from '../Hooks/Maps/useAnalyzeUrls';
import {AnalyzeUrls} from '../components/searchUrl/analyzeUrl'
import {Urls} from '../components/searchUrl/specifyUrl'
import { useUrls } from '../Hooks/Maps/useSpecifyUrls';


export default function SearchUrl() {
  
  const { search, updateSearch, error } = useSearch()
  const { urls,getUrls } = useUrls({search})
  //const {analyzeUrls, postAnalyzeUrls} = useAnalyzeUrls({search})
  const [query, setQuery] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault()
    getUrls()
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
    updateSearch(event.target.value); // Actualiza también el estado del hook useSearch
  };


  return (
    <div className='page'>
      <header>
        <h1>Buscador URLs</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }}
            onChange={handleChange}
            value={query}
            name='query'
            placeholder='Ingrese URL'
          />
          <button type='submit'>Analizar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <Urls urls={urls}/>
      </main>
    </div>
  );
}

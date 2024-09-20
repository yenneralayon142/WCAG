import React from 'react';
import { useUrls } from '../Hooks/Maps/useSpecifyUrls'
import { Urls } from '../components/searchUrl/specifyUrl'
import { DomainUrls } from '../components/searchUrl/domainUrl'
import { useDomainUrls } from '../Hooks/Maps/useurlsDomain'
import { useState } from 'react'

export default function SearchUrl() {
  const { urls, getUrls } = useUrls(); // search vacío, ya que no se usa
  const {domainUrls, getDomainUrls} = useDomainUrls()
  const [domain, setDomain] = useState('') // Creamos un estado para el dominio

  const handleSubmit = () => {
    getUrls() // Ejecuta la búsqueda al presionar Buscar
  }

  const handleSubmitDomain = () => {
    if (domain) {
      getDomainUrls(domain)  // Llamamos al hook pasando el dominio ingresado
    } else {
      alert('Por favor ingrese un dominio válido')
    }
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador URLS</h1>
        <span className='k-autocomplete k-input k-input-md k-rounded-md k-input-solid'>
            <input
              className='k-input-inner'
              type="text"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}  // Actualizamos el valor del dominio cuando el usuario escribe
              placeholder="Ingresa el dominio"
            />
        </span>
        <button type='submit' onClick={handleSubmit}>Buscar Historico</button>
        <button type='submit' onClick={handleSubmitDomain}>Ver detalle de la busqueda de Dominio</button>
      </header>
      <main>
        <Urls urls={urls} />
        <DomainUrls domainUrls={domainUrls}/>
      </main>
    </div>
  );
}

import * as React from "react";
import {
  InputClearValue,
  InputSeparator,
  TextBox,
} from "@progress/kendo-react-inputs";
import { SvgIcon } from "@progress/kendo-react-common";
import { cancelIcon } from "@progress/kendo-svg-icons";
import { useSearch } from '../Hooks/useSearch' 
import { useUrls } from '../Hooks/useUrls'
import debounce from 'just-debounce-it'
import { useState,useCallback } from 'react'
import {Urls} from '../components/url'

//const EMPTY_VALUE = "";

export default function SearchUrl() {
    const [sort,setSort] = useState(false)
    const { search , updateSearch, error} = useSearch()
    const { urls, loading , getUrls} = useUrls({ search,sort })

    const debounceGetMovies = useCallback(
      debounce(search =>{
      getUrls({search})
    }, 300)
    , [getUrls]
    )
  
    const handleSubmit = (event) => {
      event.preventDefault()
      getUrls()
    }
  
    const handleSort = (sort) => {
     setSort(!sort)
    }
  
    const handleChange = (event) => {
      const newSearch = event.target.value
      updateSearch(newSearch)
      debounceGetMovies(newSearch)
    }


    return (
        <div className="profile-demo card-container">
          <div className="k-card custom-card">
            <div className="card-column">
              <div className="avatar-title-container">
                <div className="k-skeleton skeleton-avatar" />
                <h4 className="k-h4">¿La pagina es accesible?</h4>
              </div>
            <div className="avatar-title-container">
                <p>
                    A continuación, encontrará un campo donde podrá ingresar una URL. Esto le permitirá verificar si la página web es accesible o no. Además, recibirá un conjunto de recomendaciones para mejorar la accesibilidad de la web y aplicar mejores prácticas de desarrollo.
                </p>
            </div>
              <div className="component-container">
                  <form className="k-form" onSubmit={handleSubmit}>
                    <label htmlFor=""> Ingrese su url</label>
                    <fieldset>
                      <TextBox
                        style={{
                          border: '1px solid transparent', 
                          borderColor: error ? 'red' : 'transparent'
                          }}onChange={handleChange} value={search} name='query' placeholder='http://support.google.com/google-ads'/>
                    </fieldset>
                  </form>
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                  <button className="component-container button-submit" type="submit">
                      Buscar
                  </button>
                </div>
                <main>
                      {
                          loading ?<p>Cargando..</p> : <Urls movies={urls}/> 
                      }
                </main>
              </div>
          </div>
        </div>
    )
}
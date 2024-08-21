function ListOfUrls  ({ urls }) {
    return (
        <ul className="urls">
        {
          urls.map(url =>(
            <li className="url" key={url.Id}>
              <h3>{url.description}</h3>
              <p>{url.help}</p>
              <a href={url.helpUrl}>Enlace de ayuda</a>
              <p>{url.impact}</p>
              <p>{url.nodes}</p>
              <p>{url.tags}</p>
            </li>
          ))
        }
      </ul>
    )
}

function NoUrlsResults () {
    return (
        <p>No se encontraron urls para esta busqueda</p>
    )
}


export function Movies ({ urls }) {
    const hasMovies = urls?.length > 0
    return (
        hasMovies
            ? <ListOfUrls movies={urls}/>
            : <NoUrlsResults />
    )   
}
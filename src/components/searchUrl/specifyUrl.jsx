export function ListOfUrls ({urls}) {
    return(
      <ul>
      {urls.map(url => (
        <li key={url.id}>
          <p><strong>ID:</strong> {url.id}</p>
          <p><strong>Domain:</strong> {url.domain}</p>
          <p><strong>URL:</strong> {url.url}</p>
          <p><strong>Date:</strong> {url.date}</p>
          <hr />
        </li>
      ))}
    </ul>
    )
}


export function Urls ({urls}) {
    const hasUrls = urls?.length > 0;
    return (
        hasUrls
        ? <ListOfUrls urls ={urls}/>
        : <p>No se encontraron resultados</p>
    )
}
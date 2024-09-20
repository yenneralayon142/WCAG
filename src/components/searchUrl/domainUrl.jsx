function ListOfDomainUrls ({domainUrls}) {
    return (
        <ul>
          {domainUrls.map(domainUrl => (
            <li key={domainUrl._id}>
              <p><strong>Domain:</strong> {domainUrl.domain}</p>
              <p><strong>URL:</strong> {domainUrl.url}</p>
              <hr />
            </li>
          ))}
        </ul>
    )
}

export function DomainUrls ({domainUrls}) {
    return(
        domainUrls.length > 0
        ?<ListOfDomainUrls domainUrls={domainUrls}/>
        :<p>No se encontraron resultados</p>
    )
}


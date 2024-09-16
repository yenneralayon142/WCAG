export function ListofAnalyze({ analyzeUrls }) {
    return (
        <div>
            {analyzeUrls.map((analyzeUrl, index) => (
                <div key={index}>
                    <p>{analyzeUrl.message}</p>
                    <p>{analyzeUrl.status}</p>
                </div>
            ))}
        </div>
    );
}



export function renderNoResults () {
    return(
        <p>No se encontraron resultados</p>
    )
}

export function AnalyzeUrls({ analyzeUrls }) {
    const hasAnalyzeUrls = analyzeUrls?.length > 0; 
    return (
      hasAnalyzeUrls 
        ? <ListofAnalyze analyzeUrls={analyzeUrls} />
        : <p>No se encontraron resultados</p> 
    );
  }
  
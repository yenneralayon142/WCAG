export const searchUrlsDomain = async (domain) => {
    if(domain === '') return null 
    // Si el campo search está vacío, de todas formas continuará con el fetch
    try {
        const response = await fetch(`http://127.0.0.1:5000/history/domain/${domain}`)

       // if (!response.ok) {
       //     throw new Error(HTTP error! Status: ${response.status});
       // }
        
        const domainUrls = await response.json()
        return domainUrls.data

    } catch (e) {
        console.error('Error buscando URLs:', e.message || e);
        return []; // Devuelve un array vacío en caso de error
    }
}
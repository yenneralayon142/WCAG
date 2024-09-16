export const searchUrls = async ({ search }) => {
    if (search === '') return;

    try {
        const response = await fetch(`http://127.0.0.1:5000/history`, {
            method: 'GET',
            mode: 'no-cors', // Cambiado a 'cors' para permitir el acceso a recursos externos
            headers: {
                'Content-Type': 'application/json', // Opcional para solicitudes GET
                'Accept': 'application/json' // Espera respuesta en formato JSON
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();

        const urls = json.data;

        // Crear una lista desordenada
        const unorderedList = document.createElement('ul');
        urls?.forEach(url => {
            const listItem = document.createElement('li');
            listItem.textContent = `ID: ${url.id}, Date: ${url.date}, Domain: ${url.domain}, URL: ${url.url}`;
            unorderedList.appendChild(listItem);
        });

        // Limpiar cualquier lista previa antes de añadir la nueva
        document.querySelectorAll('ul').forEach(list => list.remove());

        // Añadir la lista desordenada al cuerpo del documento
        document.body.appendChild(unorderedList);

    } catch (e) {
        console.error('Error buscando URLs:', e);
    }
};

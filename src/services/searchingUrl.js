const API_KEY = '4287ad07'

export const searchingUrl = async ({ search }) => {
    if (search === '') return null
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json = await response.json()

        const urls = json.Search

        return urls?.map(url =>({
        description: url.Description,
        help: url.Help,
        helpUrl: url.HelpUrl,
        id: url.Id,
        impact: url.Impact,
        nodes : url.Nodes,
        tags : url.Tags
     }))
    }catch(e) {
        throw new Error('Error searching url')
    }     
}
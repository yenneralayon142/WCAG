import { useEffect, useState, useRef} from 'react'

export default function useSearch () {
    const [search,updateSearch] = useState('')
    const [error,setError] = useState(null)
    const isFirstInput = useRef(true)
  
    useEffect(() => {
      if(isFirstInput.current) {
        isFirstInput.current = search === '' //true
        return
      }
      if(search === '') {
        setError('No se puede buscar una url vacia')
        return
      }
      if(search.length < 3) {
        setError('La búsqueda debe tener al menos 3 caracteres')
        return
      }
      setError(null)
    },[search])
    return {search,updateSearch,error};
  }


  
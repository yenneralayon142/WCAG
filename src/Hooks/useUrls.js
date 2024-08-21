import { useMemo, useRef, useState, useCallback} from 'react'


export function useUrls ({ search, sort }) {
  const [urls, setUrls] = useState([])
  const [loading, setLoading] = useState(false)

  // el error no se usa pero puedes implementarlo
  // si quieres:
  const [, setError] = useState(null)
  const previousSearch = useRef(search)

  const getUrls = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return
    // search es ''

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newUrls = await searchUrls({ search })
      setUrls(newUrls)
    } catch (e) {
      setError(e.message)
    } finally {
      // tanto en el try como en el catch
      setLoading(false)
    }
  }, [])

  const sortedUrls = useMemo(() => {
        if (!urls) return;
    return sort
      ? [...urls].sort((a, b) => a.title.localeCompare(b.title))
      : urls
  }, [sort, urls])

  return { urls: sortedUrls, getUrls, loading }
}
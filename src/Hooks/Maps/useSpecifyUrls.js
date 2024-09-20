import { searchUrls } from '../../services/urls';
import { useState } from 'react'

export function useUrls() {
  const [urls, setUrls] = useState([])

  const getUrls = async () => {
    const newUrls = await searchUrls()
    setUrls(newUrls);
  }

  return { urls, getUrls }
}

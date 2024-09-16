import { searchUrls } from '../../services/urls';
import { useState } from 'react';

export function useUrls ({search}) {
  const [urls,setUrls] = useState([])
  
  const getUrls = async () => {
    const newUrls = await searchUrls({search})
    setUrls(newUrls)
  }
 
  return {urls,getUrls}
}
import { searchUrls } from '../../services/urls';
import { useState } from 'react';

export function useUrls() {
  const [urls, setUrls] = useState([]);

  const getUrls = async () => {
    const newUrls = await searchUrls(); // Llamada al servicio con search vacío
    setUrls(newUrls);
  };

  return { urls, getUrls };
}

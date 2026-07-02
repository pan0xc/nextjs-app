import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';

import { fetchOriginURL, fetchOriginURL as fetchOriginURLApi } from '@/lib/services/shortURL';
import { useParams } from 'next/navigation';

export function useRedirect() {
  const { urlCode = '' } = useParams<{ urlCode: string }>();

  const {
    mutate: fetctOriginURL,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationKey: ['getShortURL'],
    mutationFn: () => fetchOriginURLApi(urlCode || ''),
    onSuccess: (data) => {
      // Redirect to origin URL
      window.location.href = data.data as string;
    },
  });

  useEffect(() => {
    fetchOriginURL();
  }, []);

  return {
    isPending,
    isError,
    error,
  };
}

import { useSetAtom } from 'jotai';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';

import { isURLShortSuccessAtom, shortURLAtom } from '@/lib/atoms/shortURL';
import { createShortURL as createShortURLApi } from '@/lib/services/shortURL';

export function useGenerateForm() {
  const setIsURLShortSuccess = useSetAtom(isURLShortSuccessAtom);
  const setShortURL = useSetAtom(shortURLAtom);

  const { mutate: createShortURL, isPending: isCreating, reset } = useMutation({
    mutationKey: ['getOriginURL'],
    mutationFn: (data: API.URLInput) =>
      createShortURLApi(data.originURL, data.urlCode || ''),
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: (data) => {
      const urlRecord = data.data as API.URLRecord;

      setShortURL(urlRecord.shortURL);
      setIsURLShortSuccess(true);

      toast.success(data.message || 'Short URL created successfully');
    },
  });

  function onSubmit(data: API.URLInput) {
    reset()
    setIsURLShortSuccess(false);
    setShortURL('');
    createShortURL(data);
  }

  return {
    onSubmit,
    isCreating,
    reset
  };
}


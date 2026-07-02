const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function createShortURL(originURL: string, urlCode?: string): Promise<API.URLOutput> {
  console.log(API_URL);

  const response = await fetch(`${API_URL}/urlRecord`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ originURL, ...(urlCode && { urlCode }) }),
  });
  const result = await response.json();

  if (response.status !== 200 && response.status !== 201) {
    throw new Error(result.message);
  }

  return result;
}

export async function fetchOriginURL(urlCode: string): Promise<API.URLOutput> {
  const response = await fetch(`${API_URL}/${urlCode}`);
  const result = await response.json();

  if (response.status !== 200) {
    throw new Error(result.message);
  }

  return result;
}

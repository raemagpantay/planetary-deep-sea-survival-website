export const BASE_PATH = '/planetary-deep-sea-survival-website';

export const withBasePath = (path: string) => {
  return path.startsWith(BASE_PATH) 
    ? path 
    : `${BASE_PATH}${path.startsWith('/') ? path : `/${path}`}`;
};
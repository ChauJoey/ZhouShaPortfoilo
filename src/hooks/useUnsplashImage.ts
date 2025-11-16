import { useState, useEffect } from 'react';

export function useUnsplashImage(query: string) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // This will be replaced with actual Unsplash images
    setImageUrl(`https://source.unsplash.com/800x600/?${encodeURIComponent(query)}`);
  }, [query]);

  return imageUrl;
}

import { useState, useEffect } from 'react';
import QuestionMark from 'images/questionmark.jpg';

export function useImageLoader(path: string) {
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(true);

  const done = (src: string) => () => {
    setImage(src);
    setLoading(false);
  };

  useEffect(() => {
    if (image) return;

    setLoading(true);

    const img = new Image();
    img.src = path;
    img.onload = done(path);
    img.onerror = done(QuestionMark);
  }, [path]);

  return [image, loading] as const;
}

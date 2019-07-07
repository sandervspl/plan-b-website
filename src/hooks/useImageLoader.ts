import { useState, useEffect } from 'react';
import QuestionMark from 'images/questionmark.jpg';

export function useImageLoader(path: string) {
  const [image, setImage] = useState(QuestionMark);

  useEffect(() => {
    const img = new Image();
    img.src = path;
    img.onload = () => setImage(img.src);
    img.onerror = () => setImage(QuestionMark);
  }, [path]);

  return image;
}

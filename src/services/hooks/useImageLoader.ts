import { useState, useEffect } from 'react';
import QuestionMark from 'images/questionmark.jpg?external';

export function useImageLoader(path: string) {
  const [image, setImage] = useState();

  useEffect(() => {
    const img = new Image();
    img.src = path;
    img.onload = () => setImage(img.src);
    img.onerror = () => setImage(QuestionMark);
  }, [path]);

  return image;
}

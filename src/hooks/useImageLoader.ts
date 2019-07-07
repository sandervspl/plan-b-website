import { useState, useEffect, useRef } from 'react';
import QuestionMark from 'images/questionmark.jpg';

export function useImageLoader(path: string) {
  const defaultImg = useRef(QuestionMark);
  const [image, setImage] = useState();

  useEffect(() => {
    if (image) return;

    const img = new Image();
    img.src = path;
    img.onload = () => setImage(path);
    img.onerror = () => setImage(QuestionMark);
  }, [path]);

  return image || defaultImg.current;
}

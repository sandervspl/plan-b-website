import { useState, useRef, useEffect } from 'react';

export function useFileUpload() {
  const ref = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File>();

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    ref.current.onchange = (e) => handleFileChange(e as any);
  }, [ref]);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    if (!e.target || !e.target.files) {
      return;
    }

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadstart = () => {
      setUploading(true);
      setFile(undefined);
    };

    reader.onloadend = () => {
      setUploading(false);
      setFile(file);
    };

    reader.readAsDataURL(file);
  };

  return { ref, file, uploading } as const;
}

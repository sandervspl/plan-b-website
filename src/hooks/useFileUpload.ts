import { useState, useRef, useEffect } from 'react';

export function useFileUpload() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.onchange = (e) => handleFileChange(e as any);
  }, [inputRef]);

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

  const removeFile = () => {
    setFile(undefined);
    setUploading(false);

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return { inputRef, file, uploading, removeFile } as const;
}

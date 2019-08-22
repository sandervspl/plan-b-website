import { useState } from 'react';

export function useFileUpload() {
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File>();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  return { file, handleFileChange, uploading } as const;
}

import { useState } from 'react';

export function useFileUpload() {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File>();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!e.target || !e.target.files) {
      return;
    }

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadstart = () => {
      setLoading(true);
      setFile(undefined);
    };

    reader.onloadend = () => {
      setLoading(false);
      setFile(file);
    };

    reader.readAsDataURL(file);
  };

  return { file, handleFileChange, loading } as const;
}

import * as i from 'types';
import { useState, useEffect } from 'react';
import FirebaseStorage from 'src/firebase';

export function useGetFirebaseImages(storageRef: i.StorageRefs, resourceNames: string[]) {
  const [images, setImages] = useState<string[]>([]);
  const storage = FirebaseStorage.ref(storageRef);

  useEffect(() => {
    const getImages = async () => {
      const fetchedImages = await Promise.all(resourceNames.map(getImage));

      setImages(fetchedImages);
    };

    getImages();
  }, []);

  const getImage = async (name: string): Promise<string> => {
    return await storage.child(name).getDownloadURL();
  };

  return images;
}

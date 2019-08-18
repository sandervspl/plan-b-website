import * as i from 'types';
import { useState, useEffect } from 'react';
import FirebaseStorage from 'src/firebase';

export function useGetFirebaseImage(storageRef: i.StorageRefs, resourceName: string) {
  const [image, setImage] = useState<string>('');
  const storage = FirebaseStorage.ref(storageRef);

  useEffect(() => {
    const getImage = async () => {
      const fetchedImage = await storage.child(resourceName).getDownloadURL();

      setImage(fetchedImage);
    };

    getImage();
  }, []);

  return image;
}

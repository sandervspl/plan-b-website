import React, { useEffect } from 'react';
import { sendDkpXml } from 'ducks/dkp';
import { useSelector, useFileUpload, useDispatch } from 'hooks';
import { Button } from 'common';

const UploadDkpButton: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const sending = useSelector((state) => state.dkp.loading);
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const { ref, uploading, file } = useFileUpload();

  useEffect(() => {
    if (file) {
      dispatch(sendDkpXml(file));
    }
  }, [file]);

  if (!isAdmin) {
    return null;
  }

  return (
    <>
      <Button as="label" htmlFor="file-upload" disabled={uploading || sending}>
        Upload DKP Export
      </Button>
      <input
        id="file-upload"
        type="file"
        accept=".xml,.txt"
        name="dkp-xml"
        ref={ref}
      />
    </>
  );
};

export type Props = {

};

export default UploadDkpButton;

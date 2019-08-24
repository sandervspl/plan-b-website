import React, { useEffect } from 'react';
import { sendDkpXml } from 'ducks/dkp';
import { useSelector, useFileUpload, useDispatch } from 'hooks';
import { Button, ErrorText } from 'common';
import { UploadButtonContainer } from './styled';

const UploadDkpButton: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const sending = useSelector((state) => state.dkp.loading);
  const error = useSelector((state) => state.dkp.error);
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
    <UploadButtonContainer>
      <Button as="label" htmlFor="file-upload" disabled={uploading || sending}>
        Upload DKP Export
      </Button>
      {typeof error === 'string' && (
        <ErrorText>{error}</ErrorText>
      )}
      <input
        id="file-upload"
        type="file"
        accept=".xml,.txt"
        name="dkp-xml"
        ref={ref}
      />
    </UploadButtonContainer>
  );
};

export type Props = {

};

export default UploadDkpButton;
